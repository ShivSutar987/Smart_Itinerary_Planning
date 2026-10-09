const API_BASE = window.location.protocol.startsWith("http") ? "" : "http://localhost:5000";
const reviewForm = document.querySelector("#review-form");

// Submit Review (Add or Edit)
if (reviewForm) {
    reviewForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please Login First");
            return;
        }

        const rating = document.querySelector("#rating").value;
        const review_text = document.querySelector("#review_text").value;

        // If editing an existing review, update it via PUT endpoint
        if (window.currentEditingReviewId) {
            try {
                const response = await fetch(
                    `${API_BASE}/api/reviews/update/${window.currentEditingReviewId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            rating,
                            review_text
                        })
                    }
                );

                const data = await response.json();
                if (data.success) {
                    alert("Review updated successfully!");
                    window.currentEditingReviewId = null;
                    closeAddReviewModal();
                    loadReviews();
                    if (window.loadDashboardReviews) {
                        window.loadDashboardReviews();
                    }
                } else {
                    alert(data.message || "Failed to update review");
                }
            } catch (error) {
                console.error(error);
                alert("Review Update Failed");
            }
            return;
        }

        // Add normal review
        try {
            const response = await fetch(
                `${API_BASE}/api/reviews/add`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        rating,
                        review_text
                    })
                }
            );

            const data = await response.json();
            alert(data.message);

            if (data.success) {
                closeAddReviewModal();
                loadReviews();
            }
        } catch (error) {
            console.log(error);
            alert("Review Add Failed");
        }
    });
}

// Calculate and render review statistics dynamically
function calculateStats(reviews) {
    const total = reviews.length;
    const avgEl = document.getElementById('review-stat-avg');
    const totalEl = document.getElementById('review-stat-total');
    const starsEl = document.getElementById('review-stat-stars');
    
    if (total === 0) {
        if (avgEl) avgEl.innerText = "0.0";
        if (totalEl) totalEl.innerText = "No Reviews";
        if (starsEl) starsEl.innerHTML = '<i class="far fa-star"></i>'.repeat(5);
        
        // Reset bars
        for (let i = 1; i <= 5; i++) {
            const bar = document.getElementById(`bar-${i}-star`);
            const percentText = document.getElementById(`percent-${i}-star`);
            if (bar) bar.style.width = "0%";
            if (percentText) percentText.innerText = "0%";
        }
        return;
    }
    
    let sum = 0;
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    reviews.forEach(r => {
        sum += r.rating;
        counts[r.rating] = (counts[r.rating] || 0) + 1;
    });
    
    const avg = (sum / total).toFixed(1);
    if (avgEl) avgEl.innerText = avg;
    if (totalEl) totalEl.innerText = `Based on ${total} ${total === 1 ? 'Review' : 'Reviews'}`;
    
    // Render average stars
    if (starsEl) {
        let starsHTML = '';
        const fullStars = Math.floor(avg);
        const hasHalf = avg - fullStars >= 0.3;
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalf) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        starsEl.innerHTML = starsHTML;
    }
    
    // Update bars
    for (let i = 1; i <= 5; i++) {
        const count = counts[i] || 0;
        const percent = Math.round((count / total) * 100);
        const bar = document.getElementById(`bar-${i}-star`);
        const percentText = document.getElementById(`percent-${i}-star`);
        if (bar) bar.style.width = `${percent}%`;
        if (percentText) percentText.innerText = `${percent}%`;
    }
}

// Load and render Reviews inside Swiper Carousel
async function loadReviews() {
    try {
        const response = await fetch(`${API_BASE}/api/reviews/all`);
        const data = await response.json();
        
        const reviewList = document.querySelector("#review-list");
        if (!reviewList) return;
        reviewList.innerHTML = "";

        const loggedUserId = Number(localStorage.getItem("user_id"));
        let reviews = data.reviews || [];

        // Render Statistics Header
        calculateStats(reviews);

        // Sorting Logic
        const sortSelect = document.getElementById('review-sort-select');
        const sortVal = sortSelect ? sortSelect.value : 'newest';

        if (sortVal === 'newest') {
            reviews.sort((a, b) => b.review_id - a.review_id);
        } else if (sortVal === 'oldest') {
            reviews.sort((a, b) => a.review_id - b.review_id);
        } else if (sortVal === 'rating-high') {
            reviews.sort((a, b) => b.rating - a.rating);
        } else if (sortVal === 'rating-low') {
            reviews.sort((a, b) => a.rating - b.rating);
        }

        // Empty state
        if (reviews.length === 0) {
            reviewList.innerHTML = `
                <div class="swiper-slide" style="width: 100%;">
                    <div style="text-align: center; padding: 5rem 2rem; color: var(--muted-text); font-size: 1.8rem; width: 100%;">
                        <i class="far fa-comment-dots" style="font-size: 4.5rem; color: var(--primary-orange); margin-bottom: 1.5rem; display: block;"></i>
                        No reviews yet. Be the first to review.
                    </div>
                </div>
            `;
            return;
        }

        reviews.forEach((review) => {
            const reviewDate = review.review_time
                ? new Date(review.review_time).toLocaleDateString()
                : "Recently";

            let stars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= review.rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }

            // Initials Avatar generator
            const name = review.name || 'Guest';
            const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            
            // Check if profile image is a placeholder or stock
            const isStockImage = !review.profile_image || 
                                 review.profile_image.includes("shutterstock") || 
                                 review.profile_image.includes("pic1") || 
                                 review.profile_image.includes("pic2") ||
                                 review.profile_image.includes("pic3") ||
                                 review.profile_image.includes("pic4");
                                 
            const avatarHTML = isStockImage 
                ? `<div class="review-avatar-initials" style="width: 4rem !important; height: 4rem !important; font-size: 1.4rem !important; border-width: 2px !important; box-shadow: none !important;">${initials}</div>` 
                : `<img src="${review.profile_image}" alt="user" class="review-avatar-img" style="width: 4rem !important; height: 4rem !important; border-width: 2px !important; box-shadow: none !important;">`;

            // Detect destination package inside review text dynamically
            const destinations = ["Goa", "Manali", "Jaipur", "Andaman", "Munnar", "Ladakh"];
            const matchedDest = destinations.find(d => review.review_text.toLowerCase().includes(d.toLowerCase()));
            const coverImg = matchedDest 
                ? `Mini-Images/p_${destinations.indexOf(matchedDest) + 1}.jpeg`
                : "Mini-Images/p_1.jpeg";

            const destBadge = matchedDest 
                ? `<span class="review-dest-badge" style="background: rgba(255,165,0,0.1); border: 1px solid rgba(255,165,0,0.25); color: var(--primary-orange); padding: 0.4rem 1rem; border-radius: 50px; font-size: 1.2rem; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem;"><i class="fas fa-map-marker-alt"></i> ${matchedDest}</span>` 
                : `<span class="review-dest-badge" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--muted-text); padding: 0.4rem 1rem; border-radius: 50px; font-size: 1.2rem; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem;"><i class="fas fa-globe"></i> Travel</span>`;

            // Read More expand text formatting
            const text = review.review_text;
            let textHTML = "";
            if (text.length > 110) {
                textHTML = `
                    <span class="review-text-short">${text.substring(0, 110)}...</span>
                    <span class="review-text-full" style="display:none;">${text}</span>
                    <a href="#" class="read-more-link" onclick="toggleReadMore(this); return false;" style="color: var(--primary-orange); font-size:1.3rem; font-weight:bold; margin-left:0.5rem; display:inline-block;">Read More</a>
                `;
            } else {
                textHTML = `<span>${text}</span>`;
            }

            reviewList.innerHTML += `
                <div class="swiper-slide" style="display: flex; justify-content: center;">
                    <div class="review-card">
                        <img src="${coverImg}" alt="${matchedDest || 'Scenic Destination'}" class="review-card-cover" style="width: 100% !important; height: 140px !important; object-fit: cover !important; border-top-left-radius: 2rem !important; border-top-right-radius: 2rem !important; flex-shrink: 0 !important;">
                        <div class="review-card-body" style="padding: 2rem !important; display: flex !important; flex-direction: column !important; flex: 1 !important; justify-content: space-between !important; overflow: hidden !important;">
                            <div>
                                <div class="review-card-header" style="display: flex !important; align-items: center !important; gap: 1.2rem !important; margin-bottom: 1rem !important;">
                                    ${avatarHTML}
                                    <div>
                                        <h3 style="font-size: 1.6rem !important; color: #fff !important; font-weight: bold !important; margin: 0 !important; text-transform: none !important;">${review.name}</h3>
                                        <p class="review-date" style="font-size: 1.1rem !important; color: var(--muted-text) !important; margin: 0.2rem 0 0 0 !important;">📅 ${reviewDate}</p>
                                    </div>
                                </div>
                                <div class="stars" style="font-size: 1.3rem !important; color: var(--primary-orange) !important; margin-bottom: 0.8rem !important;">
                                    ${stars}
                                </div>
                                <p class="review-text" style="font-size: 1.35rem !important; color: var(--light-text) !important; line-height: 1.6 !important; margin-bottom: 1.5rem !important; text-transform: none !important;">
                                    ${textHTML}
                                </p>
                            </div>
                            <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1rem; margin-top: auto; display: flex; justify-content: space-between; align-items: center;">
                                ${destBadge}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Re-initialize Swiper with slider controls
        if (window.reviewSwiper) {
            window.reviewSwiper.destroy(true, true);
        }

        window.reviewSwiper = new Swiper(".review-slider", {
            spaceBetween: 25,
            loop: reviews.length > 3,
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });

    } catch (error) {
        console.log("Error loading reviews", error);
    }
}

// Toggle Read More reviews
function toggleReadMore(link) {
    const parent = link.parentElement;
    const shortText = parent.querySelector('.review-text-short');
    const fullText = parent.querySelector('.review-text-full');
    
    if (shortText.style.display === 'none') {
        shortText.style.display = 'inline';
        fullText.style.display = 'none';
        link.innerText = 'Read More';
    } else {
        shortText.style.display = 'none';
        fullText.style.display = 'inline';
        link.innerText = 'Show Less';
    }
}

// Modal open/close controls
function openAddReviewModal() {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please Login First");
        const loginForm = document.querySelector('.login-from-container');
        if (loginForm) loginForm.classList.add('active');
        return;
    }
    const modal = document.getElementById("add-review-modal");
    if (modal) {
        modal.classList.remove("hidden-section");
        document.body.classList.add("modal-open");
    }
}

function closeAddReviewModal() {
    const modal = document.getElementById("add-review-modal");
    if (modal) {
        modal.classList.add("hidden-section");
        document.body.classList.remove("modal-open");
    }
    cancelEditReview();
}

function cancelEditReview() {
    if (reviewForm) {
        reviewForm.reset();
    }
    const formTitle = document.getElementById('review-form-title');
    if (formTitle) formTitle.innerText = "Share Your Experience";
    
    const submitBtn = document.getElementById('review-submit-btn');
    if (submitBtn) submitBtn.value = "Submit Review";
    
    document.getElementById('rating').value = 5;
    highlightStars(5);
    
    window.currentEditingReviewId = null;
}

// Delete Review with confirmation
async function deleteReview(id) {
    const confirmDelete = confirm("Delete this review?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
        const response = await fetch(
            `${API_BASE}/api/reviews/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();
        alert(data.message);

        loadReviews();
        if (window.loadDashboardReviews) {
            window.loadDashboardReviews();
        }
    } catch (error) {
        console.log(error);
        alert("Delete Failed");
    }
}

// Interactive Star Selector Highlight helper
function highlightStars(val) {
    document.querySelectorAll('.rating-star').forEach(star => {
        const starVal = parseInt(star.getAttribute('data-value'));
        if (starVal <= val) {
            star.className = 'fas fa-star rating-star';
            star.style.color = 'var(--primary-orange)';
        } else {
            star.className = 'far fa-star rating-star';
            star.style.color = 'var(--muted-text)';
        }
    });
}

// Initialize Interactive Star Rating Selector
function initStarRatingSelector() {
    document.querySelectorAll('.rating-star').forEach(star => {
        star.addEventListener('click', function() {
            const val = parseInt(this.getAttribute('data-value'));
            document.getElementById('rating').value = val;
            highlightStars(val);
        });
        star.addEventListener('mouseover', function() {
            const val = parseInt(this.getAttribute('data-value'));
            highlightStars(val);
        });
        star.addEventListener('mouseout', function() {
            const currentVal = parseInt(document.getElementById('rating').value || 5);
            highlightStars(currentVal);
        });
    });
    highlightStars(5);
}

// Redefine edit review globally to trigger add review modal
function editUserReview(id, text, rating) {
    if (window.closeUserDashboard) {
        window.closeUserDashboard();
    }
    
    // Open the Modal
    openAddReviewModal();
    
    // Populate form data
    document.getElementById('review_text').value = text;
    document.getElementById('rating').value = rating;
    highlightStars(rating);
    
    document.getElementById('review-form-title').innerText = "Edit Your Review";
    document.getElementById('review-submit-btn').value = "Update Review";
    
    window.currentEditingReviewId = id;
}

// Load listeners
window.addEventListener("DOMContentLoaded", () => {
    loadReviews();
    initStarRatingSelector();
});

// Bind methods to window for global access
window.deleteReview = deleteReview;
window.loadReviews = loadReviews;
window.cancelEditReview = cancelEditReview;
window.openAddReviewModal = openAddReviewModal;
window.closeAddReviewModal = closeAddReviewModal;
window.editUserReview = editUserReview;
window.highlightStars = highlightStars;
window.toggleReadMore = toggleReadMore;
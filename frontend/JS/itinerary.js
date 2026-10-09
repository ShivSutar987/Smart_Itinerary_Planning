// Elements
const aiForm = document.querySelector("#booking-form");
const itinerariesContainer = document.getElementById("dash-itineraries-container");

// Map instance globals
let leafletMapInstance = null;
let leafletLayerGroup = null;

// --- Leaflet Live Map Function ---
window.renderLiveMap = function(destinationName) {
    if (!leafletMapInstance) {
        leafletMapInstance = L.map('leaflet-map-container').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(leafletMapInstance);
        
        leafletLayerGroup = L.layerGroup().addTo(leafletMapInstance);
    }

    leafletLayerGroup.clearLayers();

    // Fetch city coordinates from Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destinationName)}&limit=1`)
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                leafletMapInstance.setView([lat, lon], 12);
                const marker = L.marker([lat, lon]).bindPopup(`<b>${data[0].display_name.split(',')[0]}</b>`);
                leafletLayerGroup.addLayer(marker);
            }
        })
        .catch(err => {
            console.error("Geocoding failed", err);
        });

    setTimeout(() => { leafletMapInstance.invalidateSize(); }, 400);
};

// Mappings for hotels and travel tips based on destination and budget tier
const hotelMappings = {
    "Goa": {
        budget: [
            { name: "Colva Beach Shack Guesthouse", rating: "3.8 ⭐", price: "₹1,500/night" },
            { name: "Anjuna Backpacker Hostel", rating: "4.0 ⭐", price: "₹900/night" }
        ],
        midrange: [
            { name: "Lemon Tree Amarante Beach Resort", rating: "4.4 ⭐", price: "₹5,500/night" },
            { name: "DoubleTree by Hilton Panaji", rating: "4.5 ⭐", price: "₹6,800/night" }
        ],
        luxury: [
            { name: "Taj Exotica Resort & Spa", rating: "4.8 ⭐", price: "₹18,500/night" },
            { name: "The Leela Goa Resort", rating: "4.9 ⭐", price: "₹22,000/night" }
        ]
    },
    "Manali": {
        budget: [
            { name: "Himalayan Pine Guest House", rating: "4.0 ⭐", price: "₹1,200/night" }
        ],
        midrange: [
            { name: "Solang Valley Ski Resort", rating: "4.5 ⭐", price: "₹6,200/night" }
        ],
        luxury: [
            { name: "Span Resort & Spa", rating: "4.9 ⭐", price: "₹19,000/night" }
        ]
    },
    "Jaipur": {
        budget: [
            { name: "Jaipur Heritage Haveli Inn", rating: "4.1 ⭐", price: "₹1,800/night" }
        ],
        midrange: [
            { name: "Alsisar Haveli Heritage", rating: "4.5 ⭐", price: "₹5,900/night" }
        ],
        luxury: [
            { name: "The Rambagh Palace (Taj)", rating: "4.9 ⭐", price: "₹28,000/night" }
        ]
    },
    "Andaman": {
        budget: [
            { name: "Port Blair Seaside Homestay", rating: "3.9 ⭐", price: "₹1,400/night" }
        ],
        midrange: [
            { name: "Havelock Island Beach Resort", rating: "4.3 ⭐", price: "₹7,200/night" }
        ],
        luxury: [
            { name: "Barefoot at Havelock (Luxury)", rating: "4.8 ⭐", price: "₹21,500/night" }
        ]
    },
    "Munnar": {
        budget: [
            { name: "Misty Tea Valley Eco-Cottages", rating: "4.1 ⭐", price: "₹1,600/night" }
        ],
        midrange: [
            { name: "Tall Trees Resort Munnar", rating: "4.5 ⭐", price: "₹6,000/night" }
        ],
        luxury: [
            { name: "Spice Tree Munnar Luxury Spa", rating: "4.8 ⭐", price: "₹17,000/night" }
        ]
    },
    "Ladakh": {
        budget: [
            { name: "Leh Cozy Alpine Guest House", rating: "4.2 ⭐", price: "₹1,500/night" }
        ],
        midrange: [
            { name: "Nubra Valley Organic Camp Tents", rating: "4.6 ⭐", price: "₹5,500/night" }
        ],
        luxury: [
            { name: "The Grand Dragon Ladakh", rating: "4.9 ⭐", price: "₹16,500/night" }
        ]
    }
};

const travelTipsMappings = {
    "Goa": [
        "Wear lightweight cotton clothing and high SPF sunscreen.",
        "Hire a self-driven scooter for easy beach hopping.",
        "Respect local beach guidelines and avoid swimming during high tides."
    ],
    "Manali": [
        "Carry warm jackets and check Rohtang Pass permits in advance.",
        "Stay hydrated to avoid mild high-altitude sickness.",
        "Hire local adventure guides for skiing or trekking."
    ],
    "Jaipur": [
        "Carry sunglasses, sunblock, and drink plenty of water.",
        "Hire certified guides inside Amber Fort and City Palace.",
        "Johari Bazaar is best visited in late afternoons for bargaining."
    ],
    "Andaman": [
        "Ensure you book inter-island ferry tickets well in advance.",
        "Carry waterproof phone bags and beach slippers.",
        "BSNL and Airtel have the best network connections on Havelock."
    ],
    "Munnar": [
        "Carry light jackets and rain gear as weather shifts quickly.",
        "Eco-tours inside Eravikulam National Park require early entry tickets.",
        "Support local farmers by purchasing fresh tea leaves."
    ],
    "Ladakh": [
        "Crucial: Acclimatize for the first 24-48 hours in Leh before trekking.",
        "Carry heavy woollens and windproof jackets even in summer.",
        "Only post-paid mobile connections work in the Ladakh region."
    ]
};

// Form submit handler
if (aiForm) {
    aiForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please Login First to Generate an AI Itinerary.");
            return;
        }

        const source = document.querySelector("#source-input").value;
        const destination = document.querySelector("#place_name").value;
        const guests = document.querySelector("#guests").value;
        const start_date = document.querySelector("#arrival_date").value;
        const end_date = document.querySelector("#leaving_date").value;
        
        const budgetProfile = document.getElementById("budget-select").value;
        const travelType = document.getElementById("traveltype-select").value;

        // Change button to loading state
        const submitBtn = aiForm.querySelector("input[type='submit']");
        const originalText = submitBtn.value;
        submitBtn.value = "AI Generating...";
        submitBtn.disabled = true;

        try {
            const API_BASE = window.location.protocol.startsWith("http") ? "" : "http://localhost:5000";
            const response = await fetch(`${API_BASE}/api/itinerary/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    destination,
                    guests,
                    start_date,
                    end_date
                })
            });

            const data = await response.json();

            if (data.success) {
                if (window.logUserActivity) {
                    window.logUserActivity("AI_GENERATE", "itinerary", `Generated plan for ${destination}`);
                }
                alert(data.message);
                
                // Reset form
                aiForm.reset();

                // Compute pricing and duration
                const durationMs = new Date(end_date) - new Date(start_date);
                const days = Math.ceil(durationMs / (1000 * 60 * 60 * 24)) || 1;
                
                // Daily Rate based on tier
                let estCostPP = 3500;
                if (budgetProfile === 'budget') estCostPP = 1800;
                else if (budgetProfile === 'luxury') estCostPP = 11000;
                
                const finalCost = guests * estCostPP * days;

                // Render Results Header
                document.getElementById('res-route').innerText = `${source} to ${destination} (${travelType})`;
                document.getElementById('res-days').innerText = `${days} Days`;
                document.getElementById('res-members').innerText = `${guests} Travelers`;
                document.getElementById('res-price').innerText = `₹${finalCost.toLocaleString('en-IN')}`;

                // Update right-side panel details
                const panelBudgetTier = document.getElementById('panel-budget-tier');
                const panelDailyRate = document.getElementById('panel-daily-rate');
                const panelAttractionsCount = document.getElementById('panel-attractions-count');
                const panelHotelSuggestions = document.getElementById('panel-hotel-suggestions');
                const panelTravelTips = document.getElementById('panel-travel-tips');

                if (panelBudgetTier) {
                    panelBudgetTier.innerText = budgetProfile;
                    panelBudgetTier.style.color = budgetProfile === 'luxury' ? '#ffd700' : (budgetProfile === 'budget' ? '#2ed573' : 'var(--primary-orange)');
                }
                if (panelDailyRate) panelDailyRate.innerText = `₹${estCostPP.toLocaleString('en-IN')}`;
                
                const attractionCount = Math.floor(days * 1.5) + 3;
                if (panelAttractionsCount) panelAttractionsCount.innerText = `${attractionCount} Visited Sites`;

                // Update recommended stays
                if (panelHotelSuggestions) {
                    panelHotelSuggestions.innerHTML = "";
                    let cityKey = Object.keys(hotelMappings).find(k => destination.toLowerCase().includes(k.toLowerCase())) || "Goa";
                    const hotels = hotelMappings[cityKey][budgetProfile] || hotelMappings["Goa"][budgetProfile];
                    hotels.forEach(h => {
                        panelHotelSuggestions.innerHTML += `
                            <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 0.8rem; border: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h4 style="font-size: 1.4rem; color: #fff; margin: 0;">${h.name}</h4>
                                    <span style="font-size: 1.2rem; color: var(--muted-text);">${h.rating}</span>
                                </div>
                                <span style="font-size: 1.4rem; font-weight: bold; color: var(--primary-orange);">${h.price}</span>
                            </div>
                        `;
                    });
                }

                // Update travel tips
                if (panelTravelTips) {
                    panelTravelTips.innerHTML = "";
                    let cityKey = Object.keys(travelTipsMappings).find(k => destination.toLowerCase().includes(k.toLowerCase())) || "Goa";
                    const tips = travelTipsMappings[cityKey] || travelTipsMappings["Goa"];
                    tips.forEach(t => {
                        panelTravelTips.innerHTML += `
                            <li style="display: flex; gap: 1rem; align-items: flex-start; text-transform:none; margin-bottom: 0.8rem;">
                                <i class="fas fa-check-circle orange-text" style="margin-top: 0.3rem;"></i>
                                <span style="line-height:1.4;">${t}</span>
                            </li>
                        `;
                    });
                }

                let timelineHTML = "";
                data.plan.days.forEach(dayRecord => {
                    timelineHTML += `
                        <div class="timeline-card">
                            <div class="timeline-marker">${dayRecord.day}</div>
                            <div class="timeline-content-box">
                                <h4 style="color:var(--primary-orange); margin-bottom:1rem; font-size:1.8rem; font-family:var(--font-heading);">
                                    Day ${dayRecord.day} Detailed Plan
                                </h4>
                                <div style="margin-bottom: 1.5rem; border-left: 2px solid rgba(255,165,0,0.3); padding-left: 1.5rem;">
                                    <h4 style="font-size:1.6rem; color:#fff; display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
                                        <span style="color:var(--primary-orange); font-size:1.3rem;">All Day</span>
                                        <i class="fas fa-hiking"></i> 
                                        Scheduled Activity
                                    </h4>
                                    <p style="font-size:1.3rem; color:var(--muted-text); margin:0; text-transform:none;">${dayRecord.activity}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });

                document.getElementById('timeline-container').innerHTML = timelineHTML;

                // Remove hidden class from itinerary container and scroll to it
                const resultsSection = document.getElementById('itinerary-results');
                resultsSection.classList.remove('hidden-section');
                
                setTimeout(() => {
                    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.renderLiveMap(destination);
                }, 300);

                // Reload list in background
                loadItineraries();
            } else {
                alert(data.message || "Failed to generate itinerary");
            }
        } catch (error) {
            console.error("Error generating AI itinerary:", error);
            alert("Connection error occurred while generating.");
        } finally {
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Load dynamic itineraries list into dashboard
async function loadItineraries() {
    const token = localStorage.getItem("token");
    if (!token) return;

    const itinerariesContainer = document.getElementById("dash-itineraries-container");
    if (!itinerariesContainer) return;

    itinerariesContainer.innerHTML = window.getSkeletonLoaderHTML ? window.getSkeletonLoaderHTML() : "<p style='color:var(--muted-text); font-size:1.6rem;'>Loading AI plans...</p>";

    try {
        const API_BASE = window.location.protocol.startsWith("http") ? "" : "http://localhost:5000";
        const response = await fetch(`${API_BASE}/api/itinerary/my-plans`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.success) {
            itinerariesContainer.innerHTML = "";
            
            if (data.itineraries.length === 0) {
                itinerariesContainer.innerHTML = "<p style='color:var(--muted-text); font-size:1.6rem;'>No AI Itineraries Generated Yet.</p>";
                return;
            }

            data.itineraries.forEach(plan => {
                const generated = JSON.parse(plan.generated_plan);
                let daysHtml = generated.days.map(d => `
                    <p style="font-size:1.4rem; color:var(--light-text); margin-bottom:0.8rem; text-transform:none;">
                        <strong>Day ${d.day}:</strong> ${d.activity}
                    </p>
                `).join("");
                
                itinerariesContainer.innerHTML += `
                    <div class="dash-booking-card" style="margin-bottom: 2rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:1rem;">
                            <span class="badge" style="background:var(--primary-orange); color:#fff; padding:0.4rem 1rem; border-radius:50px; font-size:1.2rem;">AI Planned</span>
                            <span style="color:var(--muted-text); font-size:1.3rem;">Plan #${plan.itinerary_id}</span>
                        </div>
                        <h3 style="font-size:2rem; color:#fff; margin-bottom:0.5rem;">${generated.title}</h3>
                        <p style="font-size:1.4rem; color:var(--muted-text); margin-bottom:1rem;"><i class="fas fa-calendar-alt"></i> ${new Date(plan.start_date).toLocaleDateString()} - ${new Date(plan.end_date).toLocaleDateString()}</p>
                        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:1.2rem; margin-top:1.2rem;">
                            ${daysHtml}
                        </div>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error("Failed to fetch itineraries", error);
    }
}

window.addEventListener("load", loadItineraries);
window.loadItineraries = loadItineraries;

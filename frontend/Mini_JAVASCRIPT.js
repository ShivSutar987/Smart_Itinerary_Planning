/*let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-from-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

//--------------Register Section-------------------
let registerForm =
document.querySelector('.register-form-container');

let registerClose =
document.querySelector('#register-close');

let showRegister =
document.querySelector('#show-register');

let showLogin =
document.querySelector('#show-login');

showRegister.addEventListener('click', (e) => {

    e.preventDefault();

    loginForm.classList.remove('active');

    registerForm.classList.add('active');

});


showLogin.addEventListener('click', (e) => {

    e.preventDefault();

    registerForm.classList.remove('active');

    loginForm.classList.add('active');

});


registerClose.addEventListener('click', () => {

    registerForm.classList.remove('active');

});


window.onscroll = () =>{
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',() =>{
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});*/


/* for review section */
/*var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,

    // ✅ Auto slide
    autoplay: {
        delay: 2000,   // change time here (2000ms = 2 sec)
        disableOnInteraction: false, // important for manual swipe
    },

    // ✅ Manual swipe (already default but keep this)
    grabCursor: true,

    // ✅ Responsive slides
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});*/

/* for brand section*/
/*var brandSwiper = new Swiper(".brand-slider", {

    spaceBetween: 20,
    loop: true,

    // ✅ Auto slide
    autoplay: {
        delay: 2000,   // change time here (2000ms = 2 sec)
        disableOnInteraction: false, // important for manual swipe
    },

    // ✅ Manual swipe (already default but keep this)
    grabCursor: true,

    // ✅ Responsive slides
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});










//------------------------------------BACKEND start----------------------------------//



// ---------------- Register User ----------------

document
    .querySelector("#register-form")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const name =
            document.querySelector("#register-name").value;

        const email =
            document.querySelector("#register-email").value;

        const password =
            document.querySelector("#register-password").value;

        try {

            const response = await fetch(
                "http://localhost:5000/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            console.log(data);

        } catch (error) {

            console.error(error);

            alert("Registration Failed");

        }

    });*/


import "./JS/navbar.js";
import "./JS/slider.js";
import "./JS/auth.js";
import "./JS/itinerary.js";
import "./JS/contact.js";
import "./JS/review.js";
import "./JS/activity.js";
import "./JS/booking.js";

console.log("Travel Project Loaded"); 
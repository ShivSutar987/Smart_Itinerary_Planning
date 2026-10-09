const contactForm =
document.querySelector("#contact-form");

contactForm.addEventListener(
    "submit",
    async (e) => {

    e.preventDefault();

    const token =
        localStorage.getItem("token");

    if(!token){

        alert("Please Login First");
        return;

    }

    const name =
        document.querySelector("#contact-name").value;

    const email =
        document.querySelector("#contact-email").value;

    const subject =
        document.querySelector("#contact-subject").value;

    const message =
        document.querySelector("#contact-message").value;

    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(
            `${API_BASE}/api/contact/send`,
            {
                method: "POST",

                headers: {

                    "Content-Type":
                    "application/json",

                    Authorization:
                    `Bearer ${token}`

                },

                body: JSON.stringify({

                    name,
                    email,
                    subject,
                    message

                })

            }
        );

        const data =
            await response.json();

        alert(data.message);

        if(data.success){

            contactForm.reset();

            // Save contact message locally under user_id to sync with dashboard contacts tab
            const loggedUserId = localStorage.getItem("user_id");
            if (loggedUserId) {
                const key = `contacts_${loggedUserId}`;
                const localContacts = JSON.parse(localStorage.getItem(key)) || [];
                localContacts.unshift({
                    name,
                    email,
                    subject,
                    message,
                    date: new Date().toLocaleDateString()
                });
                localStorage.setItem(key, JSON.stringify(localContacts));
                
                // Refresh dashboard contacts instantly if active
                if (window.loadDashboardContacts) {
                    window.loadDashboardContacts();
                }
            }

        }

        console.log(data);

    }
    catch(error){

        console.log(error);

        alert("Message Send Failed");

    }

});
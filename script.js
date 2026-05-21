const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('successPopup');
const closePopup = document.getElementById('closePopup');


const API_URL = "https://portfolio-backend-lcry.onrender.com";

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        });


        if (!response.ok) {
            throw new Error("Server error");
        }

        popup.classList.add('active');
        contactForm.reset();

    } catch (error) {
        console.log("Error:", error);
        alert('Something went wrong. Please try again later.');
    }
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
});
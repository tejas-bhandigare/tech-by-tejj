const m = document.querySelector('.menu');
const n = document.querySelector('.nav-links');

if (m) {
    m.onclick = () => n.classList.toggle('open');
}


function handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const whatsappNumber = "917507900526";

    const whatsappMessage =
`Hi Tech by Tejj,

I would like to enquire about your services.

Name: ${name}
Phone / WhatsApp: ${phone}
Service: ${service}

Project Details:
${message}

Thank you.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    document.querySelector('.form-msg').textContent =
        "Your enquiry is ready to send on WhatsApp.";

    e.target.reset();
}
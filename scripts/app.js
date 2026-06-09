emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("SERVICE_ID","TEMPLATE_ID",this)
  .then(()=>{
    alert("Message sent!");
    this.reset();
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const details = document.getElementById("details").value;

    const message =
`Hello Ace Revolution,

Name: ${name}
Email: ${email}

Project Details:
${details}`;

    const whatsappURL =
        `https://wa.me/254116316948?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener, noreferrer");
});
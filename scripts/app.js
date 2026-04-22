emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("SERVICE_ID","TEMPLATE_ID",this)
  .then(()=>{
    alert("Message sent!");
    this.reset();
  });
});
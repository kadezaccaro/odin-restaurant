export const Footer = () => {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer-container");

  footerContainer.innerHTML = `
    <div class="bg">
      <div>
        <h2>Hours</h2>
        <p>Monday to Thursday: 9 AM - 10 PM</p>
        <p>Friday: 9 AM - 11 PM</p>
        <p>Saturday: 10 AM - 11 PM</p>
        <p>Sunday: 10 AM - 9 PM</p>
      </div>
    
      <div>
        <h2>Location</h2>
        <p>Hakone, Kanagawa, Japan</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.072483208705!2d139.02279247665976!3d35.20466345600456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019988bcd2ac2b5%3A0xaae4a36847c7e09a!2sHakone%20Shrine!5e0!3m2!1sen!2sus!4v1687553023153!5m2!1sen!2sus"
          width="520"
          height="360"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(footerContainer);
};

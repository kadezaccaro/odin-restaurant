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
          width="520"
          height="320"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe9yyYAyiGWARJnuXrBe9BSY&key=${process.env.API_KEY}"
        >
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(footerContainer);
};

export const Footer = () => {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer-container");

  footerContainer.innerHTML = `
    <div>
			<h2>Hours</h2>
			<p>Monday to Thursday: 9 AM - 10 PM</p>
			<p>Friday: 9 AM - 11 PM</p>
			<p>Saturday: 10 AM - 11 PM</p>
			<p>Sunday: 10 AM - 9 PM</p>
    </div>

    <div>
			<h2>Location</h2>
			<p>444 Pearl Street, Monterey, California</p>
		</div>
  `;

  document.body.appendChild(footerContainer);
};

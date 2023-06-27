export const Contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  contactContainer.innerHTML = `
    <div class="bg">
      <div>
        <h1>Contact</h1>
        <p>
          We'd love to hear from you! Whether you have a question,  feedback, or simply want to say hello, please feel free to   reach out to us using any of the following methods:
        </p>
      </div>

      <div>
        <h2>Call Us:</h2>
        <p>Phone: (777) 777-7777</p>
      </div>

      <div>
        <h2>Email Us:</h2>
        <p>General Inquiries: <a href="#">info@ariacafe.com</a></p>
        <p>Customer Support: <a href="#">support@ariacafe.com</a></p>
      </div>

      <p>We value your feedback and look forward to serving you at Aria Café!</p>
    </div>
  `;

  const content = document.getElementById("content");
  content.appendChild(contactContainer);
};

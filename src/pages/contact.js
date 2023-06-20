export const Contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  contactContainer.innerHTML = `
    <div class="bg">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis
        esse cumque qui aliquam laborum quibusdam similique, exercitationem odit
        magnam provident dignissimos ab minima sapiente! Debitis odio ratione
        animi qui!
      </p>
    </div>
  `;

  const content = document.getElementById("content");
  content.appendChild(contactContainer);
};

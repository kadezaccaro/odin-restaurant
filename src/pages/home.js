export const Home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.innerHTML = `
    <div class="bg">
      <h1 class="logo">Aria Café</h1>
      <img
        src="/src/images/restuarant-interior.jpg"
        alt="Interior view of an elegant restaurant with modern decor"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis
        esse cumque qui aliquam laborum quibusdam similique, exercitationem odit
        magnam provident dignissimos ab minima sapiente! Debitis odio ratione
        animi qui!
      </p>
    </div>
  `;

  const content = document.getElementById("content");
  content.appendChild(homeContainer);
};

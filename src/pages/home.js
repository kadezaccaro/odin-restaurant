export const Home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.innerHTML = `
    <div class="bg">
      <div class="welcome">
        <h1>Harmonizing Culinary Delights </h1>
        <p>
          Welcome to Aria Café, where coffee meets harmony. Indulge in the exquisite  flavors of our handcrafted brews and enjoy a serene ambiance that elevates your  coffee experience.
        </p>
      </div>
      <img
        src="/src/images/restaurant-interior.jpg"        
        alt="Interior view of an elegant restaurant with modern decor"
      />
      <img
        src="/src/images/restaurant-crowd.jpg"
        alt="Interior view of an elegant restaurant with people sitting at tables"
        loading="lazy"
      />
    </div>
  `;

  const content = document.getElementById("content");
  content.appendChild(homeContainer);
};

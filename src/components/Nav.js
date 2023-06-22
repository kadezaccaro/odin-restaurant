export const Nav = () => {
  const navContainer = document.createElement("nav");
  navContainer.classList.add("nav-container");

  navContainer.innerHTML = `
    <a href="#" class="logo">Aria Café</a>
    <div class="btn-container">
      <button class="home-btn">Home</button>
      <button class="menu-btn">Menu</button>
      <button class="contact-btn">Contact</button>
    </div>
  `;

  const content = document.getElementById("content");
  document.body.insertBefore(navContainer, content);
};

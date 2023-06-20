export const Nav = () => {
  const navContainer = document.createElement("nav");
  navContainer.classList.add("nav-container");

  navContainer.innerHTML = `
    <button class="home-btn">Home</button>
    <button class="menu-btn">Menu</button>
    <button class="contact-btn">Contact</button>
  `;

  const content = document.getElementById("content");
  document.body.insertBefore(navContainer, content);
};

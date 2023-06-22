export const Menu = () => {
  const menuData = [
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and a layer of frothed milk",
      price: 3.99,
      category: "Coffee",
      src: "/src/images/cappuccino.jpg",
    },
    {
      name: "Croissant",
      description: "Flaky and buttery pastry",
      price: 2.99,
      category: "Bakery",
      src: "/src/images/croissant.jpg",
    },
    {
      name: "Avocado Toast",
      description:
        "Toasted bread topped with mashed avocado, tomatoes, and herbs",
      price: 7.99,
      category: "Breakfast",
      src: "/src/images/avocado-toast.jpg",
    },
    {
      name: "Quiche Lorraine",
      description: "Savory pie with bacon, cheese, and a creamy filling",
      price: 9.99,
      category: "Brunch",
      src: "/src/images/quiche.jpg",
    },
    {
      name: "Chicken Caesar Wrap",
      description:
        "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla",
      price: 8.99,
      category: "Lunch",
      src: "/src/images/chicken-wrap.jpg",
    },
    {
      name: "Fruit Salad",
      description: "Assortment of fresh seasonal fruits",
      price: 4.99,
      category: "Healthy Options",
      src: "/src/images/fruit-salad.jpg",
    },
  ];

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuMarkup = `
    <div class="bg">
      <h1>Menu</h1>
      
      ${menuData
        .map(
          (menuItem) => `
        <div class="menu-item">
          <picture>
            <img src="${menuItem.src}" />
          </picture>
          <div class="menu-item-info">
            <h2>${menuItem.name}</h2>
            <p>${menuItem.description}</p>
            <p class="price">$${menuItem.price}</p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  menuContainer.innerHTML = menuMarkup;

  const content = document.getElementById("content");
  content.appendChild(menuContainer);
};

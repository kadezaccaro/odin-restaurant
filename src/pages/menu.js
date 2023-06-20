export const Menu = () => {
  const menuData = [
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and a layer of frothed milk",
      price: 3.99,
      category: "Coffee",
    },
    {
      name: "Croissant",
      description: "Flaky and buttery pastry",
      price: 2.99,
      category: "Bakery",
    },
    {
      name: "Avocado Toast",
      description:
        "Toasted bread topped with mashed avocado, tomatoes, and herbs",
      price: 7.99,
      category: "Breakfast",
    },
    {
      name: "Quiche Lorraine",
      description: "Savory pie with bacon, cheese, and a creamy filling",
      price: 9.99,
      category: "Brunch",
    },
    {
      name: "Chicken Caesar Wrap",
      description:
        "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla",
      price: 8.99,
      category: "Lunch",
    },
    {
      name: "Fruit Salad",
      description: "Assortment of fresh seasonal fruits",
      price: 4.99,
      category: "Healthy Options",
    },
    {
      name: "Chocolate Brownie",
      description:
        "Rich and fudgy chocolate brownie served with a scoop of vanilla ice cream",
      price: 5.99,
      category: "Desserts",
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
          <h2>${menuItem.name}</h2>
          <p>${menuItem.description}</p>
          <span>$${menuItem.price}</span>
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

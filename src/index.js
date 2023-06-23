import "./styles.css";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Contact } from "./pages/contact";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

Nav();
Home();
Footer();

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleTabSwitch(btn.className);
  });
});

const handleTabSwitch = (btnClass) => {
  const content = document.getElementById("content");

  switch (btnClass) {
    case "home-btn":
      content.innerHTML = "";
      Home();
      break;
    case "menu-btn":
      content.innerHTML = "";
      Menu();
      break;
    case "contact-btn":
      content.innerHTML = "";
      Contact();
      break;
  }
};

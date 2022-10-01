import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/products": () => print(ProductPage.render()),
    "/about": () => print(AboutPage.render()),
});
router.resolve();
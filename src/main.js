import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import productDetail from "./pages/productDetail";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
};

router.on({
    "/": () => print(HomePage),
    "/products": () => print(ProductPage),
    "/products/:id": (value) => print(productDetail, value.data.id),
    "/about": () => print(AboutPage),
});
router.resolve();
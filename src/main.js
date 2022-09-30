import Navigo from "navigo";

const router = new Navigo("/");
const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print("Home Page"),
    "/products": () => print("Products Page"),
    "/about": () => print("About Page"),
});
router.resolve();
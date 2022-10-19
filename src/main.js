import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import productDetail from "./pages/productDetail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DashboardPage from "./pages/admin/dashboard";
import AdminProductsPage from "./pages/admin/productManagement";
import AddNewProduct from "./pages/admin/productManagement/add";
import UpdateProducts from "./pages/admin/productManagement/edit";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/products": () => print(ProductPage),
    "/products/:id": (value) => print(productDetail, value.data.id),
    "/about": () => print(AboutPage),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/products": () => print(AdminProductsPage),
    "/admin/products/add": () => print(AddNewProduct),
    "/admin/products/:id/update": (value) => print(UpdateProducts, value.data.id),
});
router.resolve();
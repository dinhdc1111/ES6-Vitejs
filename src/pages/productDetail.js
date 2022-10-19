import Footer from "../components/footer";
import { get } from "../api/products";

const productDetail = {
    async render(id) {
        const product = (await get(id)).data;
        return /* html */ `
        <div class="wapper">
        <header class="header">
            <div class="header__logo">
                <a href="/"><img srcset="../assets/images/Logo.png 1x" alt="Logo"></a>
            </div>
            <div class="header__menu">
                <div class="menu">
                    <ul>
                        <li class="menu-item"><a class="menu-link" href="/">Home</a></li>
                        <li class="menu-item"><a class="menu-link" href="/products">Products</a></li>
                        <li class="menu-item"><a class="menu-link" href="/about">About Us</a></li>
                        <li class="menu-item"><a class="menu-link" href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="header__cartAuth">
                <div class="cart">
                    <a href="#"><img src="../assets/images/Cart.png" alt="Cart"></a>
                </div>
                <div class="auth">
                    <a class="signin" href="/signin">Sign In</a>
                    <a class="signup" href="/signup">Sign Up</a>
                </div>
            </div>
        </header>
            <section class="detailed_information">
            <div class="detailed_information__content">
                <h1 class="detailed_information__content-title">
                    ${product.title}
                </h1>
                <h2 class="detailed_information__content-price">$${product.price}</h2>
                <p class="detailed_information__content-desc">
                    ${product.content}
                </p>
                <div class="detailed_information__content-btnAdd">
                    <input class="btnAdd_input" type="text" placeholder="Quantity">
                    <button class="btnAdd_button">Add To Cart</button>
                </div>
            </div>
            <div class="detailed_information__image">
                <img src="${product.image}" alt="image">
            </div>
        </section>
            ${Footer.render()}
        `;
    },
};
export default productDetail;
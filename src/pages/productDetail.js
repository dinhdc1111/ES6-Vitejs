import Footer from "../components/footer";
import Header from "../components/header";
import ListProduct from "../data/products";

const productDetail = {
    render(id) {
        const product = ListProduct.find((item) => item.id == id);
        return /* html */ `
            ${Header.render()}
            <section class="detailed_information">
            <div class="detailed_information__content">
                <h1 class="detailed_information__content-title">
                    ${product.name}
                </h1>
                <h2 class="detailed_information__content-price">$30</h2>
                <p class="detailed_information__content-desc">
                    ${product.desc}
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
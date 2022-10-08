import Footer from "../components/footer";
import ListProduct from "../data/products";
import Header from "../components/header";

const ProductPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <section class="banner-products">
            <img src="./assets/images/Rectangle 1372.png" alt="">
        </section>
        <article class="main-content-products">
            <aside class="sidebar">
                <ul class="sidebar-list">
                    <li class="sidebar-item"><a href="#">Breakfast</a></li>
                    <li class="sidebar-item"><a href="#">Vegan</a></li>
                    <li class="sidebar-item"><a href="#">Meat</a></li>
                    <li class="sidebar-item"><a href="#">Dessert</a></li>
                    <li class="sidebar-item"><a href="#">Lunch</a></li>
                    <li class="sidebar-item"><a href="#">Chocolate</a></li>
                </ul>
            </aside>
            <section class="related_products">
                <div class="related_products-list">
                    ${ListProduct.map((product) => `
                        <div class="related_products-item">
                            <a href="/products/${product.id}"><img class="related_products__image" src="${product.image}" alt="Image Products"></a>
                            <h5 class="related_products__title">${product.name}</h5>
                            <h3 class="related_products-price">$${product.price}</h3>
                            <button class="related_products-btnAdd">Add To Cart</button>
                        </div>`).join("")}
                </div>
            </section>
        </article>
        ${Footer.render()}
        `;
    },
};
export default ProductPage;
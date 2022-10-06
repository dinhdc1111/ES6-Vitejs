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
        <div class="content-list">
            <section class="related_products">
                <div class="related_products-list">
                    ${ListProduct.map((product) => `
                        <div class="related_products-item">
                            <img class="related_products__image" src="${product.image}" alt="Image Products">
                            <h4 class="related_products__title">${product.name}</h4>
                            <h3 class="related_products-price">$${product.price}</h3>
                            <button class="related_products-btnAdd">Add To Cart</button>
                        </div>`).join("")}
                </div>
            </section>
            <section class="related_products">
                <div class="related_products-list">
                    <div class="related_products-item">
                        <img class="related_products__image" src="./assets/images/image 29.png" alt="#">
                        <h4 class="related_products__title">Fresh and Healthy Mixed Mayonnaise </h4>
                        <h3 class="related_products-price">$30</h3>
                        <button class="related_products-btnAdd">Add To Cart</button>
                    </div>
                    <div class="related_products-item">
                        <img class="related_products__image" src="./assets/images/image 30.png" alt="#">
                        <h4 class="related_products__title">The Creamiest Creamy Chicken</h4>
                        <h3 class="related_products-price">$30</h3>
                        <button class="related_products-btnAdd">Add To Cart</button>
                    </div>
                    <div class="related_products-item">
                        <img class="related_products__image" src="./assets/images/image 31.png" alt="#">
                        <h4 class="related_products__title">Fruity Pancake with Orange & Blueberry</h4>
                        <h3 class="related_products-price">$30</h3>
                        <button class="related_products-btnAdd">Add To Cart</button>
                    </div>
                </div>
            </section>
        </div>
    </article>
        ${Footer.render()}
        `;
    },
};
export default ProductPage;
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
                <div class="related_products-list-PageProducts">
                    ${ListProduct.map((product) => /* html */ `
                        <div class="related_products-item-PageProducts">
                            <a href="/products/${product.id}"><img class="related_products__image-list-PageProducts" src="${product.image}" alt="Image Products"></a>
                            <a href="/products/${product.id}"><h5 class="related_products__title-PageProducts">${product.name}</h5></a>
                            <a href="/products/${product.id}"><h3 class="related_products-price">$${product.price}</h3></a>
                            <a href="/products/${product.id}"><button class="related_products-btnAdd-PageProducts">Add To Cart</button></a>
                        </div>`).join("")}
                </div>
            </section>
        </article>
        ${Footer.render()}
        `;
    },
};
export default ProductPage;
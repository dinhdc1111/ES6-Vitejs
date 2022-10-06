import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const HomePage = {
    render() { // method render()
        return /* html */ `
            ${Header.render()}
            ${Banner.render()}
            <section class="Popular_Dishes">
                <h1 class="Popular_Dishes__title">Our Popular Dishes</h1>
                <div class="Popular_Dishes__desc">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
                <div class="Popular_Dishes__content-images">
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 26.png" alt="#">
                        <h4 class="dishes-item__title"><a href="./detail.html">Big and Juicy Wagyu Beef Cheeseburger</a>
                        </h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Snack</span>
                            </div>
                        </div>
                    </div>
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 27.png" alt="#">
                        <h4 class="dishes-item__title"><a href="#">Fresh Lime Roasted Salmon</a></h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Fish</span>
                            </div>
                        </div>
                    </div>
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 28.png" alt="#">
                        <h4 class="dishes-item__title"><a href="#">The Best Easy One Pot Chicken and Rice</a></h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Snack</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Popular_Dishes__content-images">
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 29.png" alt="#">
                        <h4 class="dishes-item__title"><a href="#">Fresh and Healthy Mixed Mayonnaise</a></h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Healthy</span>
                            </div>
                        </div>
                    </div>
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 30.png" alt="#">
                        <h4 class="dishes-item__title"><a href="#">The Creamiest Creamy Chicken</a></h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Noodles</span>
                            </div>
                        </div>
                    </div>
                    <div class="dishes-item">
                        <img class="dishes-item__image" src="./assets/images/image 31.png" alt="#">
                        <h4 class="dishes-item__title"><a href="#">Fruity Pancake with Orange & Blueberry</a></h4>
                        <div class="TimevsType">
                            <div class="TimevsType__time">
                                <img src="./assets/images/Timer.png" alt="#">
                                <span>30 Minutes</span>
                            </div>
                            <div class="TimevsType__type">
                                <img src="./assets/images/ForkKnife.png" alt="#">
                                <span>Sweet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="categories">
                <div class="categories__heading">
                    <div class="categories__title">
                        <h1>Categories</h1>
                    </div>
                    <div class="button__viewAllCate">
                        <a href="#">View All Categories</a>
                    </div>
                </div>
                <div class="categories__list">
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 890.png" alt="#">
                        <h4 class="category-item__title">Breakfast</h4>
                    </div>
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 879.png" alt="#">
                        <h4 class="category-item__title">Vegan</h4>
                    </div>
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 891.png" alt="#">
                        <h4 class="category-item__title">Meat</h4>
                    </div>
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 892.png" alt="#">
                        <h4 class="category-item__title">Dessert</h4>
                    </div>
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 893.png" alt="#">
                        <h4 class="category-item__title">Lunch</h4>
                    </div>
                    <div class="category_item">
                        <img class="category-item__image" src="./assets/images/Group 894.png" alt="#">
                        <h4 class="category-item__title">Chocolate</h4>
                    </div>
                </div>
            </section>
            ${Footer.render()}
        `;
    },
};
export default HomePage;
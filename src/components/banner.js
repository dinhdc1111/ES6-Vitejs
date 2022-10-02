const Banner = {
    render() {
        return /* html */ `<main>
        <section class="banner">
            <div class="banner__content">
                <a href="#" class="button button--primary">Quality Food</a>
                <h1 class="banner__content-heading">Fastest <span>Delivery</span> & Easy <span>Pickup</span>
                </h1>
                <p class="banner__content-decs">Best cooks and best delivery guys all at your service. Hot tasty
                    food will reach you in 60 minutes.</p>
                <div class="banner__search">
                    <input class="banner__search-input" type="text" placeholder="Enter your delivery location" />
                    <button type="submit" class="banner__search-button">Discover</button>
                </div>
            </div>
            <div class="banner__image">
                <img srcset="./assets/images/Images.png 1.2x" alt="Banner webiste">
            </div>
        </section>`;
    },
};
export default Banner;
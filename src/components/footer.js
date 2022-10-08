import formContact from "./formContact";

const Footer = {
    render() {
        return /* html */ `
        </main>
        <footer class="footer">
        ${formContact.render()}
            <div class="foot">
                <div class="foot_logo">
                    <img src="./assets/images/Logo.png" alt="#">
                </div>
                <div class="foot_menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>`;
    },
};
export default Footer;
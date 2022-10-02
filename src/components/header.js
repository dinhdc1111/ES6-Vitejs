const Header = {
    render() {
        return /* html */ `
        <div class="wapper">
        <header class="header">
            <div class="header__logo">
                <a href="./index.html"><img srcset="./assets/images/Logo.png 1x" alt="Logo"></a>
            </div>
            <div class="header__menu">
                <div class="menu">
                    <ul>
                        <li class="menu-item"><a class="menu-link" href="./index.html">Home</a></li>
                        <li class="menu-item"><a class="menu-link" href="#">Products</a></li>
                        <li class="menu-item"><a class="menu-link" href="#">About Us</a></li>
                        <li class="menu-item"><a class="menu-link" href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="header__cartAuth">
                <div class="cart">
                    <img src="./assets/images/Cart.png" alt="Cart">
                </div>
                <div class="auth">
                    <a class="signin" href="./signin.html">Sign In</a>
                    <a class="signup" href="./signup.html">Sign Up</a>
                </div>
            </div>
        </header>
        `;
    },
};
export default Header;
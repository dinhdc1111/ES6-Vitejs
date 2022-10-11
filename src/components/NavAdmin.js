const NavAdmin = {
    render() {
        return /* html */ `
            <nav>
            <div class="logo-name">
                <span class="logo_name">Fudo<span>.</span></span>
            </div>
            <div class="menu-items">
                <ul class="nav-links">
                    <li><a href="#">
                        <i class="fa-solid fa-house-user"></i>
                            <span class="link-name">Dashboard</span>
                        </a></li>
                    <li><a href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
                            <span class="link-name">Categories</span>
                        </a></li>
                    <li><a href="#">
                        <i class="fa-brands fa-product-hunt"></i>
                            <span class="link-name">Products</span>
                        </a></li>
                    <li><a href="#">
                        <i class="fa-solid fa-users"></i>
                            <span class="link-name">Users</span>
                        </a></li>
                    <li><a href="#">
                        <i class="fa-solid fa-book"></i>
                            <span class="link-name">Orders</span>
                        </a></li>
                </ul>

                <ul class="logout-mode">
                    <li><a href="#">
                        <i class="fas fa-sign-out-alt"></i>
                            <span class="link-name">Logout</span>
                        </a></li>
                </ul>
            </div>
        </nav>
        `;
    },
};
export default NavAdmin;
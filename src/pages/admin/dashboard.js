import NavAdmin from "../../components/NavAdmin";

const DashboardPage = {
    render() {
        return /* html */ `
            ${NavAdmin.render()}
            <section class="dashboard">
                <div class="top">
                    <i class="fa-solid fa-list-ul"></i>
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search here...">
                    </div>
                </div>

                <div class="dash-content">
                    <div class="overview">
                        <div class="title">
                            <i class="fa-solid fa-gauge"></i>
                            <span class="text">Dashboard</span>
                        </div>

                        <div class="boxes">
                            <div class="box box1">
                                <i class="fa-sharp fa-solid fa-cart-plus"></i>
                                <span class="text">
                                    Total orders</span>
                                <span class="number">972</span>
                            </div>
                            <div class="box box2">
                                <i class="fa-solid fa-comments"></i>
                                <span class="text">Feedback</span>
                                <span class="number">10,150</span>
                            </div>
                            <div class="box box3">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <span class="text">Total money</span>
                                <span class="number">90,120$</span>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
        `;
    },
};
export default DashboardPage;
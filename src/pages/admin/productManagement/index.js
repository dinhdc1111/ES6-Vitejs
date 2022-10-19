import { getAll, remove } from "../../../api/products";
import NavAdmin from "../../../components/NavAdmin";

const AdminProductsPage = {
    async render() {
        const ListProduct = (await getAll()).data;
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
                            <span class="text">Products Management</span>
                        </div>
                        <div class="boxesPro">
                        <div class="container-xl">
                        <div class="table-responsive">
                            <div class="table-wrapper">
                                <div class="table-title">
                                    <div class="row">
                                            <a href="/admin/products/add" class="btn btn-secondary"><i class="fa-solid fa-cart-plus"></i><span>Thêm món</span></a>
                                    </div>
                                </div>
                                <table class="table table-striped table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Ảnh</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${ListProduct.map((product, index) => /* html */ `
                                        <tr>
                                            <td>${index + 1}</td>
                                            <td>${product.title}</td>
                                            <td>${product.price}$</td>
                                            <td>${product.quantity}</td>
                                            <td><img class="related_products__image-list-PageProducts" src="${product.image}" alt="Image Products"></td>
                                            <td>
                                                <a href="/admin/products/${product.id}/update" class="settings" title="Settings" data-toggle="tooltip"><i class="fa-solid fa-gear"></i></a>
                                                <a href="#" data-id="${product.id}" class="delete" title="Delete" data-toggle="tooltip"><i class="fa-solid fa-trash"></i></a>
                                            </td>
                                            </tr>
                                        `).join("")}
                                    </tbody>
                                </table>
                                <div class="clearfix">
                                    <div class="hint-text">Showing <b>1</b> out of <b>5</b> entries</div>
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a href="#">Previous</a></li>
                                        <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                                        <li class="page-item "><a href="#" class="page-link">3</a></li>
                                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                                        <li class="page-item"><a href="#" class="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>    
                        </div>
                    </div>
                </div>
    </section>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".delete");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc muốn xóa?");
                if (confirm) {
                    remove(id);
                }
            });
        });
    },
};
export default AdminProductsPage;
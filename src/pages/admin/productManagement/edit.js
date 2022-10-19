import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { get, update } from "../../../api/products";

const UpdateProducts = {
    async render(id) {
        const product = (await get(id)).data;
        // console.log(product);
        return /* html */ `
        ${NavAdmin.render()}
        <section class="dashboard">
        <div class="top">
            <i class="fas fa-bars sidebar-toggle"></i>
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search food here..." >
            </div>
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <span class="text">UPDATE NEW FOOD</span>
                </div>
                <form id="update_product">
                        <div class="input-control">
                            <input type="text" id="title" value ="${product.title}" name="food_name" placeholder="Tên món ăn">
                            <div class="error"></div>
                            <span class="icon-success"><i class="fas fa-check-circle"></i></span>
                            <span class="icon-warnning"><i class="fas fa-exclamation-triangle rung"></i></span>
                        </div>
                        <div class="input-control">
                            <input type="number" id="quantity" value ="${product.quantity}" name="quantity" placeholder="Số lượng món ăn">
                            <div class="error"></div>
                            <span class="icon-success"><i class="fas fa-check-circle"></i></span>
                            <span class="icon-warnning"><i class="fas fa-exclamation-triangle rung"></i></span>
                        </div>
                        <div class="input-control">
                            <input type="number" id="price" value ="${product.price}" name="price" placeholder="Giá món ăn">
                            <div class="error"></div>
                            <span class="icon-success"><i class="fas fa-check-circle"></i></span>
                            <span class="icon-warnning"><i class="fas fa-exclamation-triangle rung"></i></span>
                        </div>
                        <div class="input-control">
                        <img src ="${product.image}" />
                        <div class="mb-3">
                            <input class="form-control" type="file" id="formFile">
                        </div>
                            <div class="error"></div>
                        </div>
                        <div class="input-control">
                            <textarea rows="5"placeholder="Mô tả món ăn" id="content">${product.content}</textarea>
                            <div class="error"></div>
                            <span class="icon-success"><i class="fas fa-check-circle"></i></span>
                            <span class="icon-warnning"><i class="fas fa-exclamation-triangle rung"></i></span>
                        </div>
                    <button id="update" type="submit">Cập nhật</button>
                </form>
            </div>
        </div>
    </section>
        `;
    },
    afterRender(id) {
        const CLOUDINARY_PRESET = "sqyr2tx5";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dhxziinvx/image/upload";
        document.querySelector("#update_product").addEventListener("submit", async (e) => {
            e.preventDefault();
            const fileImage = document.querySelector("#formFile").files[0];
            const formData = new FormData();
            formData.append("file", fileImage);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            const postUpdate = {
                id,
                title: document.querySelector("#title").value,
                quantity: document.querySelector("#quantity").value,
                price: document.querySelector("#price").value,
                image: data.url,
                content: document.querySelector("#content").value,
            };
            update(postUpdate);
        });
    },
};
export default UpdateProducts;
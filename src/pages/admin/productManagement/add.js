import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/products";

const AddNewProduct = {
    render() {
        return /* html */ `
        ${NavAdmin.render()}
        <section>
        <form class="mx-auto mt-5" style= "width:500px" id="add-new">
            <div class="form-outline mb-4">
                <input type="text" id="title" class="form-control" placeholder="Title name"/>
            </div>
            <div class="mb-3">
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="form-outline mb-4">
                <textarea class="form-control" id="content" rows="4" placeholder="Description"></textarea>
            </div>
            <button class="btn btn-primary btn-block mb-4">Send</button>
        </form>
        </section>
        `;
    },
    afterRender() {
        const CLOUDINARY_PRESET = "sqyr2tx5";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dhxziinvx/image/upload";
        document.querySelector("#add-new").addEventListener("submit", async (e) => {
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
            const newProduct = {
                title: document.querySelector("#title").value,
                image: data.url,
                content: document.querySelector("#content").value,
            };
            add(newProduct);
        });
    },
};
export default AddNewProduct;
import NavAdmin from "../../../components/NavAdmin";

const AddNewProduct = {
    render() {
        return /* html */ `
        ${NavAdmin.render()}
        <section>
        <form class="mx-auto mt-5" style= "width:500px" id="add-new">
            <div class="form-outline mb-4">
                <input type="text" id="title" class="form-control" placeholder="Title name"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" id="image" class="form-control" placeholder="Image"/>
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
        document.querySelector("#add-new").addEventListener("submit", (e) => {
            e.preventDefault();
            const newProduct = {
                title: document.querySelector("#title").value,
                image: document.querySelector("#image").value,
                content: document.querySelector("#content").value,
            };
            add(newProduct);
        });
    },
};
export default AddNewProduct;
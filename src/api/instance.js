import axios from "axios";

const instance = axios.create({
    baseURL: "https://60371dc45435040017721a02.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
});
export default instance;
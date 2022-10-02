import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    render() { // method render()
        return `
            ${Header.render()}
            ${Banner.render()}
            ${Footer.render()}
        `;
    },
};
export default HomePage;
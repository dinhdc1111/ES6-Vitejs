import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <h1>About Page</h1>
        ${Footer.render()}
        `;
    },
};
export default AboutPage;
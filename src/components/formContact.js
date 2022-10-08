const formContact = {
    render() {
        return /* html */ `
        <section class="contactUs">
        <h1 class="contactUs-title">Contact us</h1>
        <form action="" class="contactUs-form">
            <div class="flex_contactForm">
                <div class="formInput">
                    <h3 class="formInput__title">Name</h3>
                    <input type="text" id="name" class="name" placeholder="Enter your name...">
                </div>
                <div class="formInput">
                    <h3 class="formInput__title">Email Address</h3>
                    <input type="email" id="email" class="email" placeholder="Your email address...">
                </div>
            </div>
            <div class="flex_contactForm">
                <div class="formInput">
                    <h3 class="formInput__title">Subject</h3>
                    <input type="text" id="subject" class="subject" placeholder="Enter subject...">
                </div>
                <div class="formInput">
                    <h3 class="formInput__title">Enquiry type</h3>
                    <select name="enquiry-type" id="enquiry-type">
                        <option value="0">Advertising</option>
                        <option value="1">Introduce</option>
                        <option value="2">Social Network</option>
                    </select>
                </div>
            </div>
            <div class="formInput">
                <h3 class="formInput__title">Messages</h3>
                <input type="text" id="messages" class="messages" placeholder="Enter your messages...">
            </div>
            <div class="btn-contactUs">
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
        `;
    },
};
export default formContact;
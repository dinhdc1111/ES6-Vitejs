const Signup = {
    render() /* html */ {
        return `<div class="wapperSignup">
        <header class="headerSignup">
            <div class="header-logo">
                <a href="/"><img src="./assets/images/Logo.png" alt=""></a>
            </div>
        </header>
        <main class="main">
            <div class="main-heading">
                <h3 class="main-heading__greeting">Welcome to Fudo</h3>
                <h2 class="main-heading__title">Create Account</h2>
            </div>
            <form class="main-content">
                <div class="form-field">
                    <input type="email" class="input-form" placeholder=" ">
                    <lable for="email" class="lable-form">Email</lable>
                </div>
                <div class="form-field">
                    <input type="text" class="input-form" placeholder=" ">
                    <lable for="fullname" class="lable-form">Fullname</lable>
                </div>
                <div class="form-field">
                    <input type="password" class="input-form" placeholder=" ">
                    <lable for="password" class="lable-form">Password</lable>
                </div>
                <div class="form-field">
                    <input type="password" class="input-form" placeholder=" ">
                    <lable for="re-password" class="lable-form">Re-password</lable>
                </div>
                <button class="btn-submit" type="submit">Create Now</button>
            </form>
        </main>
    </div>`;
    },
};
export default Signup;
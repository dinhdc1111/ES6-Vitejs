const Signin = {
    render() {
        return /* html */ `
        <div class="wapperSignin">
        <header class="headerSignin">
            <div class="header-logo">
                <a href="/"><img src="./assets/images/Logo.png" alt=""></a>
            </div>
        </header>
        <main class="main">
            <div class="main-heading">
                <h3 class="main-heading__greeting">Welcome back</h3>
                <h2 class="main-heading__title">Login to your account</h2>
            </div>
            <form class="main-content">
                <div class="form-field">
                    <input type="email" class="input-form" placeholder=" ">
                    <lable for="email" class="lable-form">Email</lable>
                </div>
                <div class="form-field">
                    <input type="password" class="input-form" placeholder=" ">
                    <lable for="password" class="lable-form">Password</lable>
                </div>
                <button class="btn-submit" type="submit">Login now</button>
            </form>
            <div class="signinWith_GG">
                <button class="btn-signinWith_GG" type="submit"> <img src="./assets/images/iconfinder_Google_1298745 1.png" alt="Google"> Or sign-in with google</button>
            </div>
            <div class="main_foot">
                <a href="#"><h3 class="forgot-password"><span>Forgot password?</span></h3></a>
                <a href="#"><h3 class="join-free">Dont have an account? <span>Join free today</span></h3></a>
            </div>
        </main>
    </div>
        `;
    },
};
export default Signin;
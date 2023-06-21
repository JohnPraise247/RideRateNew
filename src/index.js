import Auth from "./app/auth";
import Home from "./pages/home/home";
import Signup from './pages/home/signup/signup';
import Login from './pages/home/login/login';
import ForgotPwd from './pages/home/forgot-pwd/forgot-pwd';
import { Dashboard } from './pages/dashboard/dashboard';
import Error404 from "./pages/home/404/404";

// Todo
//check if loading daisyui is available
//change the accordion on location.js
//add remeber me to sign in
//design 404 page for main page


//https://www.npmjs.com/package/daisyui/v/2.52.0
//https://emailvalidation.abstractapi.com/v1/?api_key=5f966a5af58040c191908e33902b1a3b&email=jpraise247@gmail.com
/* 
try {
    const record = await client.Records.getOne("demo", "RECORD_ID");
} catch (err) {
    console.log(err);
}

client.Records.getOne("demo", "RECORD_ID")
  .then((record) => {
      // success...
      console.log(record);
  })
  .catch((err) => {
      console.log(err);
  });



*/
// import { themeChange } from 'theme-change'
// themeChange()

// import CheckRates from './pages/check-rates/check-rates';
// import About from './pages/about/about';
// import ContactUs from './pages/contact-us/contact-us';
// import Tac from './pages/tac/tac';
// import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
// import CookiePolicy from './pages/cookie-policy/cookie-policy';
// import Error404 from './pages/404/404';

// console.error("Solve admin error: cannot go from prev. only works right when going to dashboard")
/*$('html, body').animate({
    scrollTop: $(hash).offset().top
}, 800, function () {

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
});*/

//Todo 
//wow, you can preload image
//<link rel="preload" href="/images/testimonials/malak-profile.webp" as="image" type="image/webp">


//add auto suggest on input
//no results found for location search...
//add scroll to top btn    ---> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//style upload btn
//work on cookie-policy page    
//Cookie add analytics consent   https://www.cookieyes.com/?utm_source=CYB&utm_medium=gdpr+cookie+consent+examples&utm_campaign=l1
//add onbeforeunload="return myFunction()"  useful for when values are inputted without changes
//Fix navbar issues onback-->  
//Add reCAPTCHA
//use gsdk validation class
//create custom scrollbar for admin dashboard

//admmin image <a href="https://www.freepik.com/free-vector/client-database-analysis-marketing-strategy-crm-planning-target-audience-research-expert-analyst-studying-end-user-preferences-profiles-vector-isolated-concept-metaphor-illustration_12083345.htm#query=admin%20illustration&position=11&from_view=search&track=ais">Image by vectorjuice</a> on Freepik



// import { Notifications } from './notification';
// import '../public/css/bs.css';
// import '../public/css/colors.css';
// import '../public/css/dashboard.css';
// import '../public/css/gsdk.css';
// import '../public/css/icon.css';
// import '../public/css/index.css';
// import '../public/css/rates.css';
// import '../public/css/sidebar.css';
// import '../public/css/signin.css';

// index.js
// function load(file) {
//     return m.request({
//         method: "GET",
//         url: file,
//         extract: function(xhr) {
//          // console.log(xhr.responseText)
//          // var module = {};
//          // return eval('var module = {};' + xhr.responseText + ';return module.exports;');
//             return Function("var module = {};" + xhr.responseText + ";return module.exports;")
//         }
//     })
// }
// const signin = getCookie("signin");
// (signin == null || signin == "") ? Auth.signin = false : Auth.signin = true

// let pbExists = localStorage.getItem("pocketbase_auth")
// pbExists == null ? Auth.signin = false : Auth.signin = true
// pb.authStore.clear();
if (window.location.host == "localhost:9020") Auth.adminSignin = true

m.route.prefix = '#'
m.route(document.body, "/", {
    "/": Home,
    "/signup": Signup,
    "/login": Login,
    "/forgot-pwd": ForgotPwd,
    // "/check-rates": CheckRates,
    // "/contact-us": ContactUs,
    // "/about": About,
    // "/privacy-policy": PrivacyPolicy,
    // "/cookie-policy": CookiePolicy,
    // "/tac": Tac,
    // // "/load": {
    // //     onmatch: function() {
    // //         return load("js/load.js")
    // // $.getScript
    // //     },
    // // },
    "/u/:urlA": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/u/:urlA/:urlB": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/u:404...": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/admin/:urlA": {
        onmatch: function() {
            return Auth.adminSignin ? Dashboard : Login
        }
    },
    "/admin/:urlA/:urlB": {
        onmatch: function() {
            return Auth.adminSignin ? Dashboard : Login
        }
    },
    "/admin:404...": {
        onmatch: function() {
            return Auth.adminSignin ? Dashboard : Login
        }
    },
    "/:404...": Error404
        // onmatch: function() {
        //         if (!localStorage.getItem("auth-token")) m.route.set("/login")
        //         else return Home
        //     }
});
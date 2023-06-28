import { Model } from "./model";
import PocketBase from './pocketbase.umd';

export const pb = new PocketBase((window.location.host != "localhost:9020" && window.location.host != "localhost:9078") ? 'https://pocketbase.io/' : 'http://127.0.0.1:8090');

const Auth = {
    //User Auth
    email: "john@doe.com",
    username: "John Doe",
    password: "P@ssw0rd",
    signin: !false,
    adminSignin: false,
    accountCreated: false,
    setUsername: (value) => {
        Auth.username = value
    },
    setEmail: (value) => {
        Auth.email = value
    },
    setPassword: (value) => {
        Auth.password = value
    },
    canSubmit: function () {
        var url = m.route.get();

        if (url == "/login" || url == "/admin") {
            return Auth.email.trim() !== "" && Auth.password.trim() !== "" && Auth.password.length >= 8
        }

        return Auth.email.trim() !== "" && Auth.username.trim() !== "" && Auth.password.trim() !== "" && Auth.password.length >= 8
    },
    login: async function () {
        var usertype = m.route.get().slice(1, 6);

        if (usertype == "admin") {
            Auth.adminSignin = true;
            m.route.get().length > 7 ? m.route.set(m.route.get()) : m.route.set('/admin/dashboard');
            m.redraw()
            Model.disableBtn = null;
            return false;
        }

        try {
            await pb.collection('users').authWithPassword(
                Auth.email,
                Auth.password,
            );

            // console.log(pb.authStore.isValid);
            // console.log(pb.authStore.token);
            // console.log(pb.authStore.model.id);
            // sessionStorage.setItem("token", pb.authStore.token)
            if (pb.authStore.model.id != null || pb.authStore.model.id != "") {
                Auth.signin = true;

                // setCookie("signin", true, 7);
                m.route.get().length > 7 ? m.route.set(m.route.get()) : m.route.set('/u/dashboard');

                // Auth.accountCreated = true;
                m.redraw()
                Model.disableBtn = null;
            }
        } catch (error) {
            Model.disableBtn = null
            m.redraw()
            alert(error.message)
            // addDanger(error.message)
        }
    },
    signup: async function () {
        const data = {
            type: Model.userType,
            email: Auth.email,
            emailVisibility: true,
            username: Auth.username.replaceAll(" ", "_"),
            password: Auth.password,
            passwordConfirm: Auth.password
            // "username": "test_username",
            // "email": "test@example.com",
            // "password": "12345678",
            // "passwordConfirm": "12345678",
            // "name": "test"
        };
        try {
            const record = await pb.collection('users').create(data);

            if (record.id != null || record.id != "") {
                Auth.accountCreated = true;
                m.redraw()
                Model.disableBtn = null;
            }
        } catch (error) {
            Model.disableBtn = null
            m.redraw()
            alert(error.message)
            // addDanger(error.message)
        }

        // m.request({
        //     method: "POST",
        //     url: "http://127.0.0.1:8090/api/collections/users/records",
        //     params: { data }
        // }).then(function(data) {
        //     console.log(JSON.stringify(data))
        //         // localStorage.setItem("auth-token", data.token)
        //         // m.route.set("/secret")
        // }).catch(function(e) {
        //     console.log(JSON.stringify(e))
        // })
    },


    //Admin Auth

    // adminUsername: "Admin",//Support email --> john@karenkey.com
    // adminPassword: "12345678",
    // setAdminUsername: (value) => {
    //     Auth.adminUsername = value
    // },
    // setAdminPassword: (value) => {
    //     Auth.adminPassword = value
    // },
    // canSubmitAdmin: () => {
    //     return Auth.adminUsername.trim() !== "" && Auth.adminPassword.trim() !== "" && Auth.adminPassword.length >= 8
    // },
}

export default Auth;
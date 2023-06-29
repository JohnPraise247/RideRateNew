import { AuthLayout, AuthLink } from '../../../components/authlayout';
import { Button } from '../../../components/button';
import TextInput from '../../../components/input';
import Auth from '../../../app/auth';
import { Model } from '../../../app/model';
import Toast from '../../../components/dashboard/toast';
// import { Notifications } from '../../notification';


//state: { step } doesnt work 
const Login = {
    // oninit: (vnode) => {
    //     // vnode.state.disable = null
    //     m.route.get().slice(1, 6) == "admin" ? Auth.email = "Admin" : null;
    // },
    // view: () => {
    view: ({ state: { usertype = m.route.get().slice(1,6) } }) => {
        return [
            m(AuthLayout, {
                title: usertype !== "admin" ? "Welcome Back to RideRate!" : null,
                subtitle: usertype !== "admin" ? "Sign in to access your account and stay updated with real-time travel rates. Let's continue your RideRate journey!" : null,
                // heading: Auth.accountCreated ? "Welcome " + Auth.username : "Log in",
                // subheading: Auth.accountCreated ? "Sign in to continue" : null,
                children: [
                    m(".mb-4",
                        m(TextInput, {
                            id: "emailId",
                            labelA: "Email or Username",
                            //labelB: "",//"must be 4 characters long or more",
                            type: "text",
                            value: usertype !== "admin"? Auth.email : "Admin",
                            oninput: (e) => {
                                Auth.setEmail(e.target.value)
                            }
                        }),
                        m(TextInput, {
                            id: "passwordId",
                            labelA: "Password",
                            type: "password",
                            value: Auth.password,
                            oninput: (e) => {
                                Auth.setPassword(e.target.value)
                            }
                        }),
                        //   m("small.error-text",
                        //       "{errorMessage}"
                        //   ),
                    ),
                    usertype !== "admin" ? m(AuthLink, {
                        textA: "Forgot Password",
                        url: "#/forgot-pwd",
                        className: "text-right mb-8"
                    }) : null, 
                    // m("div", { "class": "alert alert-error" },
                    //     [
                    //         m("svg", { "class": "stroke-current shrink-0 h-6 w-6", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24" },
                    //             m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" })
                    //         ),
                    //         m("span",
                    //             "Error! Task failed successfully."
                    //         )
                    //     ]
                    // ),
                    m(Button, {
                        label: "Sign In",
                        className: ".btn-primary.font-bold.capitalize.text-white.shadow-md.mt-2.w-full[type='submit']",
                        onclick: () => { Model.disableBtn = true; Auth.login() },
                        disabled: !Auth.canSubmit()
                    }),
                    usertype !== "admin"?(
                     m(AuthLink, {
                        textA: "Join",
                        textB: "Not a member yet?  ",
                        url: "#/signup",
                        className: "text-center mt-3"
                     })
                    ) : null 
                ]
            }),
            m(".toast.toast-top.toast-end.z-40.pt-6", [
                Model.toast.map((e) => {
                    return m(Toast, { type: e.type, text: e.text })
                })
            ])
      ]    
    }
}

export default Login;
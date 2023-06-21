import { AuthLayout, AuthLink } from '../../../components/authlayout';
import { Button } from "../../../components/button";
import Card from '../../../components/card';
import TextInput from "../../../components/input";
import { SVGConsumer, SVGContributor } from '../../../components/svg';
import Auth from "../../../app/auth";
import { Model } from "../../../app/model";
// import { Notifications } from '../../notification';



//state: { step } doesnt work
const Signup = {
    oninit: (vnode)=>{
        Auth.accountCreated ? vnode.state.step = 3 : vnode.state.step = 1
        // vnode.state.disable = null
    },
    onupdate: (vnode)=>{
        Auth.accountCreated ? (vnode.state.step = 3, m.redraw()) : null
    },
    view: (vnode) => {
        return m(AuthLayout, {
            step: vnode.state.step,
            title: "Join the RateTracker Community Today!",
            subtitle: "Get real-time rates, personalized recommendations, and connect with fellow travelers. Sign up now!",
            children: [
                vnode.state.step == 3 ? (
                    m(Button, {
                        label: "Next >",
                        className: ".btn-primary.font-bold.capitalize.text-white.shadow-md.mt-2.w-full",
                        onclick: () => m.route.set("/login")
                    })
                ) : vnode.state.step == 2 ? ([
                  m(".mb-4",
                    m(TextInput, {
                        id: "usernameId",
                        labelA: "Username",
                        // labelB: "",//"must be 4 characters long or more",
                        type: "text",
                        // className: "input-sm",
                        value: Auth.username,
                        oninput: (e) => {
                            Auth.setUsername(e.target.value)
                        }
                    }),
                    m(TextInput, {
                        id: "emailId",
                        labelA: "Email Id",
                        type: "email",
                        // className: "input-sm",
                        value: Auth.email,
                        oninput: (e) => {
                            Auth.setEmail(e.target.value)
                        }
                    }),
                    m(TextInput, {
                        id: "passwordId",
                        labelA: "Password",
                        type: "password",
                        // className: "input-sm",
                        value: Auth.password,
                        oninput: (e) => {
                            Auth.setPassword(e.target.value)
                        }
                    }),
                    //   m("small.error-text",
                    //       "{errorMessage}"
                    //   ),
                    ),
                    m(Button, {
                        label: "Sign Up",
                        // type: "a",
                        className: ".btn-primary.font-bold.capitalize.text-white.shadow-md.mt-2.w-full",//[type='submit']
                        onclick: () => { Model.disableBtn = true; Auth.signup() },
                        disabled: !Auth.canSubmit()
                    }),
                    m(AuthLink, {
                        textA: "Log in",
                        textB: "Already have an account?  ",
                        url: "#/login",
                        className: "text-center mt-3"
                    })
                ]) : vnode.state.step == 1 ? ([
                     m(".grid.gap-2.md:gap-4.grid-cols-1", [
                       m(Card, {
                           title: "Contributor",
                           svg: SVGContributor,
                           onclick: () => {
                               vnode.state.step = 2;
                               Model.userType = "contributor"
                           }    
                       }),
                       m(Card, {
                           title: "Consumer",
                           svg: SVGConsumer,
                           onclick: () => {
                               vnode.state.step = 2;
                               Model.userType = "consumer"
                               m.redraw()
                           }  
                       }),
                    ])

                    /* m(".d-flex.justify-content-center.align-items-center",[
                        m(".signup-box", {
                            onclick:()=>{
                                step = 2;
                                Model.userType = "contributor"
                            }
                        } ,[
                            m("i.bx"),
                            "Contributor"
                        ]),
                        m("span.mx-3","Or"),
                        m(".signup-box", {
                            onclick:()=>{
                                step = 2;
                                Model.userType = "consumer"
                            }
                        } ,[
                            m("i.bx"),
                            "Consumer"
                        ])
                    ]) */
                ]): null
            ]
        })
    }
}

export default Signup;
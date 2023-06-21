import AOS from "aos";
import { Model, getCookie, setCookie } from "../app/model";
import { Button } from "./button";

AOS.init({ once: true });
const Cookie = {
    view: ()=>{
        getCookie("acceptCookie") == "" ? Model.acceptCookie = false : Model.acceptCookie = true

        return (!Model.acceptCookie) ? m(".w-full.p-5.lg:px-24.fixed.bottom-0.bg-white.z-50.border-t.border-gray-200[data-aos='fade-up'][data-aos-delay='1000']", [//bg-gray-600
            m(".md:flex.items-center.-mx-3", [
                m("div.md:flex-1.px-3.mb-5.md:mb-0",
                    m("p.text-center.md:text-left.text-xs.leading-tight.md:pr-12",
                        "We and selected partners and related companies, use cookies and similar technologies as specified in our Cookies Policy. You agree to consent to the use of these technologies by clicking Accept, or by continuing to browse this website. You can learn more about how we use cookies and set cookie preferences in Settings."
                    )
                ),
                m("div.px-3.text-center",
                    [
                        m(Button, {
                            label: "Cookie settings",
                            // type: "a",
                            className: ".btn-secondary.font-bold.capitalize.mr-4.px-4.btn-sm.md:btn-md.md:px-8"//.btn-primary.btn-ghost
                        }),
                        m(Button, {
                            label: "Accept cookies",
                            // type: "a",
                            className: ".btn-primary.font-bold.capitalize.text-white.px-4.btn-sm.md:btn-md.md:px-8",//.btn-primary.btn-ghost
                            onclick:()=>{
                                setCookie("acceptCookie", true, 365);
                                Model.acceptCookie = true;
                            }
                        }),
                        // m("button.py-2.px-8.bg-gray-800.hover:bg-gray-900.text-white.rounded.font-bold.text-sm.shadow-xl.mr-3[id='btn']",
                        //     "Cookie settings"
                        // ),
                        // m("button.py-2.px-8.bg-green-400.hover:bg-green-500.text-white.rounded.font-bold.text-sm.shadow-xl[id='btn']",
                        //     "Accept cookies"
                        // )
                    ]
                )
            ])
        ]) : null
        
        /*m(".w-screen.h-screen.bg-gray-100.flex.items-center.justify-center.px-5.py-5.relative[x-data='{showCookieBanner:true}']",
            [
                m("section.w-full.p-5.lg:px-24.absolute.bottom-0.bg-gray-600[x-show='showCookieBanner']",
                    m("div.md:flex.items-center.-mx-3",
                        [
                            m("div.md:flex-1.px-3.mb-5.md:mb-0",
                                m("p.text-center.md:text-left.text-white.text-xs.leading-tight.md:pr-12",
                                    "We and selected partners and related companies, use cookies and similar technologies as specified in our Cookies Policy. You agree to consent to the use of these technologies by clicking Accept, or by continuing to browse this website. You can learn more about how we use cookies and set cookie preferences in Settings."
                                )
                            ),
                            m("div.px-3.text-center",
                                [
                                    m("button.py-2.px-8.bg-gray-800.hover:bg-gray-900.text-white.rounded.font-bold.text-sm.shadow-xl.mr-3[id='btn']",
                                        "Cookie settings"
                                    ),
                                    m("button.py-2.px-8.bg-green-400.hover:bg-green-500.text-white.rounded.font-bold.text-sm.shadow-xl[id='btn']",
                                        "Accept cookies"
                                    )
                                ]
                            )
                        ]
                    )
                ),
                m("dialog.h-auto.w-11/12.md:w-1/2.bg-white.overflow-hidden.rounded-md.p-0[id='cookiesModal']",
                    m("div.flex.flex-col.w-full.h-auto",
                        [
                            m("div.flex.w-full.h-auto.items-center.px-5.py-3",
                                [
                                    m("div.w-10/12.h-auto.text-lg.font-bold",
                                        " Cookie settings "
                                    ),
                                    m("div.flex.w-2/12.h-auto.justify-end",
                                        m("button.cursor-pointer.focus:outline-none.text-gray-400.hover:text-gray-800",
                                            m("i.mdi.mdi-close-circle-outline.text-2xl")
                                        )
                                    )
                                ]
                            ),
                            m("div.flex.w-full.items-center.bg-gray-100.border-b.border-gray-200.px-5.py-3.text-sm",
                                [
                                    m("div.flex-1",
                                        m("p",
                                            "Strictly necessary cookies"
                                        )
                                    ),
                                    m("div.w-10.text-right",
                                        m("i.mdi.mdi-check-circle.text-2xl.text-green-400.leading-none")
                                    )
                                ]
                            ),
                            m("div.flex.w-full.items-center.bg-gray-100.border-b.border-gray-200.px-5.py-3.text-sm",
                                [
                                    m("div.flex-1",
                                        m("p",
                                            "Cookies that remember your settings"
                                        )
                                    ),
                                    m("div.w-10.text-right",
                                        m("i.mdi.mdi-check-circle.text-2xl.text-green-400.leading-none")
                                    )
                                ]
                            ),
                            m("div.flex.w-full.items-center.bg-gray-100.border-b.border-gray-200.px-5.py-3.text-sm",
                                [
                                    m("div.flex-1",
                                        m("p",
                                            "Cookies that measure website use"
                                        )
                                    ),
                                    m("div.w-10.text-right",
                                        m("i.mdi.mdi-check-circle.text-2xl.text-green-400.leading-none")
                                    )
                                ]
                            ),
                            m("div.flex.w-full.items-center.bg-gray-100.border-b.border-gray-200.px-5.py-3.text-sm",
                                [
                                    m("div.flex-1",
                                        m("p",
                                            "Cookies that help with our communications and marketing"
                                        )
                                    ),
                                    m("div.w-10.text-right",
                                        m("i.mdi.mdi-check-circle.text-2xl.text-green-400.leading-none")
                                    )
                                ]
                            ),
                            m("div.flex.w-full.px-5.py-3.justify-end",
                                m("button.py-2.px-8.bg-gray-800.hover:bg-gray-900.text-white.rounded.font-bold.text-sm.shadow-xl",
                                    "Save settings"
                                )
                            )
                        ]
                    )
                )
            ]
        )*?
        
        /*m(".card.w-96.bg-secondary.shadow-outline.fixed.bottom-4.z-50.w-full", {//.right-4.left-4.md:right-4.md:left-auto
            // style: "box-shadow: 0 10px 15px -3px rgb(26 27 35 / 10%), 0 4px 6px -2px rgb(26 27 35 / 8%);"
        },
            m("div.card-body",//.items-center.text-center
                [
                    m("h2.card-title",
                        "Cookies!"
                    ),
                    m("p",
                        "We are using cookies for no reason."
                    ),
                    m("div.card-actions.justify-end",
                        [
                            m(Button, {
                                label: "Accept",
                                // type: "a",
                                className: ".btn-primary.text-white"
                            }),
                            m(Button, {
                                label: "Deny",
                                // type: "a",
                                className: ".btn-primary.btn-ghost"
                            })
                        ]
                    )
                ]
            )
        )*/
    }
}

export default Cookie;
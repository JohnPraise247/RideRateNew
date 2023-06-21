import { ButtonIcon } from "./button";
import { SVGFacebook, SVGTwitter, SVGYoutube } from "./svg";

const Footer = {
    view:()=>{
        return [
            m("footer.footer.p-10.text-base-content",
                [
                    m("div",
                        [
                            m("span.footer-title",
                                "Partner with us"
                                // "Services"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Sign up as a driver"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Sign up as a contributor"
                            ),
                            // m("a.link.link-hover",
                            //     "Marketing"
                            // ),
                            // m("a.link.link-hover",
                            //     "Advertisement"
                            // )
                        ]
                    ),
                    m("div",
                        [
                            m("span.footer-title",
                                "Company"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "About us"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Contact"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Support"
                            ),
                            // m("a.link.link-hover",
                            //     "Press kit"
                            // )
                        ]
                    ),
                    m("div",
                        [
                            m("span.footer-title",
                                "Legal"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Terms of use"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Privacy policy"
                            ),
                            m("a.link.link-hover[href=#/]",
                                "Cookie policy"
                            )
                        ]
                    )
                ]
            ),
            m("footer.footer.px-10.py-4.border-t.text-base-content.border-base-200",
                [
                    m("div.items-center.grid-flow-col",
                        [
                            m("img.w-8.h-8.md:w-12.md:h-12[src=images/logo_white.png][alt=logo]"),
                            m("p",
                                [
                                    " © 2023 RideRate, All Rights Reserved ",
                                    // m("br"),
                                    // "Providing reliable tech since 1992"
                                ]
                            )
                        ]
                    ),
                    m("div.md:place-self-center.md:justify-self-end",
                        m("div.grid.grid-flow-col.gap-4",
                            [
                                m(ButtonIcon, {
                                    svg: SVGTwitter,
                                    className: "btn-social-link",
                                    sr:"Twitter link"
                                }),
                                m(ButtonIcon, {
                                    svg: SVGYoutube,
                                    className: "btn-social-link",
                                    sr:"Youtube link"
                                }),
                                m(ButtonIcon, {
                                    svg: SVGFacebook,
                                    className: "btn-social-link",
                                    sr:"Facebook link"
                                })
                                // m("a[href=#/]",
                                    
                                //     "Twitter"
                                // ),
                                // m("a[href=#/]",
                                    
                                //     "Youtube"
                                // ),
                                // m("a[href=#/]",
                                    
                                //     "Facebook"
                                // )
                            ]
                        )
                    )
                ]
            )
        ];

    }
}

export default Footer;
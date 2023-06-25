import { Model } from "../app/model"
import Spinner from "./spinner"
import { SVGMoon, SVGSun } from "./svg"

export const Button = {
    view: ({ attrs: { label, type = "button", className = ".font-bold.capitalize", svg, onclick, disabled } })=>{
        return m(type + ".btn.border-0" + className + (className.includes(".btn-secondary") ? ".hover:bg-gray-200" : ""), {
            //+ (className.includes(".btn-secondary") && !className.includes(".btn-secondary.btn-outline") ? ".border-0.hover:bg-gray-200" : ".border-1.border-")
            onclick,
            disabled: Model.disableBtn == null ? disabled : true,
        }, [
            svg,
            Model.disableBtn != null ? m(Spinner) : label,
            // m("span.spinner.loading-md.text-white"), // not working
        ])
    }
}

export const ButtonIcon = {
    view: ({ attrs: { svg, indicator, className = "btn-ghost", sr, onclick } }) => {
        return m("button.btn.btn-circle", {
            class: className,
            onclick
        },
            m("span.sr-only", sr ),
            m(".indicator",
                [
                    m(svg),
                    indicator != null? m("span.indicator-item.badge.badge-accent.badge-sm.text-white", indicator) : null
                ]
            )
        )
    }
}

export const ButtonClose = {
    view: ({ attrs: { svg, className, onclick } }) => {
        return m("button.btn.btn-ghost.btn-circle", {
            class: className,
            onclick
        }, m(svg) )
    }
}

// export const labelButton = {
//     view: ({ attrs: { id, onclick, svg } }) => {
//         return m("label.btn.btn-edit.rounded-lg.border.border-gray.mt-3.ml-2.justify-center.items-center.btn-sm.md:h-10", {
//             id,
//             onclick,
//         },
//             svg
//         )
//     }
// }

/* m("label.swap", 
                [
                    m("input[type='checkbox']"),
                    m(ButtonMode, { class: className })
                ]
              ), */

export const ButtonAvatar = {
    view: ({ attrs: { src } }) => {
        return m("div.dropdown.dropdown-end.ml-4",
            [
                m("label.btn.btn-ghost.btn-circle.avatar[tabindex='0']",
                    m("div.w-10.rounded-full.ring.ring-primary.ring-offset-base-100.ring-offset-1",//
                        m("img[src='"+src+"'][alt='profile']")
                    )
                ),
                m("ul.menu.menu-compact.dropdown-content.mt-3.p-2.shadow.bg-base-100.rounded-box.w-52[tabindex='0']",
                    [
                        m("li.justify-between",
                            m("a[href='/#/settings-profile']",
                                [
                                    "Profile Settings",
                                    // m("span.badge",
                                    //     "New"
                                    // )
                                ]
                            )
                        ),
                        m("li",
                            m("a[href='/#/settings-billing']",  "Bill History")
                        ),
                        m("div.divider.mt-0.mb-0"),
                        m("li", m("a", "Logout"))
                    ]
                )
            ]
        )
    }
}

export const ButtonOptions = {
    view:()=>{
        return m("div.dropdown.dropdown-bottom.dropdown-end.ml-2",
            [
                m("label.btn.btn-ghost.btn-sm.normal-case.btn-square.[tabindex='0']",
                    m("svg.w-5[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24'][stroke-width='1.5'][stroke='currentColor'][aria-hidden='true']",
                        m("path[stroke-linecap='round'][stroke-linejoin='round'][d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z']")
                    )
                ),
                m("ul.dropdown-content.menu.menu-compact.p-2.shadow.bg-base-100.rounded-box.w-52[tabindex='0']",
                    [
                        m("li",
                            m("a",
                                [
                                    m("svg.w-4[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24'][stroke-width='1.5'][stroke='currentColor'][aria-hidden='true']",
                                        m("path[stroke-linecap='round'][stroke-linejoin='round'][d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75']")
                                    ),
                                    "Email Digests"
                                ]
                            )
                        ),
                        m("li",
                            m("a",
                                [
                                    m("svg.w-4[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24'][stroke-width='1.5'][stroke='currentColor'][aria-hidden='true']",
                                        m("path[stroke-linecap='round'][stroke-linejoin='round'][d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3']")
                                    ),
                                    "Download"
                                ]
                            )
                        )
                    ]
                )
            ]
        )
    }
}

export const ButtonMode = {
    view: ({ attrs: { className } }) => {
        return m(".btn.btn-circle.btn-ghost.mr-2", {
            class: className
        },
        m("label.swap.swap-rotate",
            [
                m("input[type='checkbox'][data-toggle-theme='themedark,themelight']"),
                m(SVGSun),
                m(SVGMoon)
            ]
        ))
    }
}
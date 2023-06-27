import { getUsertype, isAdmin } from "../../app/model";
import { ButtonMode } from "../button";
import {  
    SVGDashboard,
    SVGDollar,
    SVGLocation,
    SVGCog,
    SVGUsers,
    SVGAnalytics,
    SVGUser
 } from "../svg";

const List = {
    view:({ attrs: { svg, label, url, active } }) =>{
        return m("li",
            m("a[href='#" + getUsertype() + url + "']" + (active ? ".font-semibold.bg-base-200.[aria-current='page']" : ".font-normal"),//.md:text-xl
                [
                    m(svg),
                    label,
                    // active? m(   "span.absolute.inset-y-0.left-0.w-1.rounded-tr-md.rounded-br-md.bg-primary.[aria-hidden='true']") : null
                ]
            )
        )
    }
}

const Drawer = {
    view: ({ state: { hash = m.route.param("urlA") || "dashboard" } }) =>{
        return m("div.drawer-side.z-50",
            [
                m("label.drawer-overlay[for='left-sidebar-drawer']"),
                m("ul.menu.px-4.w-56.md:w-64.h-full.bg-base-100.text-base-content",//.fixed.top-0.bottom-0
                    [
                        m(".flex.mb-3", [
                            m(".transition-all.hover:bg-base-300.pt-2.rounded-lg.font-semibold.text-xl.md:text-2xl",
                                m("a.flex-0.px-2[href='#" + getUsertype() + "/dashboard'][aria-current=page][aria-label=Homepage]",
                                    m(".font-title.inline-flex.items-center.text-lg.md:text-xl", [
                                        m("img.w-8.h-8[src='./favicon.png'][alt='RideRate Logo']"),
                                        m("span.capitalize", "Ride"),
                                        m("span.text-primary.capitalize", "Rate")
                                    ])
                                )
                            ),
                            m(ButtonMode, { className: "ml-auto" })
                        ]),
                        // m(ButtonClose, {
                        //     svg: SVGClose,
                        //     className: "bg-base-300 z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
                        // }),
                        
                        
                        // m("li.mb-2.font-semibold.text-xl.md:text-2xl",
                        //     m("a[href='#/" + (usertype == "admin" ? usertype : "u") + "/dashboard']",
                        //         [
                        //             m("img.mask.mask-squircle.w-10[src='./favicon.png'][alt='RideRate Logo']"),
                        //             "RideRate"
                        //         ]
                        //     )
                        // ),
                        m(".text-gray-500.mt-5.mb-2", "Main"),
                        m(List, {
                            svg: SVGDashboard,
                            label: "Dashboard",
                            url: "/dashboard",
                            active: hash == "dashboard"? true : false
                        }),
                        m(List, {
                            svg: SVGLocation,
                            label: "Locations",
                            url: "/locations",
                            active: hash == "locations"? true : false
                        }),
                        m(List, {
                            svg: SVGDollar,
                            label: "Rates",
                            url: "/rates",
                            active: hash == "rates"? true : false
                        }),
                        isAdmin() ? m(List, {
                            svg: SVGUsers,
                            label: "Users",
                            url: "/users",
                            active: hash == "users" ? true : false
                        }) : null,
                        isAdmin() ? m(List, {
                            svg: SVGAnalytics,
                            label: "Analytics",
                            url: "/analytics",
                            active: hash == "analytics" ? true : false
                        }) : null,
                        m(".text-gray-500.mt-5.mb-2", "Settings"),
                        m(List, {
                            svg: SVGUser,
                            label: "Profile",
                            url: "/profile",
                            active: hash == "profile"? true : false
                        }),
                        m(List, {
                            svg: SVGCog,
                            label: "Settings",
                            url: "/settings",
                            active: hash == "settings"? true : false
                        })
                    ]
                )
            ]
        )
    }
}

export default Drawer;
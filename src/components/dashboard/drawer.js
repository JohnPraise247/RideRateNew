import { ButtonClose } from "../button";
import { 
    SVGClose, 
    SVGDashboard,
    SVGDollar,
    SVGLocation,
    SVGCog,
    SVGUsers,
    SVGAnalytics
 } from "../svg";

const List = {
    view:({ state: { usertype = m.route.get().slice(1, 6) }, attrs: { svg, label, url, active } }) =>{
        return m("li",
            m("a.md:text-xl[href='#/" + (usertype == "admin" ? usertype : "u") + url + "']" + (active ? ".font-semibold.bg-base-200.[aria-current='page']" : ".font-normal"),
                [
                    m(svg),
                    label,
                    active? m("span.absolute.inset-y-0.left-0.w-1.rounded-tr-md.rounded-br-md.bg-primary.[aria-hidden='true']") : null
                ]
            )
        )
    }
}

const Drawer = {
    view: ({ state: { hash = m.route.param("urlA") || "dashboard", usertype = m.route.get().slice(1, 6) } }) =>{
        return m("div.drawer-side",
            [
                m("label.drawer-overlay[for='left-sidebar-drawer']"),
                m("ul.menu.pt-2.w-80.bg-base-100.text-base-content",
                    [
                        m(ButtonClose, {
                            svg: SVGClose,
                            className: "bg-base-300 z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
                        }),
                        m("li.mb-2.font-semibold.text-xl.md:text-2xl",
                            m("a[href='#/" + (usertype == "admin" ? usertype : "u") + "/dashboard']",
                                [
                                    m("img.mask.mask-squircle.w-10[src='./favicon.png'][alt='RideRate Logo']"),
                                    "RideRate"
                                ]
                            )
                        ),
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
                        usertype == "admin" ? m(List, {
                            svg: SVGUsers,
                            label: "Users",
                            url: "/users",
                            active: hash == "users" ? true : false
                        }) : null,
                        usertype == "admin" ? m(List, {
                            svg: SVGAnalytics,
                            label: "Analytics",
                            url: "/analytics",
                            active: hash == "analytics" ? true : false
                        }) : null,
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
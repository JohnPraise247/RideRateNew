import { locations } from "../../app/data";
import { Model, getUsertype, isAdmin } from "../../app/model";
import Select from "./select";
import { 
    SVGAnalytics,
    SVGCog, 
    SVGDashboard, 
    SVGDollar, 
    SVGLocation, 
    SVGQuestionMark, 
    SVGUsers 
} from "../svg";


const getIcon = (label) => {
    return label == "dashboard"? m(SVGDashboard, {className: "w-4 h-4" }) 
           :label == "locations"? m(SVGLocation, {className: "w-4 h-4" }) 
           :label == "rates"? m(SVGDollar, {className: "w-4 h-4" })
           :label == "users"? m(SVGUsers, {className: "w-4 h-4" })
           :label == "analytics"? m(SVGAnalytics, {className: "w-4 h-4" })
           :label == "settings"? m(SVGCog, {className: "w-4 h-4" })
           :m(SVGQuestionMark, {className: "w-4 h-4" })
}

const BreadCrumbs = {
    view: ({ state: { url = m.route.get().slice(1), usertype = m.route.get().slice(1, 6)  }})=>{
        var url = [ "dashboard", m.route.param("urlA") ]

        return m(".flex", [
            m("div.text-sm.breadcrumbs.rounded-lg.bg-base-100.px-4.py-3.shadow-sm.mr-3.w-full",//bg-gray-50
            m("ul",
                [
                    url.map((e)=>{
                       return m("li",
                            m("a.font-bold", {
                                href: "/#/" + (usertype == "admin" ? usertype : "u") + "/" + e
                            },
                                [
                                    getIcon(e),
                                    e.charAt(0).toUpperCase() + e.slice(1)
                                ]
                            )
                        )
                    })
                ]
            )
        ),
        locations.data.length > 0 ? m(Select, {
            options: isAdmin() ? Model.modeAdminList : Model.modeList,//"edit"
            oncreate: () => {
                m.route.set(getUsertype() + "/" + m.route.param("urlA"), { 
                    mode: (
                        Model.modeSelect == 0 
                        ? Model.modeList[0] 
                        : isAdmin() && Model.modeSelect == 1 ? Model.modeList[1]
                        : isAdmin() && Model.modeSelect == 2 ? Model.modeList[2]
                        : Model.modeList[1]
                    ) 
                }, { replace: true })
            },
            onchange: (e)=>{
                m.route.set(getUsertype() + "/" + m.route.param("urlA"), { mode: e.target.value.toLowerCase() })
                e.target.value == Model.modeList[0].charAt(0).toUpperCase() + Model.modeList[0].slice(1) 
                ? Model.modeSelect = 0 
                : e.target.value == Model.modeList[1].charAt(0).toUpperCase() + Model.modeList[1].slice(1) ? Model.modeSelect = 1 
                : Model.modeSelect = 2
            }
        }) :null
        
            // m("div.dropdown.dropdown-end.ml-auto",
            //     [
            //         m("label.btn.m-1[tabindex='0']",
            //             "Click"
            //         ),
            //         m("ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-52[tabindex='0']",
            //             [
            //                 m("li",
            //                     m("a",
            //                         "Item 1"
            //                     )
            //                 ),
            //                 m("li",
            //                     m("a",
            //                         "Item 2"
            //                     )
            //                 )
            //             ]
            //         )
            //     ]
            // )
        ])
    }
}

export default BreadCrumbs;
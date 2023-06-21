// import { Button } from "../button";
import { SVGEmpty } from "../svg"

const emptyState = {
    view: ({ attrs: { url = m.route.param("urlA") || "dashboard" } })=>{
        return m(".rounded-full.items-center.flex.flex-col.mt-36.md:mt-24", [//.bg-gray-500.w-72
            m(SVGEmpty, { className: "md:h-48 md:w-48 w-24 h-24" }),
            // m("h3","No locations created yet"),
            m("label.btn.btn-primary.btn-sm.capitalize.font-bold.mt-5.text-white.md:ml-12.md:px-5.md:h-10", {
                for: (
                    url == "locations" ? "modalCreateLocation"
                        : url == "rates" ? "modalCreateRate"
                        : "modalCreate"
                )
            },
                (
                    url == "locations" ? "Create new location"
                    : url == "rates" ? "Create new rate" 
                    : "- - - "
                )
            ),
            // m(Button, {
            //     label: (
            //         url == "locations" ? "Create new location" 
            //         : url == "rates" ? "Create new rate" :
            //         "- - - "
            //     ),
            //     className: ".btn-primary.btn-sm.capitalize.font-bold.mt-5.text-white.md:ml-12.md:px-5.md:h-10",
            //     onclick: () => {
            //         // url == "locations" ? modalCreateLocation.showModal()
            //         //     : url == "rates" ? "Create new rate" :
            //         //         "- - - "
            //     }
            // })
        ])
    }
}

export default emptyState;
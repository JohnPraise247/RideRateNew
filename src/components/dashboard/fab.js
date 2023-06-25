import { Model } from "../../app/model"
import { ButtonIcon } from "../button"
import { SVGPlus } from "../svg"

export const Fab = {
    view:({ attrs:{ onclick }})=>{
        return m(ButtonIcon, {
            svg: SVGPlus,
            className: "btn-primary fixed right-5 bottom-5 shadow-md text-white",
            onclick:() => onclick()
        })
    }
}

export const Fab2 = {
    view: ({ state: { url = m.route.param("urlA") }, attrs:{ onclick }})=>{
        return m("label.btn.btn-circle.btn-primary.fixed.right-5.bottom-5.shadow-md.text-white", {
            for: (
                url == "locations" ? "modalLocation"
                : url == "rates" ? "modalCreateRate"
                : "modalCreate"
            ), onclick: () => {
                Model.modal.location.title = "New location entry"
            }
        },
            m(SVGPlus)
        )
    }
}
import { Model } from "../../app/model"

const Select = {
    view:({ attrs: { label , options, oncreate, onchange, className }})=>{
        return m("select.select.select-bordered.max-w-xs.shadow-sm", {
            class: className,
            oncreate:()=> oncreate(),
            onchange:(e)=> onchange(e),
            // onupdate:()=>{
            //     console.log("on update")
            // }
        },
            [
                label != null ? m("option[disabled][selected]", label ) : null,
                options.map((i, j)=>{
                    return Model.modeSelect == j ? m("option[selected]", i.charAt(0).toUpperCase() + i.slice(1)) : m("option", i.charAt(0).toUpperCase() + i.slice(1))
                    // return Model.modeSelect == j ? m("option[selected]", i.charAt(0).toUpperCase() + i.slice(1)) : m("option", i.charAt(0).toUpperCase() + i.slice(1))
                })
            ]
        )
    }
}

export default Select;
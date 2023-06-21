const TextInput = {
    view:({ attrs: { id, labelA, labelB, type, placeholder, value, className, classNameMain = "", oninput }})=>{
        return m("div.form-control.w-full"+classNameMain,//.max-w-xs
            [
                m("label.label", {
                    for: id
                },
                    [
                        m("span.label-text", labelA )
                    ]
                ),
                m("input.input.input-bordered.w-full", {//.max-w-xs
                    id,
                    type,
                    placeholder,
                    value,
                    class: className,
                    oninput:(e)=> oninput(e)
                }),
                labelB != null ? m("label.label", {
                    for: id
                },
                    [
                            m("span.label-text-alt", ""),
                            m("span.label-text-alt", labelB)
                    ]
                ): null
            ]
        )
    }
}

export default TextInput;
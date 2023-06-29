import { Model } from "../../app/model";
import { SVGClose, SVGExclamation, SVGTick } from "../svg";

const Toast = {
    view: ({ state: { className, svg = SVGTick}, attrs: { id, text, type }})=>{
        (type == "success" ? ( className = ".icon-success", svg = SVGTick )
        : type == "warn" ? ( className = ".icon-warn" , svg = SVGExclamation )
        : type == "error" ? ( className = ".icon-error", svg = SVGClose )
        : ".icon-success" )

        return [
            m(".flex.items-center.w-full.max-w-xs.p-4.mb-4.text-base-500.bg-base-100.rounded-lg.shadow[role='alert']", {
                id
            },
                [
                    m(className + ".inline-flex.items-center.justify-center.flex-shrink-0.w-8.h-8.rounded-lg",
                        [
                            m(svg, { className: "w-5 h-5" }),
                            m("span.sr-only", "Check icon" )
                        ]
                    ),
                    m("div.ml-3.text-sm.font-normal.whitespace-normal", text),
                    m("button.btn.btn-circle.btn-ghost.text-base-400.btn-sm.ml-auto", [
                        m("span.sr-only", "Close"),
                        "✕"
                      ]
                    )
                ]
            )
        ]
    }
}

export const showToast = (text, type = "success", time = 5000) =>{
    Model.toast.push({
        type,
        text,
        time
    })

    setTimeout(() => {
        Model.toast.map((e,i)=>{
            if(e.time == time){
                Model.toast.splice(i, 1);
                m.redraw();
            }
        })
        // Model.toast.filter((toast) => toast.id != id)
    }, time);
}



export default Toast;
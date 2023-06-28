import { SVGClose, SVGExclamation, SVGTick } from "../svg";

const Toast = {
    view: ({ state: { className, svg = SVGTick}, attrs: { id, text = "Item moved successfully.", type = "success" }})=>{
        (type == "success" ? ( className = ".toast-success", svg = SVGTick )
        : type = "warn" ? ( className = ".toast-warn" , svg = SVGExclamation )
        : type = "error" ? ( className = ".toast-error", svg = SVGClose )
        : ".toast-success" )

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
                    m("div.ml-3.text-sm.font-normal", text),
                    m("button.btn.btn-circle.btn-ghost.text-base-400.btn-sm.ml-auto", [
                        m("span.sr-only", "Close"),
                        "✕"
                      ]
                    )
                ]
            )
        ]
        
        /*m("div.alert.bg-base-100.shadow", [
            // m(".bg-red-300.p-2.rounded-full", [
            m("svg.text-red-500.h-6.w-6[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24'][stroke='currentColor'][stroke-width='2']",
                m("path[stroke-linecap='round'][stroke-linejoin='round'][d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z']")
            ),

            // ]),

            m("div",
                [
                    m("h3.font-bold.text-red-500",
                        "Warning Example!"
                    ),
                    m("div.text-lg",
                        "This is a warning"
                    ),
                    // m("div.text-lg",
                    //   m("progress.progress.w-full[value='81'][max='100']")
                    // )
                ]
            ),
            // m("span",
            //   "Message sent successfully."
            // ), 
            m("div.flex-none",
                m("button.btn.btn-circle.btn-sm[onclick='window.removeWindToast(event)']",
                    m("svg.h-6.w-6[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24'][stroke='currentColor']",
                        m("path[stroke-linecap='round'][stroke-linejoin='round'][stroke-width='2'][d='M6 18L18 6M6 6l12 12']")
                    )
                )
            )

        ]

        )*/
    }
}

const showToast = (text, type, time) =>{
    //add toast to layout
}

export default Toast;
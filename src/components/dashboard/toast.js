const Toast = {
    view:()=>{
        return m("div.alert.bg-base-100.shadow", [
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

        )
    }
}

const showToast = (text, type, time) =>{
    //add toast to layout
}

export default Toast;
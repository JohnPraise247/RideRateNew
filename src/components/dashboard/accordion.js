const Accordion = {
    view: ({ state:{ color }, attrs: { label, children, className, svg, open = false } }) => {
        label == "Approved" ? color = "text-green-500"
        : label == "Pending" ? color = "text-yellow-500"
        : label == "Rejected" ? color = "text-red-500"
        : null

        return m(".mt-3.p-5.rounded-lg.bg-white.overflow-hidden", {
            class: className
        },
            m("details.group" + (open == true ? "[open]" : ""),
                [
                    m("summary.flex.justify-between.items-center.font-medium.cursor-pointer.list-none",
                        [
                            
                            m(".flex", {
                                class: color
                            }, m(svg, { className: "w-6 h-6 " + color }), label),
                            m("span.transition.group-open:rotate-180", {
                                class: color
                            },
                                m("svg[fill='none'][height='24'][shape-rendering='geometricPrecision'][stroke='currentColor'][stroke-linecap='round'][stroke-linejoin='round'][stroke-width='1.5'][viewBox='0 0 24 24'][width='24']", 
                                    m("path[d='M6 9l6 6 6-6']")
                                )
                            )
                        ]
                    ),
                    m(".mt-6.group-open:animate-fadeIn", children )
                    // m("p.text-neutral-600.mt-3.group-open:animate-fadeIn", desc )
                ]
            )
        )
    }
}

export default Accordion;
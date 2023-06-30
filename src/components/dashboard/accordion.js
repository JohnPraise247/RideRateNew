import { SVGExclamation, SVGTickCircle, SVGTimes } from "../svg";

const Accordion = {
    view: ({ state: { color = ["text-green-500", "text-yellow-500", "text-red-500"], svg = [SVGTickCircle, SVGExclamation, SVGTimes] }, attrs: { name, title, content, checked = "" } }) => {

        return title.map((e, i) => {
            return m(".mt-3.collapse.collapse-arrow.bg-base-100.rounded-lg.shadow",
                [
                    m("input[type='radio']" + (checked == e.toLowerCase() ? "[checked]" : ""), {//[checked]
                        name
                    }),
                    m(".flex.collapse-title.text-xl.font-medium.items-center", { 
                        class: color[i]
                    }, m(svg[i], { className: "w-6 h-6 " + color }), e),
                    m("div.collapse-content",
                        m("p", content[i])
                    )
                ]
            )
        })
        
        
        
        /*
        m(".mt-3.p-5.rounded-lg.bg-base-100.overflow-hidden", {
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
        )*/
    }
}

export default Accordion;
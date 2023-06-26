export const StatsCard = {
    view:({ attrs: { label, value = 0, svg, info} })=>{
        return m("div.stats.shadow",
            m("div.stat",
                [
                    m("div.stat-figure.text-primary", m(svg) ),//.dark:text-slate-300
                    m("div.stat-title", label),//.dark:text-slate-300
                    m("div.stat-value.text-primary", value),//.dark:text-slate-300
                    m("div.stat-desc", info )//.font-bold.text-green-700.dark:text-green-300
                ]
            )
        )
    }
}


export const StatsRow = {
    view: ({ state: { usertype = m.route.get().slice(1, 6) }, attrs: { label, value = "" , svg, info = "" } }) => {
        return m("div.stats.stats-vertical.shadow.mt-6.py-4.w-full.md:stats-horizontal",//
            [
                m("div.stat",
                    [
                        m("div.stat-figure", m(svg[0], { className: "w-8 h-8 mt-6 text-green-500" })),
                        m("div.stat-title", label[0]),
                        m("div.stat-value", value[0]),
                        m("div.stat-desc", info[0])
                    ]
                ),
                m("div.stat",
                    [
                        m("div.stat-figure", m(svg[1], { className: "w-8 h-8 mt-6 text-yellow-500" })),
                        m("div.stat-title", label[1]),
                        m("div.stat-value", value[1]),
                        m("div.stat-desc", info[1])
                    ]
                ),
                usertype == "admin"? (
                 m("div.stat",
                    [
                        m("div.stat-figure", m(svg[2], { className: "w-8 h-8 mt-6 text-red-500" })),
                        m("div.stat-title", label[2]),
                        m("div.stat-value", value[2]),
                        m("div.stat-desc", info[2])
                    ]
                 )
                ):null
            ]
        )
    }
}
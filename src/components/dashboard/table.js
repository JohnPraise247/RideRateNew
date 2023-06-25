const Table = {
    view: ({ attrs: { thead, tbody } }) => {
        return m("div.h-full.w-full.pb-6.bg-base-100",
            m("div.overflow-x-auto.w-full",
                m("table.table.w-full",
                    [
                        m("thead",
                            m("tr",
                                [
                                    thead.map((e)=>{
                                        console.log(e)
                                        // return m("th", e)
                                    })
                                ]
                            )
                        ),
                        m("tbody",
                            [
                                tbody.map((e) => {
                                    return m("tr", [
                                        // m("td", m("div.flex.items-center.space-x-3", [
                                            
                                        // ])
                                    ])
                                })
                            ]
                        )
                    ]
                )
            )
        )
    }
}

export default Table;
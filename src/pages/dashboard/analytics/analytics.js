const analyticsSection = {
    view:()=>{
        return [
            m("div.grid.lg:grid-cols-2.mt-0.grid-cols-1.gap-6",
            [
                m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-2",
                    [
                        m("div.text-xl.font-semibold.",
                            "Sales"
                        ),
                        m("div.divider.mt-2"),
                        m("div.h-full.w-full.pb-6.bg-base-100",
                            m("canvas[role='img'][height='437'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "437px", "width": "875px" } })
                        )
                    ]
                ),
                m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-2",
                    [
                        m("div.text-xl.font-semibold.",
                            "No of Orders"
                        ),
                        m("div.divider.mt-2"),
                        m("div.h-full.w-full.pb-6.bg-base-100",
                            m("canvas[role='img'][height='437'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "437px", "width": "875px" } })
                        )
                    ]
                )
            ]
        ),
            m("div.grid.lg:grid-cols-2.mt-4.grid-cols-1.gap-6",
                [
                    m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-6",
                        [
                            m("div.text-xl.font-semibold.",
                                "Orders by Category"
                            ),
                            m("div.divider.mt-2"),
                            m("div.h-full.w-full.pb-6.bg-base-100",
                                m("canvas[role='img'][height='875'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "875px", "width": "875px" } })
                            )
                        ]
                    ),
                    m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-6",
                        [
                            m("div.text-xl.font-semibold.",
                                "Orders by country"
                            ),
                            m("div.divider.mt-2"),
                            m("div.h-full.w-full.pb-6.bg-base-100",
                                m("canvas[role='img'][height='875'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "875px", "width": "875px" } })
                            )
                        ]
                    )
                ]
            ),
            m("div.grid.lg:grid-cols-2.mt-4.grid-cols-1.gap-6",
                [
                    m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-6",
                        [
                            m("div.text-xl.font-semibold.",
                                "No of Orders by month (in k)"
                            ),
                            m("div.divider.mt-2"),
                            m("div.h-full.w-full.pb-6.bg-base-100",
                                m("canvas[role='img'][height='437'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "437px", "width": "875px" } })
                            )
                        ]
                    ),
                    m("div.card.w-full.p-6.bg-base-100.shadow-xl.mt-6",
                        [
                            m("div.text-xl.font-semibold.",
                                "Montly Active Users (in k)"
                            ),
                            m("div.divider.mt-2"),
                            m("div.h-full.w-full.pb-6.bg-base-100",
                                m("canvas[role='img'][height='437'][width='875']", { "style": { "display": "block", "box-sizing": "border-box", "height": "437px", "width": "875px" } })
                            )
                        ]
                    )
                ]
            ),
            m("div.h-16")
        ]
    }
}

export default analyticsSection;
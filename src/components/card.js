const Card = {
    view: ({ attrs: { title, sub, svg, svgclass = "bottom-[-30px]", onclick } }) => {
        return m(".card.rounded-xl.overflow-hidden.p-6.bg-secondary.duration-200.hover:scale-105.select-none.z-50.h-32.inline-block.active:scale-100.active:ease-in-out.active:duration-100[role=button]", { onclick }, [
            m("div.relative.z-10.w-full.h-full",
                m(".pb-14.sm:pr-16.md:pb-0.md:pr-26.pr-0",
                    [
                        m("h5.font-semibold.mt-0.text-lg.md:text-2xl.mb-2.break-words", title),
                        m("span.inline-block.mt-0.text-base.leading-6.font-normal.mb-0.text-gray-400.max-md:!text-sm.hidden.lg:block", sub)
                    ]
                )
            ),
            svg != null ? m(svg, {
                className: "absolute right-0 " + svgclass + " z-0 w-36 h-36 masx-h-[140px] masx-w-[140px]"
                // className: "absolute right-0 " + svgclass + " z-0 max-h-[130px] max-w-[130px] !max-w-[85px] !max-h-[85px] md:!max-h-[130px] md:!max-w-[130px]"
            }) : null
        ])
    }
}

export default Card;
const Spinner = {
    view:()=>{
        return m(".mr-2",
            m("div[role=status]", {
                class: "inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            },
                m("span", {
                    class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                }, "Loading")
            )
        )
    }
}

export default Spinner;
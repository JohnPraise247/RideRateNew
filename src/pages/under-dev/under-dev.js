const UnderDev = {
  view:()=>{
    return m(".main",
    m("section", 
      m(".container.py-5", [
        m(".space-50"),
        m(".space-50"),
        m(".space-50"),
        // m("iframe[src='https://embed.lottiefiles.com/animation/10531']"),
        m("div.wrap-icon[style='color:#898989;font-size:55px']", m("i.bx.bx-wrench")),
        m("h3.text-center.text-muted", "This page is under development"),
        m(".space-50"),
        m(".space-50"),
        m(".space-50"),
        m(".space-50")
      ])
    )
   )
  }
}

export default UnderDev;
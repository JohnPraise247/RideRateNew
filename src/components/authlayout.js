import { SVGSignup, SVGLogin } from "./svg"


export const AuthLink = {
    view: ({ attrs: { textA, textB, url, className = "text-center"}})=>{
        return m(".text-xs", {
            class: className
        }, [
            textB,
            m("a.text-primary.inline-block.hover:text-primary.hover:underline.hover:cursor-pointer.transition.duration-200",{
                href: url
            }, 
              textA
            )
        ])
    }
}

export const AuthLayout = {
    view: ({ state: { url = m.route.get(), usertype = m.route.get().slice(1, 6) }, attrs: { step, title, subtitle, children }}) =>{
        return m(".grid.md:grid-cols-2.grid-cols-1.bg-base-100.min-h-screen",
            [
                m(".px-10.bg-primary.justify-center.flex.flex-col.text-center.md:px-16.lg:px-28", [//.items-center
                    m(".flex.items-center.justify-center.mb-3.md:mb-6.mt-3", [
                        m("img.w-8.h-8.md:w-12.md:h-12[src=images/logo_white.png][alt=logo]"),
                        m(".text-2xl.font-bold.text-white.md:text-3xl", "RideRate")
                    ]), 
                    url != "/forgot-pwd" && usertype !== "admin" ? ( 
                      m(".flex.justify-center", 
                        m((url == "/login" ? SVGLogin : SVGSignup ), { 
                            className: "md:flex w-36 h-36 hidden bg-white p-3 rounded-xl mb-5 align-center justify-center" 
                        })
                      )) : null ,//md:h-96
                    title != null ? m("h2.text-sm.font-bold.text-white.md:text-md.md:text-lg", title) : null,
                    subtitle != null ? m("p.text-md.text-gray-100.hidden.md:block", subtitle) : null
                 ]
                ),
                m(".px-10.bg-base-100.flex.justify-center.flex-col.md:py-0.md:px-16.lg:px-28", {
                    class: url == "/signup" || url == "/login" ? "" : "py-24"
                },[//.py-24
                    m("h2.text-2xl.font-bold.text-center" + (url == "/forgot-pwd" ? ".mb-4" : url == "/signup" && step == 3 ? "": ".mb-8"), (
                        url.includes("/login") ? "Log in" 
                        : url == "/signup" ? (step == 3 ? "Accounted created" : step == 2 ? "Sign up" : "Create  account as" )
                        : url == "/forgot-pwd" ? "Forgot Password" 
                        : url.includes("/admin") ? "Admin login" 
                        : "???"
                     )),
                    url == "/signup" ? (step == 3 ? m("p.text-md.text-gray-600.mb-8.text-center", "Check your email, to activate your account") : null )
                    : url == "/forgot-pwd" ? m("p.text-xs.text-gray-600.mb-8.text-center", "We will send password reset link on your email Id") : null,//Enter your email below and we will send you instructions to reset your password.
                    m("form", {
                        onsubmit: (e) => { e.preventDefault(); /* submitForm(e) */ }
                    },
                        children
                    )
                ])
            ]
        )
    }
}
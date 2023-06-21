import { Button } from "./button"
import { SVGChevronDown, SVGChevronRight, SVGMenu } from "./svg";

 const NavBar = {
    view:()=>{
         return m("div.navbar.bg-base-100.px-2",
             [
                 m("div.navbar-start",
                     [
                         m("div.dropdown",
                             [
                                 m("label.btn.btn-ghost.lg:hidden[tabindex='0']",
                                     m(SVGMenu)
                                 ),
                                 m("ul.menu.menu-compact.dropdown-content.mt-3.p-2.shadow.bg-base-100.rounded-box.w-52[tabindex='0']",
                                     [
                                         m("li[tabindex='0']",
                                             [
                                                 m("a.justify-between[href=#/]",
                                                     [
                                                         " Partner with us ",
                                                         m(SVGChevronRight)
                                                     ]
                                                 ),
                                                 m("ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-36",
                                                     [
                                                         m("li",
                                                             m("a[href=#/]", "Contributor")
                                                         ),
                                                         m("li",
                                                             m("a[href=#/]", "Consumer")
                                                         )
                                                     ]
                                                 )
                                             ]
                                         ),
                                         m("li[tabindex='0']",
                                             [
                                                 m("a.justify-between[href=#/]",
                                                     [
                                                         " Company ",
                                                         m(SVGChevronRight)
                                                     ]
                                                 ),
                                                 m("ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-36",
                                                     [
                                                         m("li", m("a[href=#/]", "About")),
                                                         m("li", m("a[href=#/]", "Blog"))
                                                     ]
                                                 )
                                             ]
                                         ),
                                         m("li", m("a[href=#/]", "Support"))
                                     ]
                                 )
                             ]
                         ),
                         m("a.flex-0.btn.btn-ghost.px-2[href='/'][aria-current='page'][aria-label='Homepage']",
                             m("div.font-title.text-primary.inline-flex.text-lg.transition-all.duration-200.md:text-3xl",
                                 [
                                     m("span.capitalize", "Ride"),
                                     m("span.text-base-content.capitalize", "Rate")
                                 ]
                             )
                         )
                     ]
                 ),
                 m("div.navbar-center.hidden.lg:flex",
                     m("ul.menu.menu-horizontal.px-1",
                         [
                             m("li[tabindex='0']",
                                 [
                                     m("a.justify-between[href=#/]",
                                         [
                                             " Partner with us ",
                                             m(SVGChevronDown)
                                         ]
                                     ),
                                     m("ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-44",
                                         [
                                             m("li",
                                                 m("a[href=#/]", "Contributor")
                                             ),
                                             m("li",
                                                 m("a[href=#/]", "Consumer")
                                             )
                                         ]
                                     )
                                 ]
                             ),
                             m("li[tabindex='0']",
                                 [
                                     m("a.justify-between[href=#/]",
                                         [
                                             " Company ",
                                             m(SVGChevronDown)
                                         ]
                                     ),
                                     m("ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-32",
                                         [
                                             m("li", m("a[href=#/]", "About")),
                                             m("li", m("a[href=#/]", "Blog"))
                                         ]
                                     )
                                 ]
                             ),
                             m("li", m("a[href=#/]", "Support"))
                         ]
                     )
                 ),
                 m("div.navbar-end", [
                     // m(ButtonMode),
                     m(Button, {
                         label: "Sign up",
                         type: "a[href=#/signup]",
                         className: ".btn-primary.font-bold.capitalize.text-white",
                     })
                 ]
                 )
             ]
         )
         
         //DAsyui 3.1.0 is problematic. using 2.52.0

         /*m("div.navbar.bg-base-100",
             [
                 m("div.navbar-start",
                     [
                         m("div.dropdown",
                             [
                                 m("label.btn.btn-ghost.lg:hidden[tabindex='0']",
                                     m(SVGMenu)
                                 ),
                                 m("ul.menu.menu-sm.dropdown-content.mt-3.p-2.shadow.bg-base-100.rounded-box.w-52.z-50[tabindex='0']",
                                     [
                                         m("li",
                                             [
                                                 m("a", " Partner with us "),
                                                 m("ul.p-2",
                                                     [
                                                         m("li",
                                                             m("a", "Contributor")
                                                         ),
                                                         m("li",
                                                             m("a", "Consumer")
                                                         )
                                                     ]
                                                 )
                                             ]
                                         ),
                                         m("li",
                                             [
                                                 m("a", " Company "),
                                                 m("ul.p-2",
                                                     [
                                                         m("li", m("a", "About")),
                                                         m("li", m("a", "Blog"))
                                                     ]
                                                 )
                                             ]
                                         ),
                                         m("li", m("a", "Support"))
                                     ]
                                 )
                             ]
                         ),
                         m("a.flex-0.btn.btn-ghost.px-2[href='/'][aria-current='page'][aria-label='Homepage']",
                             m("div.font-title.text-primary.inline-flex.text-lg.transition-all.duration-200.md:text-3xl",
                                 [
                                     m("span.capitalize", "Ride"),
                                     m("span.text-base-content.capitalize", "Rate")
                                 ]
                             )
                         )
                     ]
                 ),
                 m("div.navbar-center.hidden.lg:flex",
                     m("ul.menu.menu-horizontal.px-1",
                         [
                             m("li[tabindex='0']",
                                 m("details",
                                     [
                                         m("summary", "Partner with us"),
                                         m("ul.p-2",
                                             [
                                                 m("li", m("a", "Contributor" ) ),
                                                 m("li", m("a", "Consumer" ) )
                                             ]
                                         )
                                     ]
                                 )
                             ),
                             m("li[tabindex='0']",
                                 m("details",
                                     [
                                         m("summary", "Company"),
                                         m("ul.p-2",
                                             [
                                                 m("li", m("a", "About" ) ),
                                                 m("li", m("a", "Blog" ) )
                                             ]
                                         )
                                     ]
                                 )
                             ),
                             m("li", m("a", "Support" ) )
                         ]
                     )
                 ),
                 m("div.navbar-end",
                     m("a.btn",
                         "Button"
                     )
                 )
             ]
         )

         */
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
}

export default NavBar;
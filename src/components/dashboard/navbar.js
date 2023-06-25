import { isAdmin } from "../../app/model";
import { ButtonAvatar, ButtonIcon } from "../button"
import TextInput from "../input";
import { SVGMenu2, SVGNotif, SVGSearch } from "../svg"

const NavBar = {
    // oninit:(vnode)=>{
    //     vnode.state.value = ""
    // },
    view: ({ state: { hash = m.route.param("urlA") || "dashboard", title = hash.charAt(0).toUpperCase() + hash.slice(1) }})=>{
        var val = ""
        return m(".navbar.bg-base-100.z-10.shadow-sm.sticky.top-0", [//.flex.justify-between
                m(".flex-1", [
                    m("label.btn.btn-primary.text-white.drawer-button.lg:hidden[for='left-sidebar-drawer']",
                        m(SVGMenu2, { className: "h-5 inline-block w-5" })
                    ),
                    // m(ButtonIcon, {
                    //     svg: SVGSearch
                    // }),
                    m(SVGSearch, { className: "mx-3 w-5 h-5"}),
                    m(TextInput, {
                        id: "searchInput",
                        type: "text",
                        value: val,
                        // classNameMain:"mr-8",
                        className: "input-sm input-ghost  sm:max-w-xs md:max-w-full",//hidden
                        placeholder: "Type to search",
                        oninput: (e) => val = e.target.value
                    }),
                    // m("h1.text-xl.font-semibold.ml-2.md:text-2xl",
                    //     hash == "dashboard" || hash == "locations" || hash == "rates" || hash == "settings" || (hash == "users" && isAdmin()) || (hash == "analytics" && isAdmin()) ? title
                    //         : "Page not found"
                    // )
                ]),
                m(".flex-none",
                    [
                        m(ButtonIcon, {
                            svg: SVGNotif,
                            indicator: 15,
                            className: "ml-8",
                            onclick: () => console.log("Pressed Notification")
                        }),
                        m(ButtonIcon, {
                            svg: SVGSearch,
                            className: "sm:hidden md:hidden",
                            onclick: () => console.log("Pressed Search")
                        }),
                        m(ButtonAvatar, {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+VBMVEXX19XY2NXY2NbY2NfZ2dXZ2dbZ2dfa2tba2tfa2tja2tnb29jb29nc3Nrc3Nvd3drd3dvd3dze3tve3tze3t3f39zf393g4N/h4d/h4eDi4uDi4uHk5OHk5OLk5OPl5eLl5eTm5uPm5uTm5uXn5+Xn5+bo6Obo6Ofp6ebp6efp6ejq6ufq6unq6urr6+rs7Ovu7uvu7u3v7+7w8O/x8fDx8fHy8vHz8/Lz8/P09PP09PT09PX19fT19fX29vb39/b39/j5+fj5+fn6+vn6+vr7+/r7+/v7+/z8/Pv8/Pz8/P39/fz9/f39/f7+/v3+/v7+/v////3///9ndqfOAAACUklEQVRYw+3W4XfSMBAA8Czas3GNxN7AIcrQiuA2YcAUUZy6DdxcJ/T+/z/GD8UNSrJdy3t+8j718Zofl0uanKANQ/wH7gbiNIoCsfWRDcQzorPBQRQdDM4KZvBxFwCUAoBnH9xJOIGrmgwMIiJiqOSLS0ryAAlNQlgMR0Q0EE7zZTAvK1wJVZ7nApoSMyGbfCCmbw9MFjBwkiODho9r4e9xgZimyqwDRk3ZQF+gJaBvW0rrFOrKBqg6twbzUNsAHXKBc2sCiHBu2dDCUoKxtANyzAQGD23DQ4QBE+iCFdiRXRZAdGgH0DtkAvu+vQb+PhNouoAmE2i7gDZ3Co4aAHcK7x2r4HWYy3jkWsbev9pII9dWHjFr8B0cH9MPJnCxbWzjjfrFBMhseB7Qc/uJVGWfiS1rFaHFBk6k7VSWJ/x7YW9dCCX7XqCEflc9k/3/6izX9f42WAW2W7lu5zi7lNq4WgxXf/Aze71PcmYw9FYBb+hoUezAjBrZDBrELmKcEJ1mPwcDp0T3Xq63XWVt7VhUtew7GeDm54tR5+WTYL1DCUyt83l683ayCqSjJ+NeVFZbnrJ/jQqkqkS98WS5e/2bwdVxe1f70lP6Kd4RWj3yJOhq+/hyQSyAzuMtCDQyYgcRdQAy6CxnUBcGeRGGYfpQEq9ugT57/HJVRZ/iFLguaSwQupRmENORwEIhuhSTIKKKLgboChEJd0t0f8gxJSKmN35RwI+IRNESpmW8JkHDwjNAlJ9I0GtVHFARiZk2xQFdmomvG8wAUX4RLdgEgHd/ACERYcCSvguWAAAAAElFTkSuQmCC"
                            // src: "https://avatars.abstractapi.com/v1/?api_key=e715de52b8e44b1d9ad9d4e53ec2111f&image_size=64&font_size=0.6&name="+ Auth.username
                            // src: "https://placeimg.com/80/80/people"
                        })
                    ]
                )
            ]
        )
        
        /*m(".navbar.flex.justify-between.bg-base-100.z-10.shadow-md",//.sticky.top-0
            m("div",
                [
                    m("label.btn.btn-primary.text-white.drawer-button.lg:hidden[for='left-sidebar-drawer']",
                        m(SVGMenu2, { className: "h-5 inline-block w-5" })
                    ),
                    m("h1.text-xl.font-semibold.ml-2.md:text-2xl",
                        hash == "dashboard" || hash == "locations" || hash == "rates" || hash == "settings" || (hash == "users" && isAdmin()) || (hash == "analytics" && isAdmin()) ? title
                            : "Page not found"
                    )
                ]
            ),
            m("div.order-last",
                [
                    m(ButtonIcon, {
                        svg: SVGNotif,
                        indicator: 15,
                        onclick: () => console.log("Pressed Notification")
                    }),
                    m(ButtonIcon, {
                        svg: SVGSearch,
                        onclick: () => console.log("Pressed Search")
                    }),
                    // m(ButtonMode),
                    m(ButtonAvatar, {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+VBMVEXX19XY2NXY2NbY2NfZ2dXZ2dbZ2dfa2tba2tfa2tja2tnb29jb29nc3Nrc3Nvd3drd3dvd3dze3tve3tze3t3f39zf393g4N/h4d/h4eDi4uDi4uHk5OHk5OLk5OPl5eLl5eTm5uPm5uTm5uXn5+Xn5+bo6Obo6Ofp6ebp6efp6ejq6ufq6unq6urr6+rs7Ovu7uvu7u3v7+7w8O/x8fDx8fHy8vHz8/Lz8/P09PP09PT09PX19fT19fX29vb39/b39/j5+fj5+fn6+vn6+vr7+/r7+/v7+/z8/Pv8/Pz8/P39/fz9/f39/f7+/v3+/v7+/v////3///9ndqfOAAACUklEQVRYw+3W4XfSMBAA8Czas3GNxN7AIcrQiuA2YcAUUZy6DdxcJ/T+/z/GD8UNSrJdy3t+8j718Zofl0uanKANQ/wH7gbiNIoCsfWRDcQzorPBQRQdDM4KZvBxFwCUAoBnH9xJOIGrmgwMIiJiqOSLS0ryAAlNQlgMR0Q0EE7zZTAvK1wJVZ7nApoSMyGbfCCmbw9MFjBwkiODho9r4e9xgZimyqwDRk3ZQF+gJaBvW0rrFOrKBqg6twbzUNsAHXKBc2sCiHBu2dDCUoKxtANyzAQGD23DQ4QBE+iCFdiRXRZAdGgH0DtkAvu+vQb+PhNouoAmE2i7gDZ3Co4aAHcK7x2r4HWYy3jkWsbev9pII9dWHjFr8B0cH9MPJnCxbWzjjfrFBMhseB7Qc/uJVGWfiS1rFaHFBk6k7VSWJ/x7YW9dCCX7XqCEflc9k/3/6izX9f42WAW2W7lu5zi7lNq4WgxXf/Aze71PcmYw9FYBb+hoUezAjBrZDBrELmKcEJ1mPwcDp0T3Xq63XWVt7VhUtew7GeDm54tR5+WTYL1DCUyt83l683ayCqSjJ+NeVFZbnrJ/jQqkqkS98WS5e/2bwdVxe1f70lP6Kd4RWj3yJOhq+/hyQSyAzuMtCDQyYgcRdQAy6CxnUBcGeRGGYfpQEq9ugT57/HJVRZ/iFLguaSwQupRmENORwEIhuhSTIKKKLgboChEJd0t0f8gxJSKmN35RwI+IRNESpmW8JkHDwjNAlJ9I0GtVHFARiZk2xQFdmomvG8wAUX4RLdgEgHd/ACERYcCSvguWAAAAAElFTkSuQmCC"
                        // src: "https://avatars.abstractapi.com/v1/?api_key=e715de52b8e44b1d9ad9d4e53ec2111f&image_size=64&font_size=0.6&name="+ Auth.username
                        // src: "https://placeimg.com/80/80/people"
                    })
                ]
            )
        )*/
    }
}
//section
/* w-80 md:w-96  right-0 absolute bg-base-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform   translate-x-0  */

export default NavBar;
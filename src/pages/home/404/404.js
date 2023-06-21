import { Button } from "../../../components/button";
import { error404 } from "../../../components/svg";

const Error404 = {
    view: ({ state: { usertype = m.route.get().slice(1, 6) } }) =>{
        return [
            usertype == "admin" || m.route.get().slice(1, 2) == "u"? (
            m(".items-center.flex.flex-col",[
                m(error404, { className: "w-72 h-72 pr-1" }),
                m(Button, {
                    label: "Goto dashboard",
                    className: ".btn-primary.btn-sm.capitalize.font-bold.text-white",
                    onclick: () => m.route.set("/" + (usertype == "admin" ? usertype : "u") + "/dashboard")
                })
            ])) : m(".text-center", [
                m("h1.text-5xl.font-bold.mt-24", "Error 404"),
                m("h4.text-2xl", "Page not found")
            ])
        ]   
    }
}

export default Error404;
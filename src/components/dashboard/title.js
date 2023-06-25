import { locations } from "../../app/data";
import { Model, getUsertype, isAdmin} from "../../app/model";
import Select from "./select";

const Title = {
    view: ({ state: { hash = m.route.param("urlA") || "dashboard", title = hash.charAt(0).toUpperCase() + hash.slice(1) } }) => {
        var url = ["dashboard", m.route.param("urlA")];

        return m(".flex.items-center", [
            m("h1.text-xl.font-semibold.md:text-2xl", title),
            locations.data.length > 0 ? m(Select, {
                className: "select-sm ml-auto",
                options: isAdmin() ? Model.modeAdminList : Model.modeList,//"edit"
                oncreate: () => {
                    m.route.set(getUsertype() + "/" + m.route.param("urlA"), {
                        mode: (
                            Model.modeSelect == 0
                                ? Model.modeList[0]
                                : isAdmin() && Model.modeSelect == 1 ? Model.modeList[1]
                                    : isAdmin() && Model.modeSelect == 2 ? Model.modeList[2]
                                        : Model.modeList[1]
                        )
                    }, { replace: true })
                },
                onchange: (e) => {
                    m.route.set(getUsertype() + "/" + m.route.param("urlA"), { mode: e.target.value.toLowerCase() })
                    e.target.value == Model.modeList[0].charAt(0).toUpperCase() + Model.modeList[0].slice(1)
                        ? Model.modeSelect = 0
                        : e.target.value == Model.modeList[1].charAt(0).toUpperCase() + Model.modeList[1].slice(1) ? Model.modeSelect = 1
                            : Model.modeSelect = 2
                }
            }) : null
        ])
    }
}

export default Title;
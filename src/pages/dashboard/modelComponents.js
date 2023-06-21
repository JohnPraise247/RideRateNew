import { Model } from "../../model";
import { iconHover, rateListGroup } from "./components";

export const ModelDashboardComponent = {
  view:({state:{ url, usertype, model, selected }})=>{
    url = m.route.param("urlA");
    usertype = m.route.get().slice(1, 6);
    m.route.param("selected") != null ? selected = m.route.param("selected").toLowerCase() : selected = m.route.param("selected")


    let ls = JSON.parse(localStorage.getItem("rr_data"));

    // usertype != "admin" ? title = "Your Entry was approved by the Admin"
    //   : usertype != "admin"

    // url == "rates" ? prop = ["price1", "location"]
    // : url == "location" ? prop = ["price1", "location"]
    // : url == "ve" ? prop = ["price1", "location"]

    // title = "jyjg"
    // var prop = ["price1", "location"]

    return Model[url].data.map((e) => {
      return selected == "all" || selected === null || selected == "" ? m(Components,{e, usertype, ls, model})
        :selected == "approved" && e.status == "approved" ? m(Components,{e, usertype, ls, model})
        :selected == "pending" && e.status == "pending" ? m(Components,{e, usertype, ls, model})
        :selected == "rejected" && e.status == "rejected" ? m(Components,{e, usertype, ls, model})
        : null
    })
  }
}

const Components = {
  view:({attrs:{e, usertype, ls, model}})=>{
     return m(".list-group-item.d-flex.justify-content-center.align-items-center", [
       m(rateListGroup, {
       data: e,
       type: e.status,
       // title,
       click: [e.id, null, e.status]
     }),
       usertype != "admin" ? (
      //  Model.mode == "edit" || usertype != "admin" ? (
         m(iconHover, {
           click1: () => {
             Model.edit(e.id, "delete", e.status)
           },
           click2: () => {
             Model.edit(e.id, null, e.status)
           }
         })
       ) : (
         m(iconHover, {
           type: e.status,
           click1: () => Model.approveEntry(model, ls),
           click2: () => Model.rejectEntry(model, ls),
          //  click3: () => Model.edit(e.id, null, e.status)
         })
       )])
  }
}


// export const ModelDashboardComponent = {
//   view:({attrs:{ name, model, modeltype, type, title, prop },state:{url}})=>{
//     url = m.route.get().slice(1, 6);
//     let old = JSON.parse(localStorage.getItem(name));

//     return modeltype.map((i) => {
//       return m("a.list-group-item.d-flex.justify-content-center.align-items-center", [
//         m(rateListGroup, {
//           index: i,
//           type,
//           title,
//           click: [i[prop[0]], i[prop[1]], null, type.toLowerCase()]
//         }),
//         Model.mode == "edit" || url != "admin" ? (
//           m(iconHover, {
//             click1: () => {
//               Model.edit(i[prop[0]], i[prop[1]], "delete", type.toLowerCase())
//             },
//             click2: () => {
//               Model.edit(i[prop[0]], i[prop[1]], null, type.toLowerCase())
//             }
//           })
//         ) : (
//           m(iconHover, { 
//             type: type.toLowerCase(),
//             click1: ()=> Model.approveEntry(model, old), 
//             click2: ()=> Model.rejectEntry(model, old),
//             click3: ()=> Model.edit(i[prop[0]], i[prop[1]], null, type.toLowerCase()) 
//           })
//         )
//       ])
//     })
//   }
// }
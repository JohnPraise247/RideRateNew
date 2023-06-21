import { Model, getIndexByID } from '../../../model';
import { addDanger } from '../../../notification';
import { dButton, Panel, Status } from '../components';


export const rateValidate = {
  oninit: (vnode) => {
    vnode.state.url = m.route.param("urlA");
    vnode.state.usertype = m.route.get().slice(1, 6);
    vnode.state.path = (vnode.state.usertype == "admin" ? "/admin" : "/u")
    vnode.state.ls = JSON.parse(localStorage.getItem(Model.localStorage.name));
    vnode.state.obj = Model[vnode.state.url].data[getIndexByID(vnode.state.ls.id, Model[vnode.state.url].data)];
    vnode.state.ls == null ? (m.route.set(vnode.state.path + "/rates"), addDanger("Unknown error")) : Model.data.status = vnode.state.ls.status
  },
  view: ({state:{ ls, obj }}) => {
    return [
      m("h5", m("span", "Set Validation for")),
      m(Panel,{children:[
        m("p", "Location: ", m("b", (ls != null ? (obj.location) : ""))),
        m("p", "Prices: ", m("b", (ls != null ? (obj.price2 != "" ? "₦" + obj.price1 + " - ₦" + obj.price2 : "₦" + obj.price1) : ""))),
        m("p", "Description: "),
        m(Status)
      ]}),
      m(dButton, { 
        click1: () => {
          Model.approveEntry(ls.id)
        },
        click2:()=>{
          Model.rejectEntry(ls.id)
        },
        disabled1: Model.data.status == "approved" || Model.data.status == "pending"? true : false,
        disabled2: Model.data.status == "rejected" || Model.data.status == "pending"? true : false,
       }
      )
    ]
  }
}
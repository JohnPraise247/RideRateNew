import { Model, getIndexByID } from '../../../model';
import { dButton, Panel } from '../components';
import { addDanger } from '../../../notification';


export const rateDelete = {
  // view:({state:{error, btnDisabled}})=>{//doesnt work
  oninit:(vnode)=>{
    vnode.state.url = m.route.param("urlA");
    vnode.state.usertype = m.route.get().slice(1, 6);
    vnode.state.path = (vnode.state.usertype == "admin" ? "/admin" : "/u")
    vnode.state.ls = JSON.parse(localStorage.getItem(Model.localStorage.name));
    vnode.state.obj = Model[vnode.state.url].data[getIndexByID(vnode.state.ls.id, Model[vnode.state.url].data)];
    vnode.state.btndisabled = !false;
    vnode.state.ls == null ? (m.route.set(vnode.state.path + "/rates"), addDanger("Unknown error")) : null
  },
  view:({state:{ls, obj, btndisabled}})=>{
    return [
      m("h5", m("span", "Delete "), m(Title, { ls, obj })),
      m(Panel,{
        text: "Are you sure you want to delete this entry?"
      }),
    	m(dButton,{
        name: "Delete", 
        icon: Model.icon.trash, 
        class: ".btn-danger", 
        disabled: btndisabled, 
        click:()=>{
          Model.deleteEntry(ls.id)
        }
      })
    ]
  }
}

const Title = {
  view:({attrs:{ls, obj}})=>{
    return m("span.text-danger", (ls != null ? (obj.price2 != "" ? "₦" + obj.price1 + " - ₦" + obj.price2 : "₦" + obj.price1) : "rate entry"))
  }
}
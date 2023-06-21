import { Model } from '../../../model';
import { dButton, Panel } from '../components';
import { addSuccess } from '../../../notification';


export const vehicleDelete = {
  view:(vnode)=>{
    vnode.state.btnDisabled = !false;
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"
  	let old = JSON.parse(localStorage.getItem("vehicles"));
  	if(old == null) m.route.set(path+"/vehicles");

    return [
    	m("h5", m("span","Delete "),m("span.text-danger", (old!= null?old.name: "vehicle entry"))),
      m(Panel, {
        text: "Are you sure you want to delete this entry?"
      }),
    	m(dButton,{name: "Delete", icon: Model.icon.trash, class:".btn-danger", disabled: vnode.state.btnDisabled, click:()=>{
    		let temp = []
            Model.vehicles.list.forEach((e)=>{
              if(e.name == old.name && e.park == old.park){
              	//Omit existing
              }else{
              	temp.push({
                  name: e.name, 
                  park: e.park
                })
              }
            });
            Model.vehicles.list = temp;
            m.route.set(path + "/vehicles", null, {replace:true});
            addSuccess('Deleted successfully');
            }}
          )
    ]
  }
}
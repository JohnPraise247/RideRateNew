import { Model } from '../../../model';
import { dButton, Panel } from '../components';
import { addSuccess } from '../../../notification';


export const locationDelete = {
  view:(vnode)=>{
    vnode.state.btnDisabled = !false;
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"
  	let old = JSON.parse(localStorage.getItem("location"));
  	if(old == null) m.route.set(path+"/location");

    return [
    	m("h5", m("span","Delete "),m("span.text-danger", (old!= null?old.from+" to "+old.to: "location entry"))),
      m(Panel, {
        text: "Are you sure you want to delete this entry?"
      }),
    	m(dButton,{name: "Delete", icon: Model.icon.trash, class:".btn-danger", disabled: vnode.state.btnDisabled, click:()=>{
    		let temp = []
            Model.locations.list.forEach((e)=>{
              if(e.from == old.from && e.to == old.to){
              	//Omit existing
              }else{
              	temp.push({
                  from: e.from, 
                  to: e.to, 
                  desc: e.desc
                })
              }
            });
            Model.locations.list = temp;
            m.route.set(path+"/location", null, {replace:true});
            addSuccess('Deleted successfully');
            }}
          )
    ]
  }
}
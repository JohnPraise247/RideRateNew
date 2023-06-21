import { Model } from '../../../model';
import { dButton, Panel } from '../components';
import { addSuccess } from '../../../notification';


export const parkDelete = {
  view:(vnode)=>{
    vnode.state.btnDisabled = !false;
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"
  	let old = JSON.parse(localStorage.getItem("parks"));
  	if(old == null) m.route.set(path+"/parks");

    return [
    	m("h5", m("span","Delete "),m("span.text-danger", (old!= null?old.parkname: "park entry"))),
      m(Panel, {
        text: "Are you sure you want to delete this entry?"
      }),
    	m(dButton,{name: "Delete", icon: Model.icon.trash, class:".btn-danger", disabled: vnode.state.btnDisabled, click:()=>{
    		let temp = []
            Model.parks.list.forEach((e)=>{
              if(e.parkname == old.parkname){
              	//Omit existing
              }else{
              	temp.push({
                  parkname: e.parkname, 
                  location: e.location, 
                  desc: e.desc
                })
              }
            });
            Model.parks.list = temp;
            m.route.set(path+ "/parks", null, {replace:true});
            addSuccess('Deleted successfully');
            }}
          )
    ]
  }
}
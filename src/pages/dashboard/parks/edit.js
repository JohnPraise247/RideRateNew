import $ from "jquery";
import { Model } from '../../../model';
import { dInput, dTextarea, dButton, dUpload, dHead } from '../components';
import { addSuccess, addDanger } from '../../../notification';


//Add Park entry view
export const parkForm = {
  oncreate:(vnode)=>{
    vnode.state.btnDisabled = ($("#parkInput1").val().trim() !== "" && $("#parkInput2").val().trim() !== "")
    m.redraw()
  },
  onupdate:(vnode)=>{
    vnode.state.btnDisabled = ($("#parkInput1").val().trim() !== "" && $("#parkInput2").val().trim() !== "")
  },
  view:(vnode)=>{
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"

    return [
      m(dHead, {title: m.route.param("urlB").charAt(0).toLocaleUpperCase() + m.route.param("urlB").slice(1) + " Park Entry"}),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{ id:"parkInput1",placeholder:"Park name",label:"Name of park *", value: m.route.param("parkname"), 
                oninput:(e)=>{
                  m.route.set(path + "/parks/"+m.route.param("urlB"),{parkname: e.target.value, location: $("#parkInput2").val()}, {replace : true})
                }})),
              m(".col-sm-6",m(dInput,{ id:"parkInput2",placeholder:"",label:"Location *", value: m.route.param("location"), 
                oninput:(e)=>{
                  m.route.set(path + "/parks/"+m.route.param("urlB"),{parkname: $("#parkInput1").val(), location: e.target.value}, {replace : true})
                }}))
            ]),
            m(dUpload,{id:"parkImageUpload",label:"Park image"}),
            m(dTextarea,{id:"parkDescTA",placeholder:". . .",label:"Description"}),
            m(dButton,{id: 0, name: m.route.param("urlB") == "new"?"Create park":"Edit park", icon: Model.icon.park, disabled: vnode.state.btnDisabled, click:()=>{

            if($("#parkInput1").val().trim().length > 0 && $("#parkInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.parks.list.push({
                      parkname: $("#parkInput1").val(), 
                      location: $("#parkInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set(path+"/parks", null)    
                    addSuccess('Park has been created');
              }else{
                  let temp = []
                  let parkname = $("#parkInput1").val();
                  let location = $("#parkInput2").val();
                  let old = JSON.parse(localStorage.getItem("parks"));

                  if(old == null){
                    m.route.set(path+"/parks");
                    addDanger('Failed to edit park, try again');
                  }else{
                    Model.parks.list.forEach((e)=>{
                      if(e.parkname == old.parkname && e.location == old.location){
                        temp.push({
                          parkname: parkname, 
                          location: location, 
                          desc: e.desc
                        })
                      }else{
                        temp.push({
                          parkname: e.parkname, 
                          location: e.location, 
                          desc: e.desc
                        })
                      }
                    })
                    Model.parks.list = temp
                    m.route.set(path+"/parks")   
                    addSuccess('Edited successfully');  
                  }
              }
             }
            }}
          )                    
        ])
      ) 
    ]
  }
}

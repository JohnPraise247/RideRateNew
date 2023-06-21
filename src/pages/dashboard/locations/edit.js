import $ from "jquery";
import { Model } from '../../../model';
import { dInput, dTextarea, dButton, dHead } from '../components';
import { addSuccess, addDanger } from '../../../notification';


//Add Location entry view
export const locationForm = {
  oncreate:(vnode)=>{
    vnode.state.btnDisabled = ($("#locationInput1").val().trim() !== "" && $("#locationInput2").val().trim() !== "")
    m.redraw()
    //when back is pressed
  },
  onupdate:(vnode)=>{
    vnode.state.btnDisabled = ($("#locationInput1").val().trim() !== "" && $("#locationInput2").val().trim() !== "")
  },
  view:(vnode)=>{
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"
    return [
      m(dHead, {title: m.route.param("urlB").charAt(0).toLocaleUpperCase() + m.route.param("urlB").slice(1) + " Location Entry"}),
      // m(dHead, {title: m.route.param("urlB") == "new"?"New Location Entry":m.route.param("urlB") == "new"?"Delete Entry":"Edit Location Entry"}),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{ id:"locationInput1",placeholder:"From",label:"Location *", value: m.route.param("from"), 
                oninput:(e)=>{
                  // window.history.pushState(null,null,"/#/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  m.route.set(path+"/location/"+m.route.param("urlB"),{from: e.target.value, to: $("#locationInput2").val()}, {replace : true})
                  // m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  // m.redraw()
                  // m.route.param("urlB") == "edit"?m.route.set("/u/location/edit?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :m.route.param("urlB") == "new"?m.route.set("/u/location/new?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :""
                }})),
              m(".col-sm-6",m(dInput,{ id:"locationInput2",placeholder:"To",label:"Destination *", value: m.route.param("to"), 
                oninput:(e)=>{
                  m.route.set(path+"/location/"+m.route.param("urlB"),{from: $("#locationInput1").val(), to: e.target.value}, {replace : true})
                  // m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI($("#locationInput1").val())+"&to="+encodeURI(e.target.value))
                  // m.redraw()
                }}))
            ]),
            // m(dUpload,{id:"locationImageUpload",label:"Location image"}),
            m(dTextarea,{id:"locationDescTA",placeholder:". . .",label:"Description"}),
            m(dButton,{id: 0, name: m.route.param("urlB") == "new"?"Create location":"Edit location", icon: Model.icon.location, disabled: vnode.state.btnDisabled,click:()=>{

            if($("#locationInput1").val().trim().length > 0 && $("#locationInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.locations.list.push({
                      from: $("#locationInput1").val(), 
                      to: $("#locationInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set(path+"/location", null);
                    addSuccess('Location has been created');
                    /*window.location.assign('/#/u/location')*/     
              }else{
                  let temp = []
                  let from = $("#locationInput1").val();
                  let to = $("#locationInput2").val();
                  let old = JSON.parse(localStorage.getItem("location"));

                  if(old == null){
                    m.route.set(path+"/location");
                    addDanger('Failed to edit location, try again');
                    // addDanger('Location selection is Invalid');
                  }else{
                     Model.locations.list.forEach((e)=>{
                      if(e.from == old.from && e.to == old.to){
                        temp.push({
                          from: from, 
                          to: to, 
                          desc: e.desc
                        })
                      }else{
                        temp.push({
                          from: e.from, 
                          to: e.to, 
                          desc: e.desc
                        })
                      }
                    })
                    Model.locations.list = temp
                    m.route.set(path+"/location");
                    addSuccess('Edited successfully');
                  }
                    // window.location.assign('/#/u/location')
                    // m.redraw()           
              }
             }
            }
           }
          )                    
        ])
      ) 
    ]
  }
}
import $ from "jquery";
import { Model } from '../../../model';
import { dInput, dSelect, dUpload, dButton, dHead } from '../components';
import { addSuccess, addDanger } from '../../../notification';


//Add Vehicles entry view
export const vehicleForm = {
  oncreate:(vnode)=>{
    vnode.state.btnDisabled = ($("#vehicleName").val().trim() !== "" && $("#parkLocation").val() !== "")
    m.redraw()
  },
  onupdate:(vnode)=>{
    vnode.state.btnDisabled = ($("#vehicleName").val().trim() !== "" && $("#parkLocation").val() !== "")
  },
  view:(vnode)=>{
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"

    return [
      m(dHead, {title: m.route.param("urlB").charAt(0).toLocaleUpperCase() + m.route.param("urlB").slice(1) + " Vehicle Entry"}),
      // m(dHead, {title: m.route.param("urlB") == "new"?"New Vehicle Entry":"Edit Vehicle Entry"}),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"vehicleName",placeholder:"E.g Toyota",label:"Name of vehicle *", value: m.route.param("name"),
                oninput:(e)=>{
                  m.route.set(path + "/vehicles/"+m.route.param("urlB"),{name: e.target.value, park: $("#parkLocation").val()}, {replace : true})
                  // m.route.set("/u/vehicles/"+m.route.param("urlB")+"?name="+encodeURI(e.target.value)+"&park="+$("#parkLocation").val())
                  // m.redraw()
                }})),
              m(".col-sm-6",m(dSelect,{id:"parkLocation",placeholder:"Select Location of park",label:"Location of park *",list:["Shell"]}))
            ]),
            m(".row",[
              m(".col-sm-6.col-md-8",m(dInput,{id:"plateNumber",placeholder:"E.g XXX-XXXX-XXX",label:"Plate number *"})),
              m(".col-sm-6.col-md-4",m(dSelect,{id:"seatSpace",placeholder:"Select available seat space",label:"Available seat space *",list:["4 Seats","5 Seats","6 Seats"]}))
            ]),
            m(dUpload,{id:"vehicleImageUpload",label:"Vehicle image"}),
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"arrivalTime",placeholder:"E.g 10:00am",label:"Time of Arrival *"})),
              m(".col-sm-6",m(dInput,{id:"departureTime",placeholder:"E.g 12:00pm",label:"Time of departure *"}))
            ]),
            m(dButton,{id: 2, name: m.route.param("urlB") == "new"?"Create vehicle entry":"Edit vehicle entry", icon: Model.icon.vehicles, disabled: vnode.state.btnDisabled, click:()=>{

              // (($("#vehicleName").val().trim().length > 0)? (Model.vehicles.list.push({name: $("#vehicleName").val().trim(), park: $("#parkLocation").val() }),m.route.set("/u/vehicles")):null)

              if($("#parkLocation").val() !=null && $("#vehicleName").val().trim().length > 0){
                     if(m.route.param("urlB") == "new"){
                           Model.vehicles.list.push({
                             name: $("#vehicleName").val(), 
                             park: $("#parkLocation").val()
                           })
                           m.route.set(path+"/vehicles")  
                          addSuccess('Vehicle has been created');  
                     }else{
                         let temp = []
                         let old = JSON.parse(localStorage.getItem("vehicles"));
                         if(old == null){
                           m.route.set(path+"/vehicles");
                           addDanger('Failed to edit vehicle, try again');
                         }else{
                           Model.vehicles.list.forEach((e)=>{
                             if(e.name == old.name && e.park == old.park){
                               temp.push({
                                 name: $("#vehicleName").val(), 
                                 park: $("#parkLocation").val()
                               })
                             }else{
                               temp.push({
                                 name: e.name, 
                                 park: e.park
                               })
                             }
                           })
                           Model.vehicles.list = temp
                           m.route.set(path+"/vehicles")
                         addSuccess('Edited successfully');
                       }
                    }
                }
            }})
           
            
            ]
          )
      )
      
      ]
  }
}
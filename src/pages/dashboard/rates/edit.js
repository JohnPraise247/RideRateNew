import $ from "jquery";
import { Model, randomString, getIndexByID } from '../../../model';
import { dInput, dSelect, dButton, dHead } from '../components';
import { addSuccess, addDanger } from '../../../notification';


//Add Rate entry view
export const rateForm = {
  oncreate:(vnode)=>{
    vnode.state.btnDisabled = ($("#selectLocation").val() !== "" && $("#priceInput1").val().trim() !== "" )
    m.redraw()
  },
  onupdate:(vnode)=>{
    vnode.state.btnDisabled = ($("#selectLocation").val() !== "" && $("#priceInput1").val().trim() !== "")
  },
  view: ({ state: { path, btnDisabled, urlB = m.route.param("urlB"), usertype = m.route.get().slice(1, 6) }})=>{
    usertype == "admin" ? path = "/admin" : path = "/u"
    
    return [
      m(dHead, {title: urlB.charAt(0).toLocaleUpperCase() +urlB.slice(1) + " Rate Entry"}),
      // m(dHead, {title: m.route.param("urlB") == "new"?"New Rate Entry":"Edit Rate Entry"}),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(dSelect,{id:"selectLocation",placeholder:"Select available location",label:"Select a location *", list: Model.locations.list, selected: m.route.param("location"),
              onupdate:()=> $("#selectLocation").val(m.route.param("location")),
              onchange:()=>{
                m.route.set(path+"/rates/"+urlB,{location: $("#selectLocation").val(), price1: $("#priceInput1").val(), price2: $("#priceInput2").val()}, {replace : true})
                // m.route.set("/u/rates/"+m.route.param("urlB")+"?location="+$("#selectLocation").val()+"&price1="+encodeURI($("#priceInput1").val())+"&price2="+encodeURI($("#priceInput2").val()))
                // m.redraw()
            }}),
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"priceInput1",placeholder:"Price 1",label:"Price 1*",type:"number", value: m.route.param("price1"),
                oninput:(e)=>{
                  m.route.set(path+"/rates/"+urlB,{location: $("#selectLocation").val(), price1: e.target.value, price2: $("#priceInput2").val()}, {replace : true})
                }
              })),
              m(".col-sm-6",m(dInput,{id:"priceInput2",placeholder:"(Optional)",label:"Price 2",type:"number", value: m.route.param("price2"),
               oninput:(e)=>{
                  m.route.set(path+"/rates/"+urlB,{location: $("#selectLocation").val(), price1: $("#priceInput1").val(), price2: e.target.value }, {replace : true})
                }})),
            ]),
            m(dButton,{id: 1, name: urlB == "new"?"Create rate":"Edit rate", icon: Model.icon.rates, disabled: btnDisabled, click:()=>{
                // ($("#priceInput1").val().trim().length > 0 && $("#priceInput2").val().trim().length > 0)? (Model.rates.list.push([$("#selectLocation").val(),"₦"+$("#priceInput1").val()+" - ₦"+$("#priceInput2").val()]),m.route.set("/u/rates"))
                // :($("#priceInput1").val().trim().length > 0)? (Model.rates.list.push([$("#selectLocation").val(),"₦"+$("#priceInput1").val()]),m.route.set("/u/rates"))
                // :false

                if($("#selectLocation").val() !=null && $("#priceInput1").val().trim().length > 0){
                     if(urlB == "new"){
                           Model.rates.data.push({
                             id: randomString(),
                             price1: $("#priceInput1").val(),
                             price2: $("#priceInput2").val(),
                             location: {
                               id: "",
                               start: $("#selectLocation").val().split("to")[0].trim(),
                               destination: $("#selectLocation").val().split("to")[1].trim(),
                               description: "",
                               dateCreated: "",
                               dateUpdated: "",
                               isDelete: false
                             },
                             status: "pending",
                             isApproved: false,
                             sentForApproval: false,
                             dateCreated: new Date().toLocaleString(),
                             dateUpdated: ""
                           })
                           m.route.set(path+"/rates")  
                          addSuccess('Rate has been added to pending list'); 
                     }else{
                         let ls = JSON.parse(localStorage.getItem(Model.localStorage.name));

                         if(ls == null){
                           m.route.set(path+"/rates");
                           addDanger('Failed to edit rate, try again');
                         }else{
                           Model.rates.data.forEach((e) => {
                            //  console.log(getIndexByID(ls.id, Model.rates.data))
                             if (e.id == ls.id) {
                               e.price1 = $("#priceInput1").val()
                               e.price2 = $("#priceInput2").val()
                               e.location = {
                                 id: "",
                                 start: $("#selectLocation").val().split("to")[0].trim(),
                                 destination: $("#selectLocation").val().split("to")[1].trim(),
                                 description: "",
                                 dateUpdated: ""
                               }
                             e.status = "pending",
                             e.dateUpdated = new Date().toLocaleString()
                             } 
                           });
                           Model.selectAll ? m.route.set(path + "/rates") : m.route.set(path + "/rates", { selected: Model.data.status.charAt(0).toUpperCase() + Model.data.status.slice(1) })
                           addSuccess('Edited succesfully');
                           m.redraw()

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

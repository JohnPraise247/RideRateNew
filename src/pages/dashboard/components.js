import $ from "jquery";
import { Model, pb, setCookie } from '../../model';
import { Locations } from './locations/locations';
import { locationForm } from './locations/edit';
import { locationDelete } from './locations/delete';
import { parkForm } from './parks/edit';
import { Parks } from './parks/parks';
import { parkDelete } from './parks/delete';

import { Rates } from './rates/rates';
import { rateForm } from './rates/edit';
import { rateDelete } from './rates/delete';
// import { rateApproved } from './rates/approved';
// import { ratePending } from './rates/pending';
// import { rateRejected } from './rates/rejected';
import { rateValidate } from './rates/validate';

import { vehicleForm } from './vehicles/edit';
import { Vehicles } from './vehicles/vehicles';
import { vehicleDelete } from './vehicles/delete';
import { Button } from "../../components";


export const dInput = {
  oninit:(vnode)=>{
    vnode.state.value = vnode.attrs.value || ""
  },
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("input.form-control[type='"+(vnode.attrs.type || "text")+"'][placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']", {
                  value: vnode.state.value,
                  oninput:(e)=> {vnode.state.value = e.target.value; vnode.attrs.oninput(e)}
              })
          ])
  }
}

export const dSearchInput = {
  view: ({ attrs: { id, placeholder }, state: { path, usertype = m.route.get().slice(1, 6), input , filter, div, list }}) => {
    usertype == "admin" ? path = "/admin" : path = "/u"
    
    return [
      /*m(".d-flex.ml-auto",[
        
        m(dSelect,{
        id: "selectMode", type: "xs-small", placeholder: "Select mode", list: ["Validate","Edit"], selected: m.route.param("mode"),
        oncreate: () => {
          // m.route.set(path + "/" + m.route.param("urlA"), { selected: m.route.param("selected") }, { replace: true })
        },
        onchange: () => {
          // m.route.set(path + "/" + m.route.param("urlA"), { selected: $("#selectType").val() })
        }
      }),
      ]),*/
      m("#inputSearch.d-flex.w-100.justify-content-center.align-items-center.mt-5",[
      m(dSelect, {
        id: "selectType", type: "mini", placeholder: "Select entry", list: ["All", "Approved", "Pending", "Rejected"], selected: m.route.param("selected"),
        oncreate:()=>{
          m.route.set(path+"/"+m.route.param("urlA"), { selected: m.route.param("selected") },{replace:true})
        },
        // onupdate: () => $("#selectLocation").val(m.route.param("location")),
        onchange: () => {
          m.route.set(path+"/"+m.route.param("urlA"), { selected: $("#selectType").val()})
          // m.redraw()
        }
      }),
      m(".input-group.w-100",[
      m("input.form-control[type='text'][placeholder='"+placeholder+"']#"+ id,{
        style: "border-radius: 0;border-left-color: transparent;",
        onkeyup:()=>{
          input = document.getElementById(id);
          filter = input.value.toUpperCase();
          div = document.getElementById("list-group");
          list = div.getElementsByClassName("list-group-item");
          
    
          for (var i = 0; i < list.length; i++) {
              var a = list[i].getElementsByClassName("w-100")[0];
              var txtValue = a.textContent || a.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  list[i].classList.remove("d-none");
                  list[i].classList.add("d-flex");
              } else {
                  list[i].classList.add("d-none");
                  list[i].classList.remove("d-flex");
              }
            // console.log(txtValue.toUpperCase().indexOf(filter));
          }
          m.redraw()
        }}),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ])
    ])
   ]
  }
}


export const dTextarea = {
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("textarea.form-control[placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']")
          ])
  }
}

export const dSelect = {
  oncreate:(vnode)=>{
    if(vnode.attrs.id == "selectLocation"){
      for(var i in Model.locations.list){ 
        $("#selectLocation").append("<option value='"+Model.locations.list[i].from +" to "+ Model.locations.list[i].to +"' "+(vnode.attrs.selected == Model.locations.list[i].from +" to "+ Model.locations.list[i].to?"selected":"")+">"+Model.locations.list[i].from +" to "+ Model.locations.list[i].to +"</option>") 
      }
    }else if(vnode.attrs.id == "seatSpace"){
      for(var i in vnode.attrs.list){ $("#seatSpace").append("<option value='"+vnode.attrs.list[i]+"' "+(i==2?"selected":"")+">"+vnode.attrs.list[i]+"</option>") }
    }else if(vnode.attrs.id == "selectType"){
      for (var i in vnode.attrs.list) { $("#" + vnode.attrs.id).append("<option value='" + vnode.attrs.list[i] + "' " + (vnode.attrs.list[i] == m.route.param("selected")?"selected":"")+">"+vnode.attrs.list[i]+"</option>") }
    }else{
      for(var i in vnode.attrs.list){ $("#"+vnode.attrs.id).append("<option value='"+vnode.attrs.list[i]+"'>"+vnode.attrs.list[i]+"</option>") }
    }
  },
  view:(vnode)=>{
    return m(vnode.attrs.type != "mini" ? ".form-group.mb-4" : "div",[ 
        vnode.attrs.label!=null?m("label.form-label[for='"+vnode.attrs.id+"']",vnode.attrs.label):null,
        m("select[id='"+vnode.attrs.id+"']",{
          class: vnode.attrs.type == "mini" ? "select-mini" : vnode.attrs.type == "xs-small" ? "select-xs" : "form-control",
          oncreate:()=> vnode.attrs.oncreate != null?vnode.attrs.oncreate():null,
          onchange:(e)=> vnode.attrs.onchange(e)
        },[
          m("option[disabled]", vnode.attrs.placeholder),
        //   vnode.attrs.list.map((i,j) =>
        //   m('option', i.from  +" to "+ i.to)
        // )
      ])
        // }, )
    ])
  }
}

// m('select', {
//           onchange: e => choice = e.target.value,
//           value: choice
//         },


export const dUpload = {
  view:(vnode)=>{
    return m("div.mb-4",[
        m("label.form-label[for='"+vnode.attrs.id+"']",vnode.attrs.label),
        m("input.form-control[type='file'][id='"+vnode.attrs.id+"']")
    ])
  }
}

export const dButton = {
  view:(vnode)=>{
    vnode.state.url = m.route.get().slice(1, 6);
    return  m(".mt-4.mb-2",[
      m(".pull-left.mb-2", 
      m("button.btn.btn-simple.w-100", {
        onclick:()=> window.history.back() 
      },[
          m("i.bx.bx-left-arrow-alt.mr-2"),
          "Back"
        ])
      ),
      m(".d-flex.pull-right.mb-2.justify-content-center",
        
        vnode.state.url == "admin" && m.route.param("urlB") == "validate"?([
          Model.data.status == "pending" ? ([
            m("button.btn.btn-primary" + Model.btnStyle, { style:"",onclick: vnode.attrs.click2, disabled: !vnode.attrs.disabled1 }, [m("i.bx.mr-2" + Model.icon.cancel), "Reject"]),
          m("button.btn.btn-fill.btn-primary.ml-2" + Model.btnStyle, { style:"",onclick: vnode.attrs.click1, disabled: !vnode.attrs.disabled2 }, [m("i.bx.mr-2" + Model.icon.check), "Approve"])
         ]):null
        ]):(
            m("button.btn.btn-fill.w-100.btn-br-10" + (vnode.attrs.class == null ? ".btn-primary" : vnode.attrs.class), { onclick: vnode.attrs.click, disabled: !vnode.attrs.disabled }, [m("i.bx.mr-2" + vnode.attrs.icon), vnode.attrs.name])
        )
      )
    ])
  }
}

const button = {
  view:(vnode)=>{
    return m(".ml-auto", m("button.btn" + vnode.attrs.class,{onclick:vnode.attrs.click},[
      m("i.bx.mr-2"+vnode.attrs.icon),
      m("span", vnode.attrs.name)
    ]))
  }
}

export const dFab = {
  view:()=>{
    return m("div.floating-container", m("div.floating-button", {onclick:()=>{ Model.addNew() }}, m("i.bx.bx-plus")))
  }
}

export const dHead = {
  view:(vnode)=>{
    var path, url = m.route.get().slice(1, 6);
    url == "admin" ? path = "/admin" : path = "/u"

    return m(".d-flex",[
        m("h5", vnode.attrs.title),
        m.route.param("urlB") != "new"?m(button,{name:"delete", class:".btn-danger.btn-simple",icon: Model.icon.trash, click:()=>{
          m.route.set(path+"/"+m.route.param("urlA")+"/delete");
        }}):null
      ])
  }
}


export const Panel = {
  view:({attrs:{text,children}})=>{
    return m(".panel.panel-default",
      m(".panel-body",
        children == null?([
          m("p.text-danger", text),
          m("small.text-danger", "This action can cannot be undone")
        ]):(
          children
        ) 
      ))
  }
}

export const Status = {
  oninit: (vnode) => {
    vnode.state.ls = JSON.parse(localStorage.getItem(Model.localStorage.name));
    vnode.state.ls != null ? Model.data.status = vnode.state.ls.status  : null
  },
  view:({state:{label, icon}})=>{
    Model.data.status == "approved" ? (label = ".label-success", icon = Model.icon.check) 
    : Model.data.status == "pending" ? (label = ".label-warning", icon = Model.icon.warning) 
    : (label = ".label-danger", icon = Model.icon.cancel) 

    return m("span", "Status:",
      m("label.label.ml-3" + label + Model.btnStyle, [
        m("i.bx.label-icon" + icon),
        m("span.label-span", Model.data.status)
      ])
    )
  }
}





export const EmptyState = {
  view:()=>{
    return m(".empty",[
              m("i.bx.bx-icon."+(m.route.param("urlA") == "location"? Model.icon.location
                :m.route.param("urlA") == "parks"? Model.icon.park
                :m.route.param("urlA") == "rates"? Model.icon.rates
                :m.route.param("urlA") == "vehicles"? Model.icon.vehicles
                :null)+".bx-lg.bx-border-circle"),

              m.route.param("urlA") == "location"?m("h5.strong.text-muted-2","No location added yet")
              :m.route.param("urlA") == "parks"?(
                m("h5.strong.text-muted-2","No Parks added yet")
              ):m.route.param("urlA") == "rates"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bx-sm.mr-2"+Model.icon.location),"location first to proceed"]):m("h5.strong.text-muted-2","No Rates added yet")
              ):m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bx-sm.mr-2"+Model.icon.location),"location first to proceed"]):m("h5.strong.text-muted-2","No Vehicles added yet")
              )
              :null,
              m.route.param("urlA") == "rates" || m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length != 0?m("button.btn.btn-primary.btn-fill.btn-br-10",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-md[style='position: relative;top: 4px;']"+Model.icon.plus),"Add"])
                :null
              )
              :m("button.btn.btn-primary.btn-fill.btn-br-10",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-md[style='position: relative;top: 4px;']"+Model.icon.plus),"Add"]),
        ])
          
  }
}
















const Nav = {
  oninit: () => {
    let getMode = localStorage.getItem("mode")
    if (getMode != null) Model.mode = getMode;
  }, 
  onupdate:({ state: { url = m.route.get().slice(1, 6) }})=>{
    //redirects / to /dashboard
    // if (url == "admin" && m.route.param("urlA") == null) m.route.set("/admin/dashboard")
    // else if (url != "admin" && m.route.param("urlA") == null) m.route.set("/u/dashboard")
  },
view: ({ state: { url = m.route.get().slice(1, 6) }}) => {
    return m("nav", [
      m(".sidebar-button", [
        m("i.bx.bx-menu.sidebarBtn", {
          onclick: () => {
            Model.sidebar.classList.toggle("active");
            Model.sidebar.classList.contains("active") ? Model.sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right") : Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
          }
        }),
        m("span.dashboard", (
          url == "admin"?(
            m.route.param("urlA") == "dashboard" ? "Admin Dashboard"
            :m.route.param("urlA") == "location" ? "Locations" 
            : m.route.param("urlA") == "parks" ? "Parks"
            : m.route.param("urlA") == "rates" ? "Rates"
            : m.route.param("urlA") == "vehicles" ? "Vehicles"
            : m.route.param("urlA") == "settings" ? "Settings"
            : m.route.param("urlA") == "users" ? "Users"
            : "Page not found"
          ):(
            m.route.param("urlA") == "dashboard" ? "Dashboard"
            : m.route.param("urlA") == "location" ?  "Location Entry"
            : m.route.param("urlA") == "parks" && Model.userType == "driver" ? "Park Entry"
            : m.route.param("urlA") == "rates" ? "Rate Entry"
            : m.route.param("urlA") == "vehicles" && Model.userType == "driver" ? "Vehicle Entry"
            : m.route.param("urlA") == "vehicles" && Model.userType == "contributor" ? "Vehicles"
            : m.route.param("urlA") == "settings" ? "Settings"
            : "Page not found"
          )
         )
        )
      // m("div.search-box",[
      //     m("input[type='text'][placeholder='Search...']"),
      //     m("i.bx.bx-search")
      //   ]),
      ]),
      /* m.route.param("urlA") != "dashboard" && url == "admin" && m.route.param("urlA") != "users" && m.route.param("urlB") == null ?(
      m("#mode-btn.d-flex.justify-content-center.align-items-center",[
        m("small.mr-2.text-muted", "Mode:"),
        m("ul.nav.nav-pills",[
          m("li"+( Model.mode == "validate"?".active":""), m("a[href='javascript:void(0)']",{
            onclick:()=>{ Model.mode = "validate"; localStorage.setItem("mode",Model.mode)}
          },"Validate")),
          m("li"+( Model.mode == "edit"?".active":""), m("a[href='javascript:void(0)']",{
            onclick:()=>{ Model.mode = "edit"; localStorage.setItem("mode",Model.mode)}
          }, "Edit"))
        ]
       )
      ])):null, */
      url != "admin"?([
      m(".profile-details", {
        onclick: () => {
          console.log(123)
        }
      }, m("img[alt='Profile image'][src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+VBMVEXX19XY2NXY2NbY2NfZ2dXZ2dbZ2dfa2tba2tfa2tja2tnb29jb29nc3Nrc3Nvd3drd3dvd3dze3tve3tze3t3f39zf393g4N/h4d/h4eDi4uDi4uHk5OHk5OLk5OPl5eLl5eTm5uPm5uTm5uXn5+Xn5+bo6Obo6Ofp6ebp6efp6ejq6ufq6unq6urr6+rs7Ovu7uvu7u3v7+7w8O/x8fDx8fHy8vHz8/Lz8/P09PP09PT09PX19fT19fX29vb39/b39/j5+fj5+fn6+vn6+vr7+/r7+/v7+/z8/Pv8/Pz8/P39/fz9/f39/f7+/v3+/v7+/v////3///9ndqfOAAACUklEQVRYw+3W4XfSMBAA8Czas3GNxN7AIcrQiuA2YcAUUZy6DdxcJ/T+/z/GD8UNSrJdy3t+8j718Zofl0uanKANQ/wH7gbiNIoCsfWRDcQzorPBQRQdDM4KZvBxFwCUAoBnH9xJOIGrmgwMIiJiqOSLS0ryAAlNQlgMR0Q0EE7zZTAvK1wJVZ7nApoSMyGbfCCmbw9MFjBwkiODho9r4e9xgZimyqwDRk3ZQF+gJaBvW0rrFOrKBqg6twbzUNsAHXKBc2sCiHBu2dDCUoKxtANyzAQGD23DQ4QBE+iCFdiRXRZAdGgH0DtkAvu+vQb+PhNouoAmE2i7gDZ3Co4aAHcK7x2r4HWYy3jkWsbev9pII9dWHjFr8B0cH9MPJnCxbWzjjfrFBMhseB7Qc/uJVGWfiS1rFaHFBk6k7VSWJ/x7YW9dCCX7XqCEflc9k/3/6izX9f42WAW2W7lu5zi7lNq4WgxXf/Aze71PcmYw9FYBb+hoUezAjBrZDBrELmKcEJ1mPwcDp0T3Xq63XWVt7VhUtew7GeDm54tR5+WTYL1DCUyt83l683ayCqSjJ+NeVFZbnrJ/jQqkqkS98WS5e/2bwdVxe1f70lP6Kd4RWj3yJOhq+/hyQSyAzuMtCDQyYgcRdQAy6CxnUBcGeRGGYfpQEq9ugT57/HJVRZ/iFLguaSwQupRmENORwEIhuhSTIKKKLgboChEJd0t0f8gxJSKmN35RwI+IRNESpmW8JkHDwjNAlJ9I0GtVHFARiZk2xQFdmomvG8wAUX4RLdgEgHd/ACERYcCSvguWAAAAAElFTkSuQmCC']"))
    ]):null
      //           m("li.dropdown",
      //   [
      //     m("a.dropdown-toggle[href='#gsdk'][data-toggle='dropdown']",
      //       [
      //         "Dropdown ",
      //         m("b.caret")
      //       ]
      //     ),
      //     m("ul.dropdown-menu",
      //       [
      //         m("li", 
      //           m("a[href='#gsdk']", 
      //             "Action"
      //           )
      //         ),
      //         m("li", 
      //           m("a[href='#gsdk']", 
      //             "Another action"
      //           )
      //         ),
      //         m("li", 
      //           m("a[href='#gsdk']", 
      //             "Something else here"
      //           )
      //         ),
      //         m("li.divider"),
      //         m("li", 
      //           m("a[href='#gsdk']", 
      //             "Separated link"
      //           )
      //         ),
      //         m("li.divider"),
      //         m("li", 
      //           m("a[href='#gsdk']", 
      //             "One more separated link"
      //           )
      //         )
      //       ]
      //     )
      //   ]
      // )
    ])
  }
}

export const Sidebar = {
  oncreate: () => {
    Model.sidebar = document.querySelector(".sidebar");
    Model.sidebarBtn = document.querySelector(".sidebarBtn");
  },
  view:(vnode)=>{
    vnode.state.url = m.route.get().slice(1, 6);
    vnode.state.url == "admin" ? vnode.state.type = "admin" : vnode.state.type = "u"
    return m(".sidebar", [
      m(".logo-details", [
        m("i" + Model.icon.logo),
        m("span.logo_name", "RideRate")
      ]),
      m("ul.nav-links", [
        m("li.showMenu",
          m("a" + (m.route.param("urlA") == "dashboard" ? ".active" : "") + "[href='#/"+vnode.state.type+"/dashboard']", [
            m("i.bx" + Model.icon.dashboard),
            m("span.links_name", "Dashboard")
          ]
          ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/dashboard']", "Dashboard")))
        ),
        m("li", m("a" + (m.route.param("urlA") == "location" ? ".active" : "") + "[href='#/"+vnode.state.type+"/location']", [
          m("i.bx" + Model.icon.location),
          m("span.links_name", "Locations")
        ]
        ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/location']", "Location Entry")))
        ),
        Model.userType == "driver" || vnode.state.url == "admin" ?([
        m("li", m("a" + (m.route.param("urlA") == "parks" ? ".active" : "") + "[href='#/"+vnode.state.type+"/parks']", [
          m("i.bx" + Model.icon.park),
          m("span.links_name", "Parks")
        ]
        ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/parks']", "Parks")))
        )
        ]):null,
        m("li", m("a" + (m.route.param("urlA") == "rates" ? ".active" : "") + "[href='#/"+vnode.state.type+"/rates']", [
          m("i.bx" + Model.icon.rates),
          m("span.links_name", "Rates")
        ]
        ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/rates']", "Rates Entry")))
        ),
        // Model.userType == "driver" || vnode.state.url == "admin" ?([
          m("li", m("a" + (m.route.param("urlA") == "vehicles" ? ".active" : "") + "[href='#/"+vnode.state.type+"/vehicles']", [
            m("i.bx" + Model.icon.vehicles),
            m("span.links_name", "Vehicles")
          ]
          ),
            m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/vehicles]", "Vehicles entry")))
         ),
        // ]):null,
       vnode.state.url == "admin"?([
          m("li", m("a" + (m.route.param("urlA") == "users" ? ".active" : "") + "[href='#/" + vnode.state.type + "/users']", [
            m("i.bx" + Model.icon.user),
            m("span.links_name", "Users")
          ]
          ),
            m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/" + vnode.state.type + "/users]", "Users")))
          ),
        ]):null,
        m("li[style='position:absolute;bottom:50px;width: 100%']", m("a" + (m.route.param("urlA") == "settings" ? ".active" : "") + "[href='#/"+vnode.state.type+"/settings']", [
          m("i.bx" + Model.icon.settings),
          m("span.links_name", "Settings")
        ]
        ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/"+vnode.state.type+"/vehicles]", "Settings")))
        ),
        m("li.bottom", m("a[href='#/login']", {
          onclick: () => {
            setCookie("signin", null, 0);
            Auth.signin = false
            pb.authStore.clear();
            
          }
        }, [
          m("i.bx" + Model.icon.logOut),
          m("span.links_name", "Log out")
        ]
        )
        )
      ]),
      m(".bg-overlay")
    ])
  }
}

export const Sections = {
  view:(vnode)=>{
    vnode.state.url = m.route.get().slice(1, 6);
    return m("section.main-section", [
      m(Nav),
      // m("div.close-sidebar-overlay",{onclick:()=>{ Model.closeSidebar()}}),
      vnode.state.url == "admin"?(
        m.route.param("urlA") == "dashboard" ? m(SectionDashboard)
        : m.route.param("urlA") == "location" ? m(SectionLocation)
        : m.route.param("urlA") == "parks" ? m(SectionParks)
        : m.route.param("urlA") == "rates" ? m(SectionRates)
        : m.route.param("urlA") == "vehicles" ? m(SectionVehicles)
        : m.route.param("urlA") == "settings" ? m(SectionSettings)
        : m.route.param("urlA") == "users" ? m(SectionUsers)
        : m(SectionNotFound)
      ):(
         m.route.param("urlA") == "dashboard" ? m(SectionDashboard)
        : m.route.param("urlA") == "location" ? m(SectionLocation)
        : m.route.param("urlA") == "parks" && Model.userType == "driver"? m(SectionParks)
        : m.route.param("urlA") == "rates" ? m(SectionRates)
        : m.route.param("urlA") == "vehicles" && Model.userType == "driver" ? m(SectionVehicles)
        : m.route.param("urlA") == "vehicles" && Model.userType == "contributor" ? m(SectionVehicles, {userType:"contributor"})
        : m.route.param("urlA") == "settings" ? m(SectionSettings)
        : m(SectionNotFound)
      )  
    ])
  }
}

const SectionDashboard = {
  view: (vnode) => {
    vnode.state.url = m.route.get().slice(1, 6);
    return [
      m(".section-container", { onclick: () => { Model.closeSidebar() } }, [
        m("h5", "Overview"),
        m(".row.mb-1", [
          m(".container-fluid.mt-3",
            m(".col-sm-6",
              m(".panel.panel-default",
                m(".panel-body", [
                  m(".d-flex.justify-content-between.align-items-center", [
                    m("div", [
                      m("h3", Model.locations.list.length),
                      m(".text-muted-2", "Locations")
                    ]),
                    m("div", m("i.bx-icon.bx.bx-one.bx-lg.bx-border-circle" + Model.icon.location))
                  ])
                  // m("small.text-muted","In Total")
                ]
                )
              )
            )
          ),
          m(".container-fluid.mt-3",
            m(".col-sm-6",
              m(".panel.panel-default",
                m(".panel-body", [
                  m(".d-flex.justify-content-between.align-items-center", [
                    m("div", [
                      m("h3", Model.rates.data.length),
                      m(".text-muted-2", "Rates")
                    ]),
                    m("div", m("i.bx-icon.bx-two.bx.bx-lg.bx-border-circle" + Model.icon.rates))
                  ]),
                  // m("small.text-muted","In Total")
                ]
                )
              )
            )
          )    
        ]),
        m(".row.mb-1", [
          Model.userType == "driver" || vnode.state.url == "admin" ? (
            m(".container-fluid.mt-3",
              m(".col-sm-6",
                m(".panel.panel-default",
                  m(".panel-body", [
                    m(".d-flex.justify-content-between.align-items-center", [
                      m("div", [
                        m("h3", Model.parks.list.length),
                        m(".text-muted-2", "Parks")
                      ]),
                      m("div", m("i.bx-icon.bx-four.bx.bx-lg.bx-border-circle" + Model.icon.park))
                    ]),
                    // m("small.text-muted","In Total")
                  ]
                  )
                )
              )
            )
          ) : null,
          vnode.state.url == "admin" ?(
            m(".container-fluid.mt-3",
              m(".col-sm-6",
                m(".panel.panel-default",
                  m(".panel-body", [
                    m(".d-flex.justify-content-between.align-items-center", [
                      m("div", [
                        m("h3", Model.vehicles.list.length),
                        m(".text-muted-2", "Vehicles")
                      ]),
                      m("div", m("i.bx-icon.bx-three.bx.bx-lg.bx-border-circle" + Model.icon.vehicles))
                    ]),
                    // m("small.text-muted","In Total")
                  ]
                  )
                )
              )
            )
          ):null    
        ]),

        //only shows in admin page
        vnode.state.url == "admin"?([
          m(".row",[
            m(".col-md-6",
              m("p.mt-5",{ style: "text-transform: capitalize"}, "Locations"),
          m(".d-flex.mb-1.overflow-x", [
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                m("i.bx-icon.bx.bx-two.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.check), 
                m("p.m-0", Model.locations.list.length + " Approved")
              ])
            ),
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                 m("i.bx-icon.bx.bx-three.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.warning),
                 m("p.m-0", Model.locations.list.length + " Pending")
              ])
            ),
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                 m("i.bx-icon.bx.bx-four.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.cancel),
                 m("p.m-0", Model.locations.list.length + " Rejected")
              ])
            )

           ])
          ),

            m(".col-md-6",
              m("p.mt-5",{ style: "text-transform: capitalize"}, "Rates"),
          m(".d-flex.mb-1.overflow-x", [
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                m("i.bx-icon.bx.bx-two.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.check), 
                m("p.m-0", Model.locations.list.length + " Approved")
              ])
            ),
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                 m("i.bx-icon.bx.bx-three.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.warning),
                 m("p.m-0", Model.locations.list.length + " Pending")
              ])
            ),
            m(".panel.panel-default.mx-3",
              m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                 m("i.bx-icon.bx.bx-four.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.cancel),
                 m("p.m-0", Model.locations.list.length + " Rejected")
              ])
            )

          ])
            )
          ]),

          m(".row", [
            m(".col-md-6",
              m("p.mt-5", { style: "text-transform: capitalize" }, "Parks"),
              m(".d-flex.mb-1.overflow-x", [
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-two.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.check),
                    m("p.m-0", Model.locations.list.length + " Approved")
                  ])
                ),
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-three.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.warning),
                    m("p.m-0", Model.locations.list.length + " Pending")
                  ])
                ),
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-four.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.cancel),
                    m("p.m-0", Model.locations.list.length + " Rejected")
                  ])
                )

              ])
            ),

            m(".col-md-6",
              m("p.mt-5", { style: "text-transform: capitalize" }, "Vehicles"),
              m(".d-flex.mb-1.overflow-x", [
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-two.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.check),
                    m("p.m-0", Model.locations.list.length + " Approved")
                  ])
                ),
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-three.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.warning),
                    m("p.m-0", Model.locations.list.length + " Pending")
                  ])
                ),
                m(".panel.panel-default.mx-3",
                  m(".panel-body.d-flex.justify-content-center.align-items-center.w-100", [
                    m("i.bx-icon.bx.bx-four.bx-lg.bx-border-circle.p-1.mr-3" + Model.icon.cancel),
                    m("p.m-0", Model.locations.list.length + " Rejected")
                  ])
                )

              ])
            )
          ])
          

        ]):null
      ])
    ]
  }
}



// Copyright © Your Website 2021
// Privacy Policy
// ·
// Terms & Conditions



// SECTIONS
const SectionLocation = {
  view: () => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit" ? m(locationForm)
        : m.route.param("urlB") == "delete" ? m(locationDelete)
          : (
            Model.locations.list.length == 0 ? m(EmptyState) : ([m(Locations), m(dFab)])
          )
    )
  }
}

const SectionParks = {
  view: () => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit" ? m(parkForm)
        : m.route.param("urlB") == "delete" ? m(parkDelete)
          : (
            Model.parks.list.length == 0 ? m(EmptyState) : ([m(Parks), m(dFab)])
          )
    )
  }
}

const SectionRates = {
  view: () => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit" ? m(rateForm)
        : m.route.param("urlB") == "delete" ? m(rateDelete)
        : m.route.param("urlB") == "validate" && m.route.get().slice(1, 6) == "admin" ? m(rateValidate)
          // : m.route.param("selected") == "Approved" ? m(rateApproved)
          // : m.route.param("selected") == "Pending" ? m(ratePending)
          // : m.route.param("selected") == "Rejected" ? m(rateRejected)
          : (
              Model.rates.data.length == 0 ? m(EmptyState) : ([m(Rates), m(dFab)])
          )
    )
  }
}

const SectionVehicles = {
  view: (vnode) => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
    vnode.attrs.userType == "contributor"?(
      m("h4","Available vehicles will be shown here")
    ):(
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit" ? m(vehicleForm)
        : m.route.param("urlB") == "delete" ? m(vehicleDelete)
          : (
            Model.vehicles.list.length == 0 ? m(EmptyState) : ([m(Vehicles), m(dFab)])
          )
      )
    )
  }
}

const SectionSettings = {
  view: () => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
      m("span.label.label-warning", "This page is under development")
      // m.route.param("urlB") == "new" || m.route.param("urlB") == "edit"?m(vehicleForm)
      // :m.route.param("urlB") == "delete"?m(vehicleDelete)
      // :(
      //   Model.vehicles.list.length == 0?m(EmptyState):([ m(Vehicles), m(dFab) ])
      // )
    )
  }
}

const SectionUsers = {
  view: () => {
    return m("section.section-container", { onclick: () => { Model.closeSidebar() } },
      m("span.label.label-warning", "This page is under development")
    )
  }
}

const SectionNotFound = {
  view: () => {
    return m("section.section-container",
      m(".empty", [
        m("i.bx.bx-icon.bx-lg.bx-border-circle" + Model.icon.searchAlt),
        m("h5.strong.text-muted-2", "This requested URL was not found on this server."),
        m(Button, { name: "Goto Dashboard", icon: Model.icon.leftArrowAlt, class: ".btn-fill.btn-br-10", onclick: () => { m.route.set("/u/dashboard") } })
      ])
    )
  }
}

















export const rateListGroup = {
  view: ({ attrs: { data, type, click }, state: { usertype, label, title, icon, prop }})=>{
    usertype = m.route.get().slice(1, 6);

    type == "approved" ? (label = ".label-success", icon = Model.icon.check) 
    : type == "pending" ? (label = ".label-warning", icon = Model.icon.warning) 
    : (label = ".label-danger", icon = Model.icon.cancel) 
    // urltype != "admin" ? title = "[title = " + title + "]" : title =""
    // prop = ["price1", "location"]

    return [
      m(".name-icon.icon-green", { onclick: () => { Model.edit(click[0], click[1], click[2])} }, m("i.bx" + Model.icon.rates) ),
      m(".w-100.d-flex[style='flex-direction:column']", { onclick: () => Model.edit(click[0], click[1], click[2]) }, [
        m("h5.list-group-item-heading.d-flex.justify-content-between", (
          data.price2 != "" ? "₦" + data.price1 + " - ₦" + data.price2 
          : "₦" + data.price1), 
          m("label.label.ml-3" + label + Model.btnStyle, [
            m("i.bx.label-icon"+icon),
            m("span.label-span", type)
          ])
        ),
        m("small.text-muted", ( 
          data.location.destination != "" ? data.location.start + " to " + data.location.destination 
          : data.location.start
          )
        )
      ])
    ]
  }
}

export const iconHover = {
  view:({attrs:{type, click1, click2, click3},state:{usertype = m.route.get().slice(1, 6)}})=>{
    return m(".icon-hover", [
      usertype != "admin"?([
          m(".icon-small", {
            onclick: click1
          }, m("i.bx.text-danger" + Model.icon.trash)),
          m(".icon-small", {
            onclick: click2
          }, m("i.bx" + Model.icon.edit))
      ]):([
          type == "pending"?([
            m("i.bx-icon.bx.bx-outline-red.bx-md.bx-border-circle.p-0[title=Reject entry]" + Model.icon.cancel, {
              onclick: click2
            }),
            m("i.bx-icon.bx.bx-outline-green.bx-md.bx-border-circle.p-0.ml-2[title=Approve entry]" + Model.icon.check, {
              onclick: click1
            })
          ]):(
            m("i.bx-icon.bx.bx-outline-none.bx-md.bx-border-circle.p-0.ml-2[title=View entry]" + Model.icon.eye, {
            onclick: click3
          })
        )
      ])
    ])
  }
}



// export const Notif = {
//   view:(vnode)=>{
//     return m(".notif.notif-"+vnode.attrs.type, { onclick:()=>{vnode.dom.remove()}}, vnode.attrs.text );       
//   }
// }




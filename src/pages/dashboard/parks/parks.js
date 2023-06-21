import { Model } from '../../../model';
import { dSearchInput } from '../components';


export const Parks = {
  view:(vnode)=>{
    return [
      m(dSearchInput,{id: "parkInput", placeholder: "Search Parks"}),
      m("#list-group.list-group.mt-5",[
        Model.parks.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                   m(".name-icon.icon-purple",{onclick:()=>{ Model.edit(i.parkname, i.location) }}, m("i.bx"+Model.icon.park)),
                    m(".w-100.d-flex[style='flex-direction:column']",{onclick:()=>{ Model.edit(i.parkname, i.location) }},[
                       m("h5.list-group-item-heading", i.parkname),
                       m("small.text-muted", i.location)
                    ]),
                    m(".icon-hover",[
                      m(".icon-small",{
                        onclick:()=>{
                          Model.edit(i.parkname, i.location, "delete");
                        }
                      }, m("i.bx.text-danger"+Model.icon.trash)),
                      m(".icon-small",{
                        onclick:()=>{
                          Model.edit(i.parkname, i.location)
                        }
                      }, m("i.bx"+Model.icon.edit))
                    ])  
                  ])
        })


      ])
    ]
  }
}
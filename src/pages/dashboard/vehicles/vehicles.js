import { Model } from '../../../model';
import { dSearchInput } from '../components';

export const Vehicles = {
  view:()=>{
    return [
      m(dSearchInput,{id: "vehicleInput", placeholder: "Search Vehicles"}),
      m("#list-group.list-group.mt-5",[
        Model.vehicles.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                    m(".name-icon.icon-yellow",{onclick:()=>{ Model.edit(i.name, i.park) }}, m("i.bx"+Model.icon.vehicles)),
                    m(".w-100.d-flex[style='flex-direction:column']",{onclick:()=>{ Model.edit(i.name, i.park) }},[
                       m("h5.list-group-item-heading",i.name),
                       m("small.text-muted", i.park)
                    ]),
                    m(".icon-hover",[
                      m(".icon-small",{
                        onclick:()=>{
                          Model.edit(i.name, i.park, "delete");
                        }
                      }, m("i.bx.text-danger"+Model.icon.trash)),
                      m(".icon-small",{
                        onclick:()=>{
                          Model.edit(i.name, i.park)
                        }
                      }, m("i.bx"+Model.icon.edit))
                    ])   
                  ])
        })
      ])
    ]
  }
}
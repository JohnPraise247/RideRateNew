import { Model } from "../../app/model";
import { SVGEdit, SVGLocation, SVGTrash } from "../svg";

const flex = {
    view:({ state:{ url = m.route.param("urlA") },attrs: { i, className, iconClass }})=>{
        return m(".flex.items-center.justify-center", { key: i.id },[
            m(".flex.w-full.mt-3.p-2.rounded-lg.items-center", [//bordner.md:justify-center
                m(".w-10.h-10"+className+".rounded-lg.flex.justify-center.items-center", [
                    m(SVGLocation, { className: "w-6 h-6 " + iconClass })
                ]),
                m(".w-fit.flex.flex-col.justify-center.ml-2", [
                    m("p.truncate.w-28.sm:w-40.md:w-64.lg:!w-96", i.start + " to " + i.destination),//.w-28.sm:w-40.md:w-64  
                    //failed to
                    i.description != null ? m("small.truncate.opacity-50.w-28.sm:!w-40.lg:!w-96", i.description) : null
                ]),//.md:w-56.hidden.md:block
                m(".rounded-full.border.border-gray-300.px-2.text-xs.text-gray-400.ml-auto.hidden.lg:block", "Created: " + i.dateCreated)
            ]),
            // m(labelButton, {
            //     id: (
            //         url == "locations" ? "modalLocation"
            //         : url == "rates" ? "modalCreateRate"
            //         : "modalCreate"
            //     ),
            //     onclick: () => Model.modal.locationTitle = "Edit location entry",
            //     svg: m(SVGEdit, {
            //         className: "text-gray-700 h-3 w-3 md:h-4 md:w-4"
            //     })
            // }),
           
            // m("button.btn.btn-edit.rounded-lg.border.border-gray.mt-3.ml-2.justify-center.items-center.btn-sm.md:h-10", m(SVGEdit, {
            //     className: "text-gray-700 h-3 w-3 md:h-4 md:w-4"
            // })),
            i.status == "pending" ? m("button.btn.btn-edit.rounded-lg.border.border-gray.mt-3.ml-2.justify-center.items-center.btn-sm.md:h-10", {
                onclick: () => {
                    url == "locations" ? modalLocation.showModal()
                    : null

                    Model.modal.location.id = i.id
                    Model.modal.location.title = "Edit location entry"
                    Model.modal.location.start = i.start
                    Model.modal.location.destination = i.destination
                    i.description != null ? Model.modal.location.description = i.description : null
                    Model.modal.location.dateCreated = i.dateCreated
                    i.dateUpdated != null ? Model.modal.location.dateUpdated = i.dateUpdated : null
                }
            },
                m(SVGEdit, {
                    className: "text-gray-700 h-3 w-3 md:h-4 md:w-4"
                })
            ) : null,
            m("button.btn.btn-delete.rounded-lg.text-red.mt-3.ml-2.justify-center.items-center.btn-sm.md:h-10", {
                onclick: () => {
                    url == "locations" ? modalDelete.showModal()
                    :null

                    Model.modal.location.id = i.id
                    Model.modal.location.title = "Edit location entry"
                    Model.modal.location.start = i.start
                    Model.modal.location.destination = i.destination
                    i.description != null ? Model.modal.location.description = i.description : null
                    Model.modal.location.dateCreated = i.dateCreated
                    i.dateUpdated != null ? Model.modal.location.dateUpdated = i.dateUpdated : null
                }
            },
                m(SVGTrash, {
                    className: "text-red-500 h-3 w-3 md:h-4 md:w-4"
                })
            )

            // m("button.btn.btn-danger.rounded-lg.text-red.mt-3.ml-2.justify-center.items-center.btn-sm.md:h-10", {
            //     onclick:()=>{
            //         deleteEntry(locations, i.id)
            //     }
            // },
            //   m(SVGTrash, { 
            //     className: "text-red-500 h-3 w-3 md:h-4 md:w-4"
            // }))
        ])
    }
}

const List = {
    view:({ attrs: { array, status} })=>{
        return array.data.map((i)=>{
              return status == "approved" && i.status == "approved" ? m(flex, { 
                   i,
                   className: ".icon-success",//".border-green-500.bg-green-50",".border-gray-300.bg-green-50"
                //    iconClass: "text-green-500"
                }) 
                : status == "pending" && i.status == "pending" ? m(flex, { 
                    i,
                    className: ".icon-warn",//".border-yellow-500.bg-yellow-50",.border-gray-300.bg-yellow-50
                    // iconClass: "text-yellow-500" 
                  }) 
                : status == "rejected" && i.status == "rejected" ? m(flex, { 
                    i,
                    className: ".icon-error",//".border-red-500.bg-red-50",.border-gray-300.bg-red-50
                    // iconClass: "text-red-500"
                }) 
                : null
          })
    }
}

export default List;
import { SVGEdit, SVGLocation, SVGTrash } from "../svg";

const flex = {
    view:({ attrs: { i, className, iconClass }})=>{
        return m(".flex.items-center.justify-center", [
            m(".flex.w-full.mt-3.p-2.rounded-lg.md:justify-center.items-center", [//bordner
                m(".w-10.h-10.border"+className+".rounded-lg.flex.justify-center.items-center", [
                    m(SVGLocation, { className: "w-6 h-6 " + iconClass })
                ]),
                m(".w-fit.flex.flex-col.justify-center.ml-2", [
                    m("p.text-gray-700", i.start + " to " + i.destination),
                    i.description != null ? m("small.truncate.text-gray-400.w-48.md:w-56", i.description) : null
                ]),
                m(".rounded-full.border.border-gray-300.px-2.text-xs.text-gray-400.ml-auto.hidden.md:block", "Created: " + i.dateCreated)
            ]),
           
            m("button.btn.btn-edit.rounded-lg.border.border-gray.mt-3.ml-2.justify-center.items-center.btn-sm.md:btn-md.md:h-14.md:w-14", m(SVGEdit, {
                className: "text-gray-700 h-3 w-3 md:h-4 md:w-4"
            })),
            m("button.btn.btn-danger.rounded-lg.text-red.mt-3.ml-2.justify-center.items-center.btn-sm.md:btn-md.md:h-14.md:w-14", 
              m(SVGTrash, { 
                className: "text-red-500 h-3 w-3 md:h-4 md:w-4"
            }))
        ])
    }
}

const List = {
    view:({ attrs: { array, status} })=>{
        return array.data.map((i)=>{
              return status == "approved" && i.status == "approved" ? m(flex, { 
                   i,
                   className: ".border-green-500.bg-green-50",
                   iconClass: "text-green-500"
                }) 
                : status == "pending" && i.status == "pending" ? m(flex, { 
                    i,
                    className: ".border-yellow-500.bg-yellow-50",
                    iconClass: "text-yellow-500" 
                  }) 
                : status == "rejected" && i.status == "rejected" ? m(flex, { 
                    i,
                    className: ".border-red-500.bg-red-50",
                    iconClass: "text-red-500"
                }) 
                : null
          })
    }
}

export default List;
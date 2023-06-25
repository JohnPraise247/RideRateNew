// import { dSearchInput } from '../components';
import Accordion from "../../../components/dashboard/accordion";
import emptyState from "../../../components/dashboard/emptystate";
import { Fab2 } from "../../../components/dashboard/fab";
import { StatsRow } from "../../../components/dashboard/stats";
import { SVGExclamation, SVGTick, SVGTimes } from "../../../components/svg";
import { getLength, locations } from "../../../app/data";
import { Model, isAdmin } from "../../../app/model";
import List from "../../../components/dashboard/list";
import Table from "../../../components/dashboard/table";


const sectionMain = {
  view:()=>{
    return [
        m(StatsRow, {
        label: [
          "Total Approved",
          "Total Pending",
          "Total Rejected"
        ],
        value: [getLength(locations, "approved"), getLength(locations, "pending"), getLength(locations, "rejected") ],
        svg: [SVGTick, SVGExclamation, SVGTimes]
        // info: [ "","","" ]
      }),
      m(".mt-8"),
      m(Accordion, {
        label: "Approved",
        children: m(List, {array: locations, status: "approved"}),
        svg: SVGTick,
        // className: "border border-green-500",
        className: "shadow",
        open: getLength(locations, "approved") > 0 ? true : false
      }),
      m(Accordion, {
        label: "Pending",
        children: m(List, {array: locations, status: "pending"}),
        svg: SVGExclamation,
        // className: "border border-yellow-500",
        className: "shadow",
        open: getLength(locations, "pending") > 0 ? true : false
      }),
      m(Accordion, {
        label: "Rejected",
        children: m(List, {array: locations, status: "rejected"}),
        svg: SVGTimes,
        // className: "border border-red-500",
        className: "shadow",
        open: getLength(locations, "rejected") > 0 ? true : false
      })
    ]
  }
}

const sectionValidate = {
  view:()=>{
    return m(Table, {
      thead: ["User", "Type", "Role"],
      tbody: [
        [
          m("td.font-bold", "John"),
          m("td", "location"),
          m("td", "member"),
        ]
      ]
    })
  }
}


const sectionHistory = {
  view:()=>{
    return m("h3","History")
  }
}


const locationsSection = {
  view: () => {
    return [
      locations.data.length == 0 ? m(emptyState)
      :(
          m.route.param("mode") == Model.modeList[0] || m.route.param("mode") == null 
          ? m(sectionMain) 
          : isAdmin() && m.route.param("mode") == Model.modeList[1] ? m(sectionValidate)
          : m(sectionHistory)
      ),
      locations.data.length > 0 ? m(Fab2) : null
      // location.data.length > 0 ? m(Fab, {
      //   onclick:()=> console.log(123)
      // }) : null
    ]
      
      
      // m("h1", m.route.get())
      // m("div.tabs",
      //   [
      //     m("a.tab.tab-lgx.tab-lifted",
      //       "Large"
      //     ),
      //     m("a.tab.tab-lgx.tab-lifted.tab-active",
      //       "Large"
      //     ),
      //     m("a.tab.tab-lgx.tab-lifted",
      //       "Large"
      //     )
      //   ]
      // )

    // ]
    //  m("div.tabs.tabs-boxed",
    //   [
    //     m("a.tab",
    //       "Tab 1"
    //     ),
    //     m("a.tab.tab-active",
    //       "Tab 2"
    //     ),
    //     m("a.tab",
    //       "Tab 3"
    //     )
    //   ]
    // ),

      
  }
}

export default locationsSection;

// export const Locations = {
//   view:()=>{
//     return [
//       m(dSearchInput,{id: "locationInput", placeholder: "Search Locations"}),
//       m("#list-group.list-group.mt-5",[
//         Model.locations.list.map((i)=>{
//           return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
//                     m(".name-icon.icon-blue",{onclick:()=>{ Model.edit(i.from, i.to) }}, m("i.bx"+Model.icon.location)),
//                     // m("img.img-circle.mr-3[src='./images/tb.png'][width=36][height=36]"),
//                     m(".w-100.d-flex[style='flex-direction:column']",{onclick:()=>{ Model.edit(i.from, i.to) }},[
//                        m("h5.list-group-item-heading",i.from +" to "+ i.to),
//                        m("small.text-muted", i.desc)
//                     ]),
//                     m(".icon-hover",[
//                       m(".icon-small",{
//                         onclick:()=>{
//                           Model.edit(i.from, i.to, "delete");
//                         }
//                       }, m("i.bx.text-danger"+Model.icon.trash)),
//                       m(".icon-small",{
//                         onclick:()=>{
//                           Model.edit(i.from, i.to)
//                         }
//                       }, m("i.bx"+Model.icon.edit))
//                     ])
                    
//                     // m("small.text-muted",(Model.rates.list.length > 0?(
//                     //   i[0] == Model.rates.list[0][j]?Model.rates.list[0][1]:"???"
//                     //   ):("")))

//                     /*m("small.text-muted",(Model.rates.list.map((a,b)=>{
//                       return (i[0] == Model.rates.list[b][0]?Model.rates.list[b][1]:"???")
//                       // console.log(a[b])
//                       // console.log(Model.rates.list[b][1])
//                     })
//                     ))*/
//                   ])
//         })
//       ])
//     ]
//   }
// }
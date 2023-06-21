// import { Sidebar, Sections } from './components';
// import { Notifications } from '../../notification';

import Main from "../../components/dashboard/main"
import Modal from "../../components/dashboard/modal"


export const Dashboard = {
  view:()=>{
    return [
      m(Main),
      m(Modal),
      // div..fixed.overflow-hidden.z-20.bg-gray-900.bg-opacity-25.inset-0.transform.ease-in-out.transition-opacity.opacity-100.duration-500.translate-x-0
      m("div.fixed.overflow-hidden.z-20.bg-gray-900.bg-opacity-25.inset-0.transform.ease-in-out.transition-all.delay-500.opacity-0.translate-x-full",
        [
          m("section.w-80.md:w-96.right-0.absolute.bg-base-100.h-full.shadow-xl.delay-400.duration-500.ease-in-out.transition-all.transform.translate-x-0.",
            m("div.relative.pb-5.flex.flex-col.h-full",
              [
                m("div.navbar.flex.pl-4.pr-4.shadow-md.",
                  [
                    m("button.float-left.btn.btn-circle.btn-outline.btn-sm",
                      m("svg.h-5.w-5[xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 24 24'][fill='currentColor'][aria-hidden='true']",
                        m("path[fill-rule='evenodd'][d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'][clip-rule='evenodd']")
                      )
                    ),
                    m("span.ml-2.font-bold.text-xl",
                      "Notifications"
                    )
                  ]
                ),
                m("div.overflow-y-scroll.pl-4.pr-4",
                  m("div.flex.flex-col.w-full",
                    [
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3.bg-blue-100",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3.bg-blue-100",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3.bg-blue-100",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3.bg-blue-100",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3.bg-blue-100",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Your sales has increased by 30% yesterday"
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Total likes for instagram post - New launch this week, has crossed 100k "
                      ),
                      m("div.grid.mt-3.card.bg-base-200.rounded-box.p-3",
                        "Your sales has increased by 30% yesterday"
                      )
                    ]
                  )
                )
              ]
            )
          ),
          m("section..w-screen.h-full.cursor-pointer.")
        ]
      ),

      m("div.notification-container.notification-container-empty",
        m("div")
      ),

      m("div.modal.",
        m("div.modal-box.",
          [
            m("button.btn.btn-sm.btn-circle.absolute.right-2.top-2",
              "✕"
            ),
            m("h3.font-semibold.text-2xl.pb-6.text-center"),
            m("div")
          ]
        )
      )
      // m(Sections),
      // m(Notifications) 
    ]
  }
}
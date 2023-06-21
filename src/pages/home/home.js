// import { Main } from './main';
import AOS from 'aos';
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Cookie from "../../components/cookie";
import { Button } from "../../components/button";
import { 
    SVGDestination, 
    SVGTravellers, 
    SVGService1, 
    SVGService2, 
    SVGService3, 
    SVGService4, 
    SVGService5, 
    SVGService6,
    SVGApple,
    SVGGoogleplay
} from "../../components/svg";






const Card = {
    view:({ attrs:{ title, sub, svg, svgclass = "bottom-0" }})=>{
        return m(".card.rounded-xl.overflow-hidden.p-6.bg-secondary.duration-200.hover:scale-105.select-none.z-50.h-48.inline-block.active:scale-100.active:ease-in-out.active:duration-100[role=button]", [
            m("div.relative.z-10.w-full.h-full",
                m(".pb-14.sm:pr-16.md:pb-0.md:pr-26.pr-0",
                    [
                        m("h3.font-semibold.mt-0.text-lg.md:text-2xl.mb-2.break-words", title),
                        m("span.inline-block.mt-0.text-base.leading-6.font-normal.mb-0.text-gray-400.max-md:!text-sm.hidden.lg:block", sub)
                    ]
                )
            ),
            svg != null ? m(svg, { 
                className: "absolute right-0 "+svgclass+" z-0 max-h-[130px] max-w-[130px] !max-w-[85px] !max-h-[85px] md:!max-h-[130px] md:!max-w-[130px]"
             }) : null   
        ])
    }
}


const Home = {
    oncreate:()=>{
        AOS.init({ once: true });
    },
    view: () => {
        return [
            m(NavBar),
            //HERO
            m("div.hero.min-h-screen",//.bg-base-200,.px-2  
            {
                // style: "background-image:url(images/default.jpg)"
            },
            // m("div.hero-overlay.bg-opacity-20"),
                // m("div.hero-content.flex-col.mb-12",
                m("div.hero-content.flex-col.mb-24.md:flex-row-reverse.items-start.md:items-center.lg:items-center",//.mb-12.md:mb-auto.md:flex-row-reverse.items-start.md:items-center.lg:items-center.bg-red-300
                // { "style": { "background-image": "url(bg.jpg)" } },
                    [
                        
                        // m("img.max-w-sm.rounded-lg.shadow-2xl[src='images/2.jpg']"),
                        m(SVGTravellers, { className: "md:h-96 md:w-96 w-48 h-48" }),
                        m("div",
                            [
                                m("h1.text-5xl.font-bold", "Empowering Your Journey"),
                                // m("h1.text-5xl.font-bold.text-white", "Empowering Your Journey"),
                                m("p.py-6", "Explore Real-Time Travel Rates for Vehicles and Make Informed Decisions Every Mile of the Way"),
                                m(Button, {
                                    label: "Learn More",
                                    // type: "a",
                                    className: ".btn-primary.mr-2.text-white.font-bold.capitalize"
                                }),
                                m(Button, {
                                    label: "Check rates",
                                    // type: "a",
                                    className: ".btn-secondary.font-bold.capitalize"
                                })
                            ]
                        )
                    ]
                )
            ),




            
            //What we do
            m("div.hero.block.bg-secondary.py-6.px-6.md:px-2.md:py-24",
                m("div.hero-content.flex-col.py-12.md:flex-row.items-start.md:items-center.lg:items-center", 
                    [
                        // m("img.max-w-sm.rounded-lg.shadow-2xl[src='/images/stock/photo-1635805737707-575885ab0820.jpg']"),
                        m(SVGDestination, { className: "md:w-[256rem] md:h-96 w-0 h-0" }),
                        m(".break-normal.text-center.md:text-left.md:ml-10.lg:ml-10",
                            [
                                m("h2.text-2xl.font-bold.text-center.md:text-left.md:text-4xl.lg:text-left", "What we do"),
                                m("p.text-md.font-light.py-6.text-gray-500.text-center.md:text-left.md:text-xl.lg:text-left", "At RideRate, we are dedicated to providing you with a seamless and comprehensive platform that keeps you informed about the current travel rates for vehicles. Our mission is to empower travelers like you with the knowledge and insights needed to make informed decisions and optimize your journeys."),
                                /*m(Button, {
                                    label: "Learn more",
                                    // type: "a",
                                    className: ".bg-gray-600.text-white.btn-block"
                                    // className: ".bg-transparent.btn-outlsine.border-primary.hover:bg-primary.hover:text-white"
                                }),*/
                                m("button.btn.btn-outline.font-bold.capitalize.btn-ghost.btn-sm.md:btn-md", "Learn more")
                            ]
                        )
                    ]
                )
            ),
            
            
            
            
            
            
            
            
            //Our Services
            m("div.hero.block.py-48.px-2.md:px-12",
                m("h3.text-2xl.font-bold.text-center.md:text-4xl", "Features"),
                        
                m("div.hero-content.flex-col.py-12.md:flex-row.items-center", 
                    [
                        // m("img.max-w-sm.rounded-lg.shadow-2xl[src='/images/stock/photo-1635805737707-575885ab0820.jpg']"),
                        // m(SVGDestination, { className: "md:w-[256rem] md:h-96 w-0 h-0" }),
                        m(".grid.gap-2.md:gap-4.grid-cols-2.md:grid-cols-3", [
                            m(Card, { 
                                title: "Real-Time Rates", 
                                sub: "Get updates at your fingertips with RideRate",
                                // sub: "Get Real-time travel rate updates at your fingertips with RideRate. Stay informed and make smart decisions.",
                                svg: SVGService1
                             }),
                            // m(Card, { title: "Real-Time Rates", sub: "We provide you with real-time rates for vehicles, so  you can make informed decisions about your travel plans." }),
                            m(Card, { 
                                title: "Diverse vehicle options.", //Wide Range of Vehicles
                                sub: "Complete coverage. Accurate rates. RideRate has it all for every vehicle.",
                                // sub: "All vehicles covered. Accurate rates. RideRate has you covered with a wide range of vehicles, ensuring you have the details you need.",
                                svg: SVGService2,
                                svgclass: "bottom-[-30px] width-[400px]"
                             }),
                            m(Card, { 
                                title: "User-Friendly Interface", 
                                sub: "Seamless and intuitive. RideRate simplifies accessing travel rates.",
                                // sub: "Intuitive and seamless. RideRate's user-friendly interface makes accessing travel rates effortless.",
                                svg: SVGService3
                             }),
                            m(Card, { 
                                title: "Recommendations", 
                                sub: "Customized recommendations for optimal travel.",
                                // sub: "Tailored suggestions. RateTracker offers personalized recommendations to optimize your travel experience.",
                                svg: SVGService4
                             }),
                            m(Card, { 
                                title: "Insights and Analysis", 
                                sub: "Data-driven insights for strategic decisions. ",//RateTracker helps you understand travel trends, market fluctuations, and peak seasons to make informed choices.
                                svg: SVGService5
                             }),
                            m(Card, { 
                                title: "Community Engagement", 
                                sub: "Fuel your travel journey with RideRate's engaged community.", 
                                // sub: "Fuel your travel journey with RideRate's vibrant community of engaged travelers.", 
                                // sub: "Connect and enrich your travel journey with RideRate community of engaged travelers.", 
                                // sub: "Vibrant traveler community. Engage, share, and learn at RideRate. Contribute and collaborate for a rewarding journey.", 
                                svg: SVGService6 
                            })

                        ]),
                        // 
                        //     m("div.card.w-96.bg-base-100.shadow-xl.inline-block",
                        //         m("div.card-body",
                        //             [
                        //                 m("h2.card-title",
                        //                     "Card title!"
                        //                 ),
                        //                 m("p",
                        //                     "If a dog chews shoes whose shoes does he choose?"
                        //                 ),
                        //                 // m("div.card-actions.justify-end",

                        //                 // )
                        //             ]
                        //         )
                        //     ),
                            /*m("div.card.shadow-lg.rounded-xl.bg-base-100.duration-200.hover:scale-105.select-none.z-50.inline-block.cursor-pointer.active:scale-100.active:ease-in-out.active:duration-100[role=button]",[
                                m("div.relative.z-10.w-full.h-full",
                                    m(".pb-14.md:pb-0.md:pr-26[data-hp-menu='services'][data-hp-target='rides']",
                                        [
                                            m("h5.font-semibold.mt-0.text-lg.md:text-2xl.mb-2[data-hp-menu='services'][data-hp-target='rides']",
                                                "Rides "
                                            ),
                                            m("span.inline-block.mt-0.text-base.leading-6.font-normal.mb-0.text-secondary.max-md:!text-sm[data-hp-menu='services'][data-hp-target='rides']",
                                                "Request in seconds, ride in minutes."
                                            )
                                        ]
                                    )
                                ),
                                // m(SVGDestination, { className: "md:w-[256rem] md:h-96 w-0 h-0" })     
                            ])*/

                        // ]),
                        /*m(".break-normal.text-center.md:text-left.md:ml-10.lg:ml-10",
                            [
                                
                                m("p.text-md.font-light.py-6.text-gray-500.text-center.md:text-left.md:text-xl.lg:text-left", "At RideRate, we are dedicated to providing you with a seamless and comprehensive platform that keeps you informed about the current travel rates for vehicles. Our mission is to empower travelers like you with the knowledge and insights needed to make informed decisions and optimize your journeys."),
                                m(Button, {
                                    label: "Check rates",
                                    type: "a",
                                    className: ".btn-secondary"
                                    // className: ".bg-transparent.btn-outlsine.border-primary.hover:bg-primary.hover:text-white"
                                })
                            ]
                        )*/
                    ]
                )
            ),






            // m(".flex.w-full.min-h-full.py-8.md:py-23.bg-neutral-primary.relative",[
            // // m(".contaminer.px-2",[
            //     m(".columns-6","cwwfwf"),
            //     m(".columns-6","cwwfwf")

            // ]),
            /*m(".main",
                //About Sections
                m("section.section-spacing.section-about",
                    m("#about.container",
                        m(".row.d-flex.align-items-center.justify-content-center", [
                            m(".col-sm-6.mr-auto.text-center.mb-5.img-mobile",
                                m("img[data-aos='zoom-in-up'][width=54%][src='./images/mobile_phone.webp']"),
                            ),
                            m(".col-sm-6.pt-3",
                                m("h3.section-heading[data-aos='fade-up'][data-aos-delay='']", "What we do"),
                                // m("h3[style='font-weight:600']", "R i d e R a t e"),
                                m("[data-aos='fade-up'][data-aos-delay='300']", [
                                    m("p.desc", "RideRate helps you to automate various scheduling activities of the transport system and optimize the use of premium resources. Concerned authorities can easily use the system to set the cost of each journey.The solution, that we are going to provide you, has been especially designed considering the challenges University students come across. Some of these challenges are inadequate information, resource optimization, and stability. Emphasis has been given to easy-to-use interface. The users need not to be programmers or database experts to benefit from this system."),
                                    m(".section-btn",
                                        m("a.btn.btn-primary[href='javascript:void(0)']" + Model.btnStyle,//change to link because of mithril error on click
                                            [
                                                m("i.bx" + Model.icon.bulb),
                                                m("span", "Read more")
                                            ]
                                        )
                                        //    m(Button,{
                                        //   name: "Read more",
                                        //   icon: Model.icon.bulb,/*bx-sm*/
                                        //   class:".btn-primary",
                                        //   onclick:()=>{

                                        //   }
                                        //  })
                                        // m("a.btn.btn-primary[href='#/']",m("i..mr-2[style='position: relative;top: 3px;']"), "")
                //                     )
                //                 ])
                //             )
                //         ]
                //         )
                //     )
                // ),



                //Features Sections
                /*m("section.section-spacing.section-features",
                    // m(".bg-overlay-black"),
                    m(".container",
                        m("h3.section-heading[data-aos='fade-up'][data-aos-delay='']", "Features"),
                        // m(".space-50"),
                        m(".mt-5.row", [
                            m(".col-sm-4[data-aos='fade-up'][data-aos-delay='100']",
                                m(".space-50"),
                                m(".text-center.mb-5",
                                    [
                                        m("div.wrap-icon.icon-primary", m("i.bx.bx-refresh")),
                                        m("h4.feature-title", "Real-Time Updates"),
                                        m("p.desc", "Get accurate and up-to-date information on transportation fares")
                                    ]
                                )
                            ),
                            m(".col-sm-4[data-aos='fade-up'][data-aos-delay='200']",
                                m(".space-50"),
                                m(".text-center.mb-5",
                                    [
                                        m("div.wrap-icon.icon-primary", m("i.bx.bx-car")),
                                        m("h4.feature-title", "Multiple Transportation Options"),
                                        m("p.desc", "Find and compare prices for a variety of transportation options, including taxis, ride-sharing services, public transit, and more.")
                                    ]
                                )
                            ),
                            m(".col-sm-4[data-aos='fade-up'][data-aos-delay='300']",
                                m(".space-50"),
                                m(".text-center.mb-5",
                                    [
                                        m(".wrap-icon.icon-primary", m("i.bx.bx-time")),
                                        m("h4.feature-title", "Save Time"),
                                        m("p.desc", "Avoid the hassle of manually checking fares by using RideRate to get real-time updates.")
                                    ]
                                )
                            )
                        ])
                        // m(".space-50")
                    )
                    // m("div.img-abs[style=background-image: url(images/image_4.jpg)]")
                    // <div style="background-image: url(&quot;images/bg.jpg&quot;); filter: blur(43.8667px);" class="img-src"></div>
                ),




                //Mobile app download section
                m("section.section-spacing.blue-gradient",
                    m(".container",
                        m(".row.align-items-center", [
                            m(".col-md-6.mr-auto.text-center.mb-5",
                                m("h2[style='font-weight:600'][data-aos='fade-up'][data-aos-delay='']",
                                    "Get our mobile App"
                                )
                            ),
                            m(".col-md-6.text-center.pt-3",
                                m("p",
                                    [
                                        m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='javascript:void(0)'][data-aos='zoom-in'][data-aos-delay='100']" + Model.btnStyle,
                                            [
                                                m("i.bx.bxl-apple"),
                                                m("span", "App store")
                                            ]
                                        ),
                                        m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='javascript:void(0)'][data-aos='zoom-in'][data-aos-delay='200']" + Model.btnStyle,
                                            [
                                                m("i.bx.bxl-play-store"),
                                                m("span", "Google play")
                                            ]
                                        )
                                    ]
                                )
                            )
                        ]
                        )
                    )
                )

            ),*/

            // Get our app
            m("div.hero.bg-primary.block.py-28.px-2.md:px-12.relative.overflow-hidden",//py-48
                // m("h3.text-2xl.font-bold.text-center.md:text-4xl.text-white", "Get our App"),

                m("div.hero-content.flex-col.py-12.md:flex-row.items-center", [//.md:items-center.lg:items-center
                    m(".grid.grid-cols-1.md:grid-cols-2", [//.md:grid-cols-2  //.gap-2.md:gap-4
                        m("div.text-center",[
                            m("h3.text-2xl.font-bold.md:text-3xl.text-white.mb-12", "Get our App"),
                            m(Button, {
                                label: "App store",
                                // type: "a",
                                className: ".btn-secondary.font-bold.capitalize.bg-base-100.w-40.mb-4.mr-4",
                                svg: m(SVGApple, {className: "w-5 h-5 pr-1"})
                            }),
                            m(Button, {
                                label: "Play store",
                                // type: "a",
                                className: ".btn-secondary.font-bold.capitalize.bg-base-100.w-40.mr-4",
                                svg: m(SVGGoogleplay, {className: "w-5 h-5 pr-1"})
                            }),

                        ]),
                        // m(SVGMobile, { className: "absolute bottom-0 right-0 w-96 hidden md:block lg:right-32" })
                        // m("img.absolute.bottom-0.right-0.w-96.hidden.md:block.lg:right-32[src=images/mobile.webp]"),
                        m("img.absolute.-bottom-32.right-0.w-64.hidden.md:block.md:right-16.lg:right-48[src=images/mobile_phone.png][alt = mobile phone]") 

                   ])
                    
                    // m(".card-hero", [
                        // m(SVGMobile, { className: "w-64" })
                    // ]),
                    
                    
                ])
                
            ),
            m(Footer),
            m(Cookie)
        ]
    }
}

// const Home = {
//     oncreate:() =>{ 
//         AOS.init({ once: true });
//         //startEvent: 'DOMContentLoaded'
//       // name of the event dispatched on the document, that AOS should initialize on
   
//      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//      // offset: 120, // offset (in px) from the original trigger point
//      // delay: 0, // values from 0 to 3000, with step 50ms
//      // duration: 400, // values from 0 to 3000, with step 50ms
//      // easing: 'ease', // default easing for AOS animations
//       // whether animation should happen only once - while scrolling down
//      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//     },
//     view:() =>{
//         return [
//             m(NavBar),
//             m(Main),
//             m(Footer),
//             m(Cookie)
//         ]
//     }
// }
export default Home;
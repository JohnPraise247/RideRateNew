import { createNew, locations } from "../../app/data";
import TextInput from "../input";


const CreateLocationModal = {
    oninit:(vnode)=>{
        vnode.state.start = "";
        vnode.state.destination = "";
        vnode.state.description = "";
        vnode.state.clicked = false
    },
    view:(vnode)=>{
        return [
            m("input.modal-toggle[type='checkbox'][id='modalCreateLocation']"),
            m("div.modal.modal-bottom.sm:modal-middle",
                m("div.modal-box.relative",
                    [
                        m("label.btn.btn-primary.text-white.btn-sm.btn-circle.absolute.right-2.top-2[for='modalCreateLocation']", "✕"),
                        m("h3.text-lg.font-bold", "New location Entry"),
                        m(".space-y-2", [
                            m(".flex", [
                                m(TextInput, {
                                    id: "inputStart",
                                    labelA: "Start",
                                    // labelB: "",//"must be 4 characters long or more",
                                    type: "text",
                                    className: vnode.state.start.trim().length == 0 && vnode.state.clicked ? "input-error" : "",
                                    classNameMain: ".mr-1",
                                    value: vnode.state.start,
                                    oninput: (e) => { 
                                        vnode.state.start = e.target.value;
                                        vnode.state.clicked = false;
                                    }
                                }),
                                m(TextInput, {
                                    id: "inputDestination",
                                    labelA: "Destination",
                                    className: vnode.state.destination.trim().length == 0 && vnode.state.clicked ? "input-error" : "",
                                    classNameMain: ".ml-1",
                                    value: vnode.state.destination,
                                    oninput: (e) => { 
                                        vnode.state.destination = e.target.value;
                                        vnode.state.clicked
                                    },
                                    type: "text"
                                })
                            ]),
                            m(TextInput, {
                                id: "inputDescription",
                                labelA: "Description",
                                value: vnode.state.description,
                                oninput: (e) => vnode.state.description = e.target.value,
                                type: "text"
                            })
                        ]),
                        m(".flex.justify-between.items-center", [
                            m("div.modal-action",
                                m("label.btn.btn-ghost[for='modalCreateLocation']", "Cancel")
                            ),
                            m("div.modal-action",
                                m("label.btn.btn-primary.text-white" + (
                                    vnode.state.start.trim().length > 0 && vnode.state.destination.trim().length > 0 ? "[for='modalCreateLocation']" : ""
                                ), {
                                    onclick:()=>{
                                        vnode.state.clicked = true;
                                        vnode.state.start.trim().length > 0 && vnode.state.destination.trim().length > 0 ? (
                                            createNew(
                                                vnode.state.start.trim(),
                                                vnode.state.destination.trim(),
                                                vnode.state.description.trim()
                                            ),
                                            vnode.state.clicked = false,
                                            vnode.state.start = vnode.state.destination = vnode.state.description = ""
                                        )
                                        : null
                                    }
                                }, "Create")
                            )
                        ])
                    ]
                )
            )
        ]
    }
}

/* if($("#locationInput1").val().trim().length > 0 && $("#locationInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.locations.list.push({
                      from: $("#locationInput1").val(), 
                      to: $("#locationInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set(path+"/location", null);
                    addSuccess('Location has been created');
                    /*window.location.assign('/#/u/location')*/     
               

const Modal = {
    view:()=>{
        return [
            // m("input.modal-toggle[type='checkbox'][id='my-modal-6']"),
            // m("div.modal.modal-bottom.sm:modal-middle",
            //     m("div.modal-box",
            //         [
            //             m("h3.font-bold.text-lg",
            //                 "Congratulations random Internet user!"
            //             ),
            //             m("p.py-4",
            //                 "You've been selected for a chance to get one year of subscription to use Wikipedia forfree!"
            //             ),
            //             m("div.modal-action",
            //                 m("label.btn.btn-primary.text-white[for='my-modal-6']",
            //                     "Yay!"
            //                 )
            //             )
            //         ]
            //     )
            // )
            // m("label.btn[for='modalCreateLocation']",
            //     "opwwfl"
            // ),
            //modal-bottom sm:modal-middle
            /*m("div", { "class": "fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10" },
                m("div", { "class": "max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white" },
                    m("div", { "class": "w-full" },
                        m("div", { "class": "m-8 my-20 max-w-[400px] mx-auto" },
                            [
                                m("div", { "class": "mb-8" },
                                    [
                                        m("h1", { "class": "mb-4 text-3xl font-extrabold" },
                                            "Turn on notifications"
                                        ),
                                        m("p", { "class": "text-gray-600" },
                                            "Get the most out of Twitter by staying up to date with what's happening."
                                        )
                                    ]
                                ),
                                m("div", { "class": "space-y-4" },
                                    [
                                        m("button", { "class": "p-3 bg-black rounded-full text-white w-full font-semibold" },
                                            "Allow notifications"
                                        ),
                                        m("button", { "class": "p-3 bg-white border rounded-full w-full font-semibold" },
                                            "Skip for now"
                                        )
                                    ]
                                )
                            ]
                        )
                    )
                )
            ),*/
            m(CreateLocationModal)
                       
                        
                        // m("p.py-4",
                        //     "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"
                        // )
        ]
    }
}

export default Modal;
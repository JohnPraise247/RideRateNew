import { createEntry, deleteEntry, editEntry, locations } from "../../app/data";
import { Model } from "../../app/model";
import TextInput from "../input";


const locationModal = {
    oninit:(vnode)=>{
        vnode.state.start = "";
        vnode.state.destination = "";
        vnode.state.description = "";
        vnode.state.clicked = false
    },
    view:(vnode)=>{
        var createNew =  Model.modal.location.title == "New location entry"
        

        return [
            // m("input.modal-toggle[type='checkbox']" + id),
            m("dialog.modal.modal-bottom.sm:modal-middle[id='modalLocation']",
                m("form.modal-box[method='dialog']",
                    [
            // m("div.modal.modal-bottom.sm:modal-middle",
            //     m("div.modal-box.relative",
                    // [
                        m("button.btn.btn-primary.text-white.btn-sm.btn-circle.absolute.right-2.top-2", "✕"),
                        m("h3.text-lg.font-bold.text-base-400", Model.modal.location.title),
                        m(".space-y-2", [
                            m(".flex", [
                                m(TextInput, {
                                    id: "inputStart",
                                    labelA: "Start",
                                    // labelB: "",//"must be 4 characters long or more",
                                    type: "text",
                                    className: vnode.state.start.trim().length == 0 && vnode.state.clicked ? "text-base-400 input-error" : "text-base-400 ",
                                    classNameMain: ".mr-1",
                                    value: createNew ? vnode.state.start : Model.modal.location.start,
                                    oninput: (e) => { 
                                        createNew 
                                        ? vnode.state.start = e.target.value 
                                        : Model.modal.location.start = e.target.value
                                        vnode.state.clicked = false;
                                    }
                                }),
                                m(TextInput, {
                                    id: "inputDestination",
                                    labelA: "Destination",
                                    className: vnode.state.destination.trim().length == 0 && vnode.state.clicked ? "text-base-400 input-error" : "text-base-400 ",
                                    type: "text",
                                    classNameMain: ".ml-1",
                                    value: createNew ? vnode.state.destination : Model.modal.location.destination,
                                    oninput: (e) => { 
                                        createNew 
                                        ? vnode.state.destination = e.target.value 
                                        : Model.modal.location.destination = e.target.value
                                        vnode.state.clicked
                                    }
                                })
                            ]),
                            m(TextInput, {
                                id: "inputDescription",
                                labelA: "Description",
                                type: "text",
                                className:"text-base-400",
                                value: createNew ? vnode.state.description : Model.modal.location.description,
                                oninput: (e) => createNew ? vnode.state.description = e.target.value : Model.modal.location.description = e.target.value
                            }),
                            m(".flex.overflow-x.grid.gap-2.grid-cols-1.md:grid-cols-2",[
                                (!createNew) ? m("span.badge.bg-base-200.border-0.text-gray-400.text-xs", "Date Created:" + Model.modal.location.dateCreated) : null,
                                (!createNew && Model.modal.location.dateUpdated != "") ? m("span.badge.bg-base-200.border-0.text-gray-400.text-xs.ml-auto", "Date Updated:" + Model.modal.location.dateUpdated) : null
                            ])

                            
                        ]),
                        m(".flex.justify-between.items-center", [
                            m("div.modal-action",
                                m("button.btn.btn-ghost.text-base-400", "Cancel")
                            ),
                            m("div.modal-action",
                                m(((createNew && vnode.state.start.trim().length > 0 && vnode.state.destination.trim().length > 0) || (!createNew && Model.modal.location.start.trim().length > 0 && Model.modal.location.destination.trim().length > 0) ? "button" : "label")+".btn.btn-primary.text-white" //+ (
                                    // createNew && vnode.state.start.trim().length > 0 && vnode.state.destination.trim().length > 0 ? label 
                                    // : !createNew && Model.modal.location.start.trim().length > 0 && Model.modal.location.destination.trim().length > 0 ? label : ""
                                , {
                                    onclick:()=>{
                                        vnode.state.clicked = true;

                                        createNew && vnode.state.start.trim().length > 0 && vnode.state.destination.trim().length > 0 ? (
                                            createEntry(
                                                vnode.state.start.trim(),
                                                vnode.state.destination.trim(),
                                                vnode.state.description.trim()
                                            ),
                                            vnode.state.clicked = false,
                                            vnode.state.start = vnode.state.destination = vnode.state.description = ""
                                        )
                                        :!createNew && Model.modal.location.start.trim().length > 0 && Model.modal.location.destination.trim().length > 0 ? (
                                            editEntry(locations),
                                            vnode.state.clicked = false,
                                            Model.modal.location.start = Model.modal.location.destination = Model.modal.location.description = ""
                                        )
                                        : null
                                    }
                                }, (
                                    createNew ? "Create" : "Save"
                                ))
                            )
                        ])
                    ]
                )
            )
        ]
    }
}


const deleteModal = {
    view:()=>{
        return m("dialog.modal.modal-bottom.sm:modal-middle[id='modalDelete']",
            m("form.modal-box[method='dialog']",
                [
                    m("button.btn.btn-accent.text-white.btn-sm.btn-circle.absolute.right-2.top-2", "✕"),
                    m("h3.text-lg.font-bold.text-accent", "Delete entry?"),
                    m(".space-y-2", [
                        m("p.text-base-400", "Are  you sure you want to delete this entry?"),
                        m("small.text-accent", "This action cannot be undone")
                    ]),
                    m(".flex.justify-between.items-center", [
                        m("div.modal-action",
                            m("button.btn.btn-ghost.text-base-400", "Cancel")
                        ),
                        m("div.modal-action",
                            m("button.btn.btn-accent.text-white", {
                                onclick: () => deleteEntry(locations, Model.modal.location.id)
                            }, "Delete")
                        )
                    ])
                ]
            )
        )
        
        
        
       /* [
            m("input.modal-toggle[type='checkbox']" + id),
            m("div.modal.modal-bottom.sm:modal-middle",
                m("div.modal-box.relative",
                    [
                        m("label.btn.btn-error.text-white.btn-sm.btn-circle.absolute.right-2.top-2" + label, "✕"),
                        m("h3.text-lg.font-bold.text-error", "Delete entry?"),
                        m(".space-y-2", [
                            m("p", {tag:"br"},"Are  you sure you want to delete this entry?"),
                            m("small.text-error", "This action cannot be undone")
                        ]),
                        m(".flex.justify-between.items-center", [
                            m("div.modal-action",
                                m("label.btn.btn-ghost" + label, "Cancel")
                            ),
                            m("div.modal-action",
                                m("label.btn.btn-error.text-white" + label, {
                                    onclick: () => deleteEntry(locations, Model.modal.location.id)
                                }, "Delete" )
                            )
                        ])
                    ]
                )
            )
        ]*/
    }
}

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
            // m("label.btn[for='modalLocation']",
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
            m(locationModal),
            m(deleteModal)
                       
                        
                        // m("p.py-4",
                        //     "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"
                        // )
        ]
    }
}

export default Modal;
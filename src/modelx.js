import $ from "jquery";
import { navbarOpen } from "./bs";
import { addDanger, addSuccess } from "./notification";
import PocketBase from './pocketbase.umd';

// export const pb = new PocketBase('http://127.0.0.1:8090');
export const pb = new PocketBase((window.location.host != "localhost:8020" && window.location.host != "localhost:9078") ?'https://pocketbase.io/':'http://127.0.0.1:8090');
// export const pb = new PocketBase(navigator.onLine ?'https://pocketbase.io/':'http://127.0.0.1:8090');
// export var isAdmin = () => {
//     return m.route.get()
// }
// alert(isAdmin())
// export function Main({ attrs }) {

export var Auth = {
    adminSignin: false,
    adminUsername: "John Doe",//Support email --> john@karenkey.com
    adminPassword: "12345678",
    email: "john@doe.com",
    username: "John Doe",
    phonenumber: "",
    password: "12345678",
    signin: false,
    accountCreated: false,
    setAdminUsername: function(value) {
        Auth.adminUsername = value
    },
    setAdminPassword: function(value) {
        Auth.adminPassword = value
    },
    canSubmitAdmin: function() {
        return Auth.adminUsername.trim() !== "" && Auth.adminPassword.trim() !== "" && Auth.adminPassword.length >= 8
    },
    adminLogin: async function () {
        try {
            await pb.collection('users').authWithPassword(
                Auth.adminUsername.replaceAll(" ", "_"),
                Auth.adminPassword,
            );

            if (pb.authStore.model.id != null || pb.authStore.model.id != "") {
                Auth.adminSignin = true;
                m.route.get().length > 7 ? m.route.set(m.route.get()) : m.route.set('/admin/dashboard')
                // setCookie("signin", true, 7);
            //    console.log(123)
            }
        } catch (error) {
            Model.disableBtn = null
            m.redraw()
            addDanger(error)
            addDanger(error.message)
        }
    },
    setUsername: function(value) {
        Auth.username = value
    },
    setEmail: function(value) {
        Auth.email = value
    },
    setPhonenumber: function(value) {
        Auth.phonenumber = value
    },
    setPassword: function(value) {
        Auth.password = value
    },
    canSubmit: function() {
        return Auth.email.trim() !== "" && Auth.username.trim() !== "" && Auth.password.trim() !== "" && Auth.password.length >= 8
    },
    login: async function() {
        try {
            await pb.collection('users').authWithPassword(
                Auth.email,
                Auth.password,
            );

            

            // console.log(pb.authStore.isValid);
            // console.log(pb.authStore.token);
            // console.log(pb.authStore.model.id);
            // sessionStorage.setItem("token", pb.authStore.token)
            if (pb.authStore.model.id != null || pb.authStore.model.id != "") {
                Auth.signin = true;
                
                // setCookie("signin", true, 7);
                m.route.get().length > 7 ? m.route.set(m.route.get()) : m.route.set('/u/dashboard');

                // Auth.accountCreated = true;
                m.redraw()
                Model.disableBtn = null;
            }
        } catch (error) {
            Model.disableBtn = null
            m.redraw()
            addDanger(error.message)
        }
    },
    signup: async function() {
        const data = {
            type: Model.userType, 
            email: Auth.email, 
            emailVisibility: true,
            username: Auth.username.replaceAll(" ", "_"), 
            password: Auth.password,
            passwordConfirm: Auth.password
            // "username": "test_username",
            // "email": "test@example.com",
            // "password": "12345678",
            // "passwordConfirm": "12345678",
            // "name": "test"
        };
        try{
            const record = await pb.collection('users').create(data);

            if(record.id != null || record.id != ""){
               Auth.accountCreated = true;
               m.redraw()
               Model.disableBtn = null;
            }
        }catch(error){
            Model.disableBtn = null
            m.redraw()
            addDanger(error.message)
        }

        // m.request({
        //     method: "POST",
        //     url: "http://127.0.0.1:8090/api/collections/users/records",
        //     params: { data }
        // }).then(function(data) {
        //     console.log(JSON.stringify(data))
        //         // localStorage.setItem("auth-token", data.token)
        //         // m.route.set("/secret")
        // }).catch(function(e) {
        //     console.log(JSON.stringify(e))
        // })
    }
}

export var Model = {
    anchor: "", //scrollToAnchor
    // hasHashChanged: false,//helps check if app changes
    transparent: true,
    sidebar: "",//queries selector .sidebar
    sidebarBtn: "",//queries selector .sidebarBtn
    acceptCookie: null,
    btnStyle: ".btn-br-10",
    userType: "contributor",
    disableBtn: null,//disables btn on signup
    // select:"",
    selectAll: true,
    // mode: "validate",
    localStorage:{
        name: "rr_data"
    },
    data:{
        status: ""
    },
    
    // uniColor: ".green-t",//maintain the same color scheme in location, rates etc
    // colorIndex:-1,//controls how colors are picked
    // colorClasses:[".icon-blue",".icon-green",".icon-yellow",".icon-red"],
    icon: {
        dashboard: ".bx-grid-alt",
        location: ".bx-trip", //current-location
        park: ".bxs-car-garage",
        rates: ".bx-dollar-circle",
        vehicles: ".bx-car",
        user: ".bx-group",//user-circle,
        consumer: ".bx-user-pin",//.bxs-user-rectangle
        searchAlt: ".bx-search-alt",
        leftArrowAlt: ".bx-left-arrow-alt",
        chevronRight: ".bx-chevron-right",
        bulb: ".bx-bulb",
        plus: ".bx-plus",
        logOut: ".bx-log-out",
        trash: ".bx-trash",
        eye: ".bx-show",
        // settings: ".bx-cog",
        edit: ".bx-pencil",
        check: ".bx-check",
        warning: ".bx-error-circle",//question-mark
        cancel: ".bx-x",
        logo: ".bx.bx-car",
    },
    locations: {
        list: [
                { from: "Ikole", to: "Akure", desc: "No Description" },
                { from: "Oye/Ikole", to: "Lagos", desc: "No Description" },
                { from: "Oye/Ikole", to: "Ogun", desc: "No Description" },
                { from: "Oye/Ikole", to: "Ondo", desc: "No Description" },
                { from: "Oye/Ikole", to: "Abuja", desc: "No Description" },
                { from: "Oye/Ikole", to: "Kogi", desc: "No Description" },
                { from: "Oye/Ikole", to: "Oyo", desc: "No Description" },
                { from: "Oye/Ikole", to: "Edo", desc: "No Description" }
            ]
            // list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    parks: {
        list: [
            { parkname: "Shell", location: "Ikole", desc: "No Description" }
        ]
    },
    rates: {
      data: [
        {
           id: "rvxy3jwtdfb",
           price1: "6000",
           price2: "",
           location: {
               id: "",
               start: "Oye/Ikole",
               destination: "Lagos",
               description: "",
               dateCreated: "",
               dateUpdated: "",
               isDelete: false
           },
           status: "approved",
           isApproved: "",
           sentForApproval: "",
           dateCreated: "",
           dateUpdated: "",
       },
        {
           id: "wi0z9p4ufs",
           price1: "3000",
           price2: "3500",
           location: {
               id: "",
               start: "Ikole",
               destination: "Akure",
               description: "",
               dateCreated: "",
               dateUpdated: "",
               isDelete: false
           },
           status: "approved",
           isApproved: true,
           sentForApproval: true,
           dateCreated: "",
           dateUpdated: "",
       },
        {
           id: "9tqc39p1vjt",
           price1: "10101",
           price2: "",
           location: {
               id: "",
               start: "",
               destination: "",
               description: "",
               dateCreated: "",
               dateUpdated: "",
               isDelete: false
           },
           status: "pending",
           isApproved: false,
           sentForApproval: true,
           dateCreated: "",
           dateUpdated: "",
       },
        {
           id: "ntxy5nwtzvs",
           price1: "888",
           price2: "",
           location: {
               id: "",
               start: "Fake rate",
               destination: "",
               description: "",
               dateCreated: "",
               dateUpdated: "",
               isDelete: false
           },
           status: "rejected",
           isApproved: false,
           sentForApproval: true,
           dateCreated: "",
           dateUpdated: "",
       }
      ] 
    },
    vehicles: {
        list: [
            // { name: "toyota", park: "Shell" }
        ]
    },
    addNew: () => {
        var path, url = m.route.get().slice(1, 6);
        url == "admin" ? path = "/admin" : path = "/u"

        if (m.route.param("urlA") == "location") {
            m.route.set(path+"/location/new")
        } else if (m.route.param("urlA") == "parks") {
            m.route.set(path+"/parks/new")
        } else if (m.route.param("urlA") == "rates") {
            m.route.set(path+"/rates/new")
        } else if (m.route.param("urlA") == "vehicles") {
            m.route.set(path+"/vehicles/new")
        }
    },
    edit: (id, type, status) => {
        var path, urlA = m.route.param("urlA"), usertype = m.route.get().slice(1, 6);
        usertype == "admin" ? path = "/admin" : path = "/u"
        m.route.param("selected") == "All" || m.route.param("selected") == ""? Model.selectAll = true : Model.selectAll = false
        Model.data.status = status

        if (urlA == "location") {
            // Model.locations.list.map((e) => {
            //     if (e.from == a && e.to == b) {
            //         localStorage.setItem("location", JSON.stringify({
            //             from: e.from,
            //             to: e.to,
            //             desc: e.desc
            //         }))
            //         // m.redraw()
            //         type == "delete" ? m.route.set(path+"/" + m.route.param("urlA") + "/delete")
            //         :m.route.set(path+"/location/edit", { from: e.from, to: e.to })
            //         // m.redraw()
            //     }

            // })
        } else if (urlA == "parks") {
            // Model.parks.list.map((e) => {
            //     if (e.parkname == a && e.location == b) {
            //         localStorage.setItem("parks", JSON.stringify({
            //             parkname: e.parkname,
            //             location: e.location
            //         }))
            //         type == "delete" ? m.route.set(path+"/" + m.route.param("urlA") + "/delete")
            //         :m.route.set(path+"/parks/edit", { parkname: e.parkname, location: e.location })
            //     }
            // })
        } else if (urlA == "rates") {
            // status == "approved" ? list = Model.rates.approved 
            // : status == "pending" ? list = Model.rates.pending 
            // : status == "rejected" ? list = Model.rates.rejected : null

            Model[urlA].data.map((e) => {
                if (e.id == id) {
                    // console.log(13125)
                    m.route.get().slice(1, 6) == "admin" ? (
                       localStorage.setItem(Model.localStorage.name, JSON.stringify({ id, status }) 
                    )): localStorage.setItem(Model.localStorage.name, JSON.stringify({ id }))

                        
                    // localStorage.setItem("rr_data", JSON.stringify({
                    //     id,
                    //     status
                        // price1: e.price1,
                        // price2: e.price2,
                        // location: {
                        //     id: "zhvy3jwtgdm",
                        //     start: "Ikole",
                        //     destination: "Lagos",
                        //     description: "",
                        //     dateCreated: "",
                        //     dateUpdated: "",
                        //     isDelete: false
                        // },
                        // status: "approved",
                        // isApproved: "",
                        // sentForApproval: "",
                        // dateCreated: "",
                        // dateUpdated: "",
                        // price1: e.price1,
                        // price2: e.price2,
                        // location: e.location
                    
                    type == "delete" ? m.route.set(path+"/" + urlA + "/delete")
                    : usertype != "admin" ? m.route.set(path + "/rates/edit", {
                    // : Model.mode == "edit" || usertype != "admin" ? m.route.set(path + "/rates/edit", {
                        location: e.location.destination != "" ? e.location.start + " to " + e.location.destination
                            : e.location.start,  
                        price1: e.price1,
                        price2: e.price2
                        })
                    : m.route.set(path+"/rates/validate")
                    // : m.route.set(path+"/rates/validate", { location: e.location, price1: e.price1, price2: e.price2 })
                }
            })
        } else if (urlA == "vehicles") {
            // Model.vehicles.list.map((e) => {
            //     if (e.name == a && e.park == b) {
            //         localStorage.setItem("vehicles", JSON.stringify({
            //             name: e.name,
            //             park: e.park
            //         }))
            //         type == "delete" ? m.route.set(path+"/" + m.route.param("urlA") + "/delete")
            //         :m.route.set(path+"/vehicles/edit", { name: e.name, park: e.park })
            //     }
            // })
        }
    },
    /*setIconColor:()=>{
        // Model.colorIndex++;
        // if(j > 3) j = 0
        // return Model.colorClasses[j]
        Model.colorIndex++;
        if(Model.colorIndex > 3) Model.colorIndex = 0
        return Model.colorClasses[Model.colorIndex]
    },*/
    closeSidebar: () => {
        window.innerWidth < 769 ? (Model.sidebar.classList.remove("active"), (Model.sidebar.classList.contains("active") ? Model.sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right") : Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu"))) : null
    },
    approveEntry:(id)=>{
        var urlA = m.route.param("urlA")
        Model[urlA].data.forEach((e) => {
            //  console.log(getIndexByID(ls.id, Model.rates.data))
            if (e.id == id) {
                e.status = "approved";
                e.isApproved = true
                e.dateUpdated = new Date().toLocaleString()
            }
        });


        //   type[Model.data.status].forEach((e) => {
        //       console.log(type[Model.data.status])
        //     if (e.price1 == old.price1 && e.location == old.location) {
        //       //Remove from entry and add to approved list
        //       tempB.push({
        //         price1: old.price1,
        //         price2: old.price2,
        //         location: old.location
        //       })
        //       localStorage.setItem("rates", JSON.stringify({
        //             price1: old.price1,
        //             price2: old.price2,
        //             location: old.location
        //         }))
        //     } else {
        //       //Add other entries
        //       tempA.push({
        //         price1: e.price1,
        //         price2: e.price2,
        //         location: e.location
        //       })
        //     }
        //   });
        //   type[Model.data.status] = tempA;
        //   type.approved = [...type.approved,...tempB];// add edited entry to pending 
          Model.selectAll ? m.route.set("/admin/rates", null, { replace: true }) 
          : m.route.set("/admin/rates", { selected: Model.data.status.charAt(0).toUpperCase() + Model.data.status.slice(1) }, { replace: true })
          addSuccess('Entry has been approved');
    },
    rejectEntry:(id)=>{
        var urlA = m.route.param("urlA");

        Model[urlA].data.forEach((e) => {
            //  console.log(getIndexByID(ls.id, Model.rates.data))
            if (e.id == id) {
                e.status = "rejected";
                e.isApproved = false
                e.dateUpdated = new Date().toLocaleString()
            }
        });
        // var tempA = [], tempB = [];

        //   type[Model.data.status].forEach((e) => {
        //     if (e.price1 == old.price1 && e.location == old.location) {
        //       //Remove from entry and add to rejected list
        //       tempB.push({
        //         price1: old.price1,
        //         price2: old.price2,
        //         location: old.location
        //       })
        //     } else {
        //       //Add other entries
        //       tempA.push({
        //         price1: e.price1,
        //         price2: e.price2,
        //         location: e.location
        //       })
        //     }
        //   });
        //   type[Model.data.status] = tempA;
        //   type.rejected = [...type.rejected,...tempB];// add entry to rejected
          Model.selectAll ? m.route.set("/admin/rates", null, { replace: true }) 
          : m.route.set("/admin/rates", { selected: Model.data.status.charAt(0).toUpperCase() + Model.data.status.slice(1) }, { replace: true })
          addSuccess('Entry has been rejected');
    },
    deleteEntry:(ls)=>{
        var path, urlA = m.route.param("urlA"), usertype = m.route.get().slice(1, 6);
        usertype == "admin" ? path = "/admin" : path = "/u"


        var index = getIndexByID(ls, Model[urlA].data);
        Model[urlA].data.splice(index, 1);
        Model.selectAll ? m.route.set(path + "/rates", null, { replace: true }) 
        : m.route.set(path + "/rates", { selected: Model.data.status.charAt(0).toUpperCase() + Model.data.status.slice(1) }, {    replace: true })
        addSuccess('Deleted successfully');
    }
}


// console.log(JSON.stringify(Model.rates.data))
// console.log(Model.rates.data[3])

// Navbar scroll
$(document).on("scroll", function() {
    let path = m.route.get();
    let pathArray1 = path == "/about" || path == "/contact-us" || path == "/privacy-policy" || path == "/cookie-policy" || path == "/tac";
    let pathArray2 = pathArray1 || path == "/check-rates";
    let value = 0;
    let oVal = null;

    (pathArray2) ? oVal = ($(window).scrollTop() / 30): oVal = ($(window).scrollTop() / 270)
    $(".blur").css("opacity", oVal);

    (path == "/check-rates") ? value = 60: (pathArray1) ? value = 50 : value = 220 //630

    if ($(this).scrollTop() > value) {
        if (Model.transparent) {
            Model.transparent = false;
            $(".navbar-transparent").removeClass("navbar-dark")
            $("nav[role='navigation']").removeClass('navbar-transparent')
        }
    } else {
        if (!Model.transparent) {
            Model.transparent = true;
            $("nav[role='navigation']").addClass('navbar-transparent')
            navbarOpen && $(this).scrollTop() <= 220 ? $(".navbar-transparent").addClass("navbar-dark") : $(".navbar-transparent").removeClass("navbar-dark")
            
            !navbarOpen && $(this).scrollTop() <= 0 && pathArray1 ? $("nav[role='navigation']").removeClass("navbar-dark") : null

            $(this).scrollTop() <= 220 && window.innerWidth > 767 ? $("nav[role='navigation']").removeClass("navbar-dark") : null
        }
    }
});

export const scrollToAnchor = (anchorName) => {
    let is = (el) => { return el !== undefined && el !== null };
    let targetEl = is(Model.anchor) ? document.querySelector("div[id='" + anchorName + "']") : document.body;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let target = is(targetEl) ? targetEl.getBoundingClientRect().top : 0;
    window.scroll({
        top: target + scrollTop - 70,
        left: 0,
        behavior: "smooth"
    });
}

window.addEventListener('hashchange', function() {
    window.scrollTo(0, 0);
    // Model.hasHashChanged = true;
    // m.redraw()
});

window.addEventListener('resize', function() {
    let path = m.route.get();
    let pathArray1 = path == "/about" || path == "/contact-us" || path == "/privacy-policy" || path == "/cookie-policy" || path == "/tac";

    navbarOpen && window.innerWidth > 767 ? $("nav[role='navigation']").removeClass("navbar-dark") : navbarOpen && window.innerWidth < 767 && $(document).scrollTop() < 220 && !pathArray1 ? $("nav[role='navigation']").addClass("navbar-dark") : null 
    // navbarOpen && window.innerWidth > 767 ? $("nav").removeClass("navbar-dark") : 
    
    //FOr other paths
    navbarOpen && window.innerWidth < 767 && $(document).scrollTop() <= 50 && pathArray1 ? $("nav[role='navigation']").addClass("navbar-dark") : null//$("nav").removeClass("navbar-dark")

    //For when scroll bar at zero
    navbarOpen && window.innerWidth < 767 && $(document).scrollTop() <= 0 && pathArray1 ? $("nav[role='navigation']").addClass("navbar-dark") : null//$("nav").removeClass("navbar-dark")
})

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function randomString() {
    return Math.random().toString(36).substring(2);
}


export function getIndexByID(id, in_array) {
    var index = -1;
    for (var i = 0; i < in_array.length; ++i) {
        if (in_array[i].id == id) {
            index = i;
            break;
        }
    }

    return index;
}






// }

// onback key
// $(document).ready(function($) {
//   if (window.history && window.history.pushState) {
//     $(window).on('popstate', function() {

//     });
//   }
// });













// Model.hideComment(comment).then(m.redraw)
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

//                 Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool',
//   cancelButton: '...'
// })
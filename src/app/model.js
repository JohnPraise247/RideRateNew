export const Model = {
    acceptCookie: null,
    disableBtn: null,
    userType: "contributor",
    modeSelect: 0,//Preview mode,
    modeList: ["preview", "history"],
    modeAdminList: ["preview", "validate", "history"],
    modal:{
        location:{
            id: null,
            title: "New location entry",
            start: "",
            destination: "",
            description: "",
            dateCreated: "",
            dateUpdated: ""
        }
    },
    toast: []
}

export const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname) => {
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

export const getUsertype = () => {
    var usertype = m.route.get().slice(1, 6);
    
    return usertype == "admin" ? "/admin" : "/u";
}

export const isAdmin = () =>{
    var isAdmin =  m.route.get().slice(1, 6);
    // var isAdmin =  (m.route.get() != null ? m.route.get().slice(1, 6) : "123")
   
    // console
    // setTimeout(() => {
    //     alert(m.route.get())
    // }, 3000);

    return isAdmin == "admin";
}

window.addEventListener('hashchange', function () {
    window.scrollTo(0, 0);
    console
    m.redraw()
    // Model.hasHashChanged = true;
    // setTimeout("m.redraw()",1000)
});

//onBack
// window.addEventListener('onload', function () {
//     if(window.history && window.history.pushState) {
//         window.addEventListener('popstate', function () {
//             console.log(12345)

//         });
//         console.log(6374365)
//     }
// });

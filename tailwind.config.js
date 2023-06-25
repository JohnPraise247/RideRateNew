/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.js"
    ],
    // darkMode: ["class", '[data-theme="dark"]'],
    // theme: {
    //     extend: {},
    // },
    plugins: [require("daisyui")],
    // extend:{
    //     card: {
    //         'padding': '180px'
    //     }
    // },
    // plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        // styled: true,
        // base: true,
        // utils: true,
        // logs: true,
        // rtl: false,
        // prefix: "",
        themes: [
            // {
            //     mytheme: {
            //         primary: "#32bb78",
            //         // primary: "#a991f7",
            //         secondary: "#f6d860",
            //         accent: "#37cdbe",
            //         neutral: "#3d4451",
            //         "base-100": "#ffffff",
            //     },
            // }, 
            {
                themelight: {
                    primary: "#66cc8a",//"#32bb7a",()
                    secondary: "#f3f4f6",
                    error: "#f87272",
                    // secondary: "#f2f2f2",
                    accent: "#f04050",//#66cc8a
                    neutral: "#3d4451"/* #333c4d */,//#D1D5DB",//333c4d  #66cc8a
                    // neutral: "#66cc8a",//#D1D5DB",//333c4d  #66cc8a
                    "base-100": "#ffffff",
                    ".btn-white": {//for app download button
                        "background-color": "#ffffff",
                        "border-color": "#ffffff",
                        "color": "#575757",
                    },
                    ".btn-white:hover": {//for app download button
                        "background-color": "#efefef",
                        "border-color": "#efefef"
                    },
                    ".btn-delete": {
                        "background-color": "transparent",
                        "border-color": "#e5e7eb",
                    },
                    ".btn-delete:hover": {
                        "background-color": "#FEF2F2",
                        "border-color": "#FEF2F2",
                    },
                    ".btn-edit": {
                        "background-color": "transparent",
                        "border-color": "#e5e7eb",
                    },
                    ".btn-edit:hover": {
                        "background-color": "#efefef",
                        "border-color": "#efefef",
                    },
                    ".badge-grey": {
                        "border-color": "#e5e7eb",
                    },
                    ".btn-social-link": {
                        "color": "#374151",
                        "background-color": "transparent",
                        "border-color": "transparent",//#e5e7eb
                    },
                    ".btn-social-link:hover": {
                        "color": "#6B7280",//#66cc8a
                        "background-color": "transparent",
                        "border-color": "transparent",//#66cc8a
                    },
                    ".btn-error": {
                        "background-color": "#f87272", 
                        "border-color": "#f87272",
                    },
                    ".btn-error:hover": {
                        "background-color": "#ea5234",
                        "border-color": "#ea5234",
                    },


                    // ".stats":{
                    //     "overflow":"auto",
                    //     "width":"100%"
                    // },
                    // ".stat":{
                    //     "column-gap":"0",
                    //     "padding":"0"
                    // }
                },
            }, 
            {
                themedark: {
                    primary: "#66cc8a",//"#32bb7a",   //#1eb854
                    // primary: "#66cc8a",//"#32bb7a",
                    // secondary: "#1db990",
                    secondary: "#1F2937",//#ccffcc
                    // "secondaryHover":"#f04050",
                    accent: "#f04050",//93ffa1
                    neutral: "#3d4451",
                    "base-100": "#212121",//grey
                    ".btn-white": "#ffffff"
                    // "base-100": "#18342b",
                    // "base-100": "#171212",
                },
            }, 
            // "emerald",
            // "dark",
            // "forest",
            // "light" 
        ],
    }
}

/* 
primary  grey   secondary
#66cc8a, #333c4d   #f2f2f2
*/


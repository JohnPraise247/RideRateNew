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
                    // secondary: "#f2f2f2",
                    accent: "#66cc8a",
                    neutral: "#333c4d",
                    "base-100": "#ffffff",
                },
            }, 
            {
                themedark: {
                    primary: "#1eb854",//"#32bb7a",
                    // primary: "#66cc8a",//"#32bb7a",
                    // secondary: "#1db990",
                    secondary: "#ccffcc",
                    accent: "#93ffa1",
                    neutral: "#3d4451",
                    "base-100": "#212121",//grey
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


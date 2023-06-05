const fs = require('fs');
// const cleanCSS = require('clean-css');
// const coutput = new cleanCSS().minify([
//   "public/css/bootstrap.min.css",
//   "public/css/aos.css",
//   "public/css/gsdk.css",
//   "public/css/boxicons.min.css",
//   "public/css/index.css",
//   "public/css/sidebar.css",
//   "public/css/bs.css",
//   "public/css/colors.css",
//   "public/css/dashboard.css",
//   "public/css/icon.css",
//   "public/css/rates.css",
//   "public/css/signin.css"
// ]);





// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const devMode = process.env.NODE_ENV !== "production";
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.production') });
require('dotenv').config();
const webpack = require('webpack');

// toggle the following 3 config settings to customize build
const createMap = false;

// inject envs
let plugins = [
  new webpack.ProvidePlugin({m: "mithril"})
];
// let plugins = [new MiniCssExtractPlugin()];
let envs = {};
Object.keys(process.env).filter(key => key.startsWith('MITHRIL_')).forEach(key => {
  envs[key] = JSON.stringify(process.env[key]);
});
plugins.push(new webpack.DefinePlugin(envs));

let app = ['./src/index.js'];
let rules = [];

let devtools = undefined;
if (createMap) devtools = 'source-map';

module.exports = {
  entry: {
    app: app,
  },
  output: {
    filename: "build/bundle.min.js",
    path: path.resolve(__dirname, ''),
    publicPath: "/",
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //     // `...`,
  //     new CssMinimizerPlugin(),
  //   ],
  // },
  mode: 'production',
  devtool: devtools,
  plugins: plugins,
  module: {
    rules: rules,
  },
};



var html = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
   <title>RideRate</title>

   <!-- <link rel="apple-touch-icon" sizes="76x76" href="./assets/img//apple-icon.png"> -->
   <link rel="icon" type="image/png" href="./favicon.png">
   <link rel="preconnect" href="fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,200" rel="stylesheet">
   <link rel="stylesheet" href="./build/app.css">
     

   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-14WLRRD1SK"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-14WLRRD1SK');
   </script>
</head>
<body>
  <div class="spinner-container">
    <div class="spinner-large"></div>
  </div>
<script src="build/bundle.min.js"></script>
</body>
</html>
`

try {
  fs.writeFileSync('index.html', html);
   console.log("html file written successfully");
} catch (err) {
  console.error(err);
}


// try {
//   // coutput.styles = coutput.styles.replaceAll("../images", "./images");
//   // coutput.styles = coutput.styles.replaceAll("../fonts", "./fonts");
//   // console.log("Replaced ../images and ../fonts to ./images & ./fonts in css file");
//   fs.writeFileSync('app.css', coutput.styles);
//   console.log("CSS files has been minified");
// } catch (err) {
//   console.error(err);
// }

fs.rm('app.css', { recursive: true }, err => {
  if (err) {
    throw err
  }
  console.log(`app.css deleted!`)
})
// fs.rm('css', { recursive: true }, err => {
//   if (err) {
//     throw err
//   }
//   console.log(`CSS fldr is deleted!`)
// })
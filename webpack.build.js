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
   <meta name="title" content="RideRate">
   <meta charset="utf-8">
   <meta content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no" name="viewport">
   <meta name="description" content="Get real-time travel rates for vehicles on RideRate. Personalized recommendations, insights, and a vibrant traveler community. Sign up for free and optimize your journeys!">
   <meta name="keywords" content="RideRate, Travel rates, Vehicle rates, Travel trends, Rate tracking, Travel optimization, Vehicle types, Travel insights, Community engagement, Reliable sources">
   <meta name="robots" content="index, nofollow">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <meta name="language" content="English">
   <link rel="icon" type="image/png" href="./favicon.png">
   <!--<link rel="preconnect" href="cdnjs.cloudflare.com">-->
   <!--<link href="https://fonts.googleapis.com/css?family=Poppins:400,700,200" rel="stylesheet">-->
   <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.6/aos.css" rel="stylesheet">-->
   <link href="./aos.css" rel="stylesheet">
   <link href="./build/app.css" rel="stylesheet">
   <title>RideRate</title>

    <!-- Google tag (gtag.js) 
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-14WLRRD1SK"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-14WLRRD1SK');
   </script>-->
</head>
<body>
  <noscript>You need to enable JavaScript for this Site.</noscript>
  <div class="min-h-screen flex justify-center items-center">
    <div role="status" class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary    border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]">
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading</span>
    </div>
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
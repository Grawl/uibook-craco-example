const path = require("path");
const UibookPlugin = require("uibook/plugin");
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  webpack: {
    configure: {
      output: {
        filename: isProduction
            ? 'static/js/[name].[contenthash:8].js'
            : 'static/js/[name].js',
      },
    },
    plugins: [
      new UibookPlugin({
        // JSX is transformed only in `src/` folder
        controller: path.join(__dirname, "src/uibook/uibook-controller.js"),
      }),
    ],
  },
};

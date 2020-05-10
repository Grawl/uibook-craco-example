const path = require("path");
const UibookPlugin = require("uibook/plugin");
module.exports = {
  webpack: {
    plugins: [
      new UibookPlugin({
        controller: path.join(__dirname, "uibook/uibook-controller.js"),
      }),
    ],
  },
};

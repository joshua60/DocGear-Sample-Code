const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const fs = require("fs");

const pluginList = []
const filePath= "dist/css"

if (fs.existsSync(filePath)) {
  pluginList.push(
    new ReplaceInFileWebpackPlugin([
      {
        dir: "dist/css",
        test: [/\.css$/],
        rules: [
          {
            search: /[^\:]\:(after|before|first-letter|first-line|selection)/gi,
            replace: function(match) {
              return `${match.charAt(0)}:${match.substring(1)}`;
            }
          }
        ]
      }
    ])
  )
}
module.exports = {
  publicPath: "./",
  configureWebpack: {
    devtool: "eval",
    plugins: pluginList
  }
};

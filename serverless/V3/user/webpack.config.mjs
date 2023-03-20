import ZipPlugin from "zip-webpack-plugin";
import { resolve } from "path";
import path from 'path';
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  //what are the entry points to our functions
  entry: {
    index: "./createUserHandler.mjs",
  },
  //how we want the output
  output: {
    filename: "[name]/index.mjs",
    path: resolve(__dirname, "dist/"),
    libraryTarget: "umd",
  },
  target: "node",
  mode: "production",
  optimization: { minimize: false }
};
//finally zip the output directory, ready to deploy
const pluginConfig = {
  plugins: Object.keys(config.entry).map((entryName) => {
    return new ZipPlugin({
      path: resolve(__dirname, "dist/"),
      filename: entryName,
      extension: "zip",
      include: [entryName],
    });
  }),
};

const webpackConfig = Object.assign(config, pluginConfig);
export default webpackConfig;

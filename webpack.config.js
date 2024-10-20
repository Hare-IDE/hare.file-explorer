import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default  {
    mode: 'development',
    entry: './build/compiled/extension.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'extension.js',
        library: {
            type: "module",
        }
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
       //empty pluggins array
    ],
    resolve: {
        extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"],
        fullySpecified: false,
        symlinks: false,
        enforceExtension: false
    },
    module: {
         // https://webpack.js.org/loaders/babel-loader/#root
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    devtool: 'source-map'
}
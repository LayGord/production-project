import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildScssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
};

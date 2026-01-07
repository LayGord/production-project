import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(buildOptions: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = buildOptions;

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    const svgLoader = buildSvgLoader();

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildScssLoader(isDev);

    return [
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ];
}
import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(buildOptions: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = buildOptions;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[id].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    // only on devserver
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({overlay: false}));
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    };

    return plugins;
}
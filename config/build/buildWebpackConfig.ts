import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(buildOptions: BuildOptions): webpack.Configuration {
    const {
        mode,
        paths,
        isDev,
    } = buildOptions;

    const config: webpack.Configuration = {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(buildOptions),
        module: {
            rules: buildLoaders(buildOptions),
        },
        resolve: buildResolvers(buildOptions),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(buildOptions) : undefined,
    };

    return config;
};
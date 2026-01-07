import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(buildOptions: BuildOptions): DevServerConfiguration {
    const { port } = buildOptions;
    return {
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
};
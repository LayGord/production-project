import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildOptions, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const isDev: boolean = mode === 'development';
    console.log(`BUILD SET TO ${mode} MODE`);
    const port: number = env.port || 3000;

    const buildOptions: BuildOptions = {
        mode,
        paths,
        isDev,
        port
    };

    const config: webpack.Configuration = buildWebpackConfig(buildOptions);
    return config;
};
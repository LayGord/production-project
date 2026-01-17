import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildScssLoader } from "../build/loaders/buildScssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";


export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // absolute imports fix
    config.resolve?.modules?.push(path.relative(__dirname, '../../src'), 'node_modules');
    config.resolve?.extensions?.push('ts', 'tsx');

    // config.resolve?.modules? = [
    //     path.resolve(__dirname, '../../src'),
    //     'node_modules',
    // ];

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/};
        }
        return rule;
    });

    config.plugins?.push(new DefinePlugin({"__IS_DEV__": true}))

    config.module?.rules.push(buildScssLoader(true));
    config.module?.rules.push(buildSvgLoader());
    return config;
};

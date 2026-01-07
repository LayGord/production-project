import webpack, { RuleSetRule } from "webpack";
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
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/};
        }
        return rule;
    });

    config.module?.rules.push(buildScssLoader(true));
    config.module?.rules.push(buildSvgLoader());
    return config;
};

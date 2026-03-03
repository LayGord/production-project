import { BuildOptions} from '../types/config'

export const buildBabelLoader = (options: BuildOptions) => {
    const { isDev } = options;
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    //@ts-ignore
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}

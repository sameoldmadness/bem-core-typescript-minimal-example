module.exports = {
    entry: './src/index.tsx',
    output: {
        path: `${__dirname}/build`,
        filename: 'index.js',
    },
    module: {
        rules: [{
            test : /\.tsx$/,
            exclude : /node_modules/,
            use: [{
                loader: 'webpack-bem-loader',
                options: {
                    levels: [
                        `${__dirname}/src/blocks/common`,
                        `${__dirname}/src/blocks/desktop`,
                    ],
                    techMap: { js: ['tsx'] },
                },
            }, {
                loader: 'awesome-typescript-loader',
            }],
        }],
    },
};

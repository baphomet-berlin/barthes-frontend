module.exports = {
    entry: {
        main: [
          'webpack-dev-server',
          'src/main'
        ]
    },
    output: {
        filename: 'public/[name].js'
    }
};

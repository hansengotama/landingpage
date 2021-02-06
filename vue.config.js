let path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    path.resolve(__dirname, "src/assets/stylus/color.styl"),
                ]
            }
        }
    }
}

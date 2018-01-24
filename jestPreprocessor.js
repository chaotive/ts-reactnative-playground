var tsTransformer = require('react-native-typescript-transformer')
var rnTransformer = require('react-native/jest/preprocessor')

var preprocessor = Object.assign({}, rnTransformer, {
    process (src, file) {
        return tsTransformer.transform({
            filename: file,
            localPath: file,
            options: {
                dev: true,
                inlineRequires: true,
                platform: '',
                projectRoot: '',
                retainLines: true,
            },
            src,
        }).code
    },
})

module.exports = preprocessor
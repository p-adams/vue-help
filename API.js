const G_C = require('./apis/globalconfig')
const G_API = require('./apis/globalapi')

const GlobalConfig = [
   G_C.SILENT,
   G_C.OPTION_MERGE_STRATEGIES,
   G_C.DEVTOOLS,
   G_C.ERROR_HANDLER,
   G_C.WARN_HANDLER,
   G_C.IGNORED_ELEMENTS,
   G_C.KEY_CODES,
   G_C.PERFORMANCE,
   G_C.PRODUCTION_TIP
]

const GlobalAPI = [
    G_API.EXTEND
]


module.exports = {
    GlobalConfig,
    GlobalAPI
} 
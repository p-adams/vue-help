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
    G_API.EXTEND,
    G_API.NEXT_TICK,
    G_API.SET,
    G_API.DELETE,
    G_API.DIRECTIVE,
    G_API.FILTER,
    G_API.COMPONENT,
    G_API.USE,
    G_API.MIXIN,
    G_API.COMPILE,
    G_API.VERSION
]


module.exports = {
    GlobalConfig,
    GlobalAPI
} 
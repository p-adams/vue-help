const G_C = require('./apis/globalconfig')
const G_API = require('./apis/globalapi')
const O_D = require('./apis/optionsdata')
const O_DOM = require('./apis/optionsdom')
const O_LH = require('./apis/optionslifecyclehooks')
const O_A = require('./apis/optionsassets')

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

const OptionsData = [
    O_D.DATA,
    O_D.PROPS,
    O_D.PROPS_DATA,
    O_D.COMPUTED,
    O_D.METHODS,
    O_D.WATCH
]

const OptionsDOM = [
    O_DOM.EL,
    O_DOM.TEMPLATE,
    O_DOM.RENDER,
    O_DOM.RENDER_ERROR
]

const OptionsLifecycleHooks = [
    O_LH.BEFORE_CREATE,
    O_LH.CREATED,
    O_LH.BEFORE_MOUNT,
    O_LH.MOUNTED,
    O_LH.BEFORE_UPDATE,
    O_LH.UPDATED,
    O_LH.ACTIVATED,
    O_LH.DEACTIVATED,
    O_LH.BEFORE_DESTROY,
    O_LH.DESTROYED

]

const OptionsAssets = [
    O_A.DIRECTIVES,
    O_A.FILTERS,
    O_A.COMPONENTS
]


module.exports = {
    GlobalConfig,
    GlobalAPI,
    OptionsData,
    OptionsDOM,
    OptionsLifecycleHooks,
    OptionsAssets
} 
const G_C = require('./apis/globalconfig')
const G_API = require('./apis/globalapi')
const O_D = require('./apis/optionsdata')
const O_DOM = require('./apis/optionsdom')
const O_LH = require('./apis/optionslifecyclehooks')
const O_A = require('./apis/optionsassets')
const O_C = require('./apis/optionscomposition')
const O_M = require('./apis/optionsmisc')
const I_P = require('./apis/instanceproperties')
const I_D = require('./apis/instancedata')
const I_E = require('./apis/instanceevents')
const I_L = require('./apis/instancelifecycle')
const D = require('./apis/directives')
const S_A = require('./apis/specialattributes')
const B_C = require('./apis/builtincomp')


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

const OptionsComposition = [
    O_C.PARENT,
    O_C.MIXINS,
    O_C.EXTENDS,
    O_C.PROVIDE_INJECT
]

const OptionsMisc = [
    O_M.NAME,
    O_M.DELIMITERS,
    O_M.FUNCTIONAL,
    O_M.MODEL,
    O_M.INHERIT_ATTRS,
    O_M.COMMENTS

]

const InstanceProperties = [
    I_P.VM_$DATA,
    I_P.VM_$PROPS,
    I_P.VM_$EL,
    I_P.VM_$OPTIONS,
    I_P.VM_$PARENT,
    I_P.VM_$ROOT,
    I_P.VM_$CHILDREN,
    I_P.VM_$SLOTS,
    I_P.VM_$SCOPED_SLOTS,
    I_P.VM_$REFS,
    I_P.VM_$IS_SERVER,
    I_P.VM_$ATTRS,
    I_P.VM_$LISTENERS
]

const InstanceData = [
    I_D.VM_$WATCH,
    I_D.VM_$SET,
    I_D.VM_$DELETE
]

const InstanceEvents = [
    I_E.VM_$ON,
    I_E.VM_$ONCE,
    I_E.VM_$OFF,
    I_E.VM_$EMIT
]

const InstanceLifecycle = [
    I_L.VM_$MOUNT,
    I_L.VM_$FORCE_UPDATE,
    I_L.VM_$NEXT_TICK,
    I_L.VM_$DESTROY
]

const Directives = [
    D.V_TEXT,
    D.V_HTML,
    D.V_SHOW,
    D.V_IF,
    D.V_ELSE,
    D.V_ELSE_IF,
    D.V_FOR,
    D.V_ON,
    D.V_BIND,
    D.V_MODEL,
    D.V_PRE,
    D.V_CLOAK,
    D.V_ONCE
]

const SpecialAttributes = [
    S_A.KEY,
    S_A.REF,
    S_A.SLOT,
    S_A.IS
]

const BuiltInComponents = [
    B_C.COMPONENT,
    B_C.TRANSITION,
    B_C.TRANSITION_GROUP,
    B_C.KEEP_ALIVE,
    B_C.SLOT_COMPONENT
]


module.exports = {
    GlobalConfig,
    GlobalAPI,
    OptionsData,
    OptionsDOM,
    OptionsLifecycleHooks,
    OptionsAssets,
    OptionsComposition,
    OptionsMisc,
    InstanceProperties,
    InstanceData,
    InstanceEvents,
    InstanceLifecycle,
    Directives,
    SpecialAttributes,
    BuiltInComponents
} 
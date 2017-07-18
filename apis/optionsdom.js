const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const EL = {
    category: 'Option/DOM',
    name: 'el',
    type: 'string | HTMLElement',
    restriction: `only respected in instance created via ${colorArgs('new')}.`,
    details: `Provide the Vue instance an existing DOM element to mount on. It can be a CSS selector string or
                        an actual HTMLElement. After the instance is mounted,
                        the resolved element will be accessible as ${colorArgs('vm.$el')}.
                        If this option is available at instantiation, the instance will immediately enter
                        compilation; otherwise, the user will have to explicitly call ${colorArgs('vm.$mount()')} to manually
                        start the compilation.\n
                        The provided element merely serves as a mounting point. Unlike in Vue 1.x, the
                        mounted element will be replaced with Vue-generated DOM in all cases. It is therefore
                        not recommended to mount the root instance to ${colorArgs('<html>')} or ${colorArgs('<body>')}.
                        If neither ${colorArgs('render')} function nor ${colorArgs('template')} option is present, the in-DOM HTML of
                        the mounting DOM element will be extracted as the template. In this case, Runtime + Compiler build of Vue should be used.`
                        ,
}
const TEMPLATE = {}
const RENDER = {}
const RENDER_ERROR = {}


module.exports = {
    EL,
    TEMPLATE,
    RENDER,
    RENDER_ERROR
}
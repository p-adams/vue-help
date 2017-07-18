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
    details: `Provide the Vue instance an existing DOM element to mount on. It can be a CSS
                        selector string or an actual HTMLElement. After the instance is mounted,
                        the resolved element will be accessible as ${colorArgs('vm.$el')}.
                        If this option is available at instantiation, the instance will immediately enter
                        compilation; otherwise, the user will have to explicitly call ${colorArgs('vm.$mount()')} to manually
                        start the compilation.\n
                        The provided element merely serves as a mounting point. Unlike in Vue 1.x, the
                        mounted element will be replaced with Vue-generated DOM in all cases. It is therefore
                        not recommended to mount the root instance to ${colorArgs('<html>')} or ${colorArgs('<body>')}.
                        If neither ${colorArgs('render')} function nor ${colorArgs('template')} option is present, the in-DOM HTML of
                        the mounting DOM element will be extracted as the template. In this case,
                        Runtime + Compiler build of Vue should be used.`
                        ,
}
                    // untested
const TEMPLATE = {
    category: 'Options/DOM',
    name: 'template',
    type: 'string',
    details: `A string template to be used as the markup for the Vue instance.
                        The template will replace the mounted element. Any existing markup inside the mounted
                        element will be ignored, unless content distribution slots are present in the template.
                        If the string starts with ${colorArgs('#')} it will be used as a querySelector and use the selected element’s
                        innerHTML as the template string. This allows the use of the common ${colorArgs(`<script type="x-template">`)}
                        trick to include templates. From a security perspective, you should only use Vue templates
                        that you can trust. Never use user-generated content as your template.
                        If render function is present in the Vue option, the template will be ignored.
    
    `
}
const RENDER = {
    category: 'Options/DOM',
    name: 'render',
    type: '(createElement: () => VNode) => VNode',
    details: `An alternative to string templates allowing you to leverage the full programmatic
                        power of JavaScript. The render function receives a ${colorArgs('createElement')} method
                        as it’s first argument used to create ${colorArgs('VNode')}s. If the component is a functional component,
                        the render function also receives an extra argument ${colorArgs('context')}, which provides access to
                        contextual data since functional components are instance-less.

                        The ${colorArgs('render')} function has priority over the render function compiled from ${colorArgs('template')} option
                        or in-DOM HTML template of the mounting element which is specified by the ${colorArgs('el')} option.
    
    `
}
const RENDER_ERROR = {
    category: 'Options/DOM',
    name: 'renderError',
    type: '(createElement: () => VNode, error: Error) => VNode',
    details: `${chalk.bold('Only works in development mode')}.
                        Provide an alternative render output when the default ${colorArgs('render')} function encounters
                        an error. The error will be passed to ${colorArgs('renderError')} as the second argument.
                        This is particularly useful when used together with hot-reload`,
    example: `
                        ${colorArgs('new')} Vue({
                            render (h) {
                                ${colorArgs('throw new')} ${chalk.green('Error')}(${chalk.green("'oops'")})
                            },
                            renderError (h, err) {
                                ${colorArgs('return')} h(${chalk.green("'pre'")}, { style: { color: ${chalk.green("'red'")} }}, err.stack)
                            }
                        }).$mount(${chalk.green("'#app'")})
                        
                            `
}                           


module.exports = {
    EL,
    TEMPLATE,
    RENDER,
    RENDER_ERROR
}
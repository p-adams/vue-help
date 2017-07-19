const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Instance Methods/Lifecycle'

const VM_$MOUNT = {
    category: cat,
    name: `vm.$mount([elementOrSelector])`,
    arguments: [
        `{Element | string} [elementOrSelector]`,
        `{boolean} [hydrating]`,
    ],
    returns: `vm - the instance itself`,
    usage: `If a Vue instance didn’t receive the ${colorArgs(`el`)} option at instantiation,
                        it will be in “unmounted” state, without an associated DOM element.
                        ${colorArgs(`vm.$mount()`)} can be used to manually start the mounting of
                        an unmounted Vue instance. If ${colorArgs(`elementOrSelector`)} argument
                        is not provided, the template will be rendered as an off-document
                        element, and you will have to use native DOM API to insert it
                        into the document yourself. The method returns the instance itself
                        so you can chain other instance methods after it.`,
    example: `
                        ${colorArgs(`var`)} MyComponent = Vue.extend({
                            template: ${chalk.green("'<div>Hello!</div>'")}
                        })
                        ${colorComment(`// create and mount to #app (will replace #app)`)}
                        ${colorArgs(`new`)} MyComponent().$mount(${chalk.green("'#app'")})
                        ${colorComment(`// the above is the same as:`)}
                        ${colorArgs(`new`)} MyComponent({ el: '#app' })
                        ${colorComment(`// or, render off-document and append afterwards:`)}
                        ${colorArgs(`var`)} component = ${colorArgs(`new`)} MyComponent().$mount()
                        ${chalk.green("document")}.getElementById(${chalk.green("'app'")}).appendChild(component.$el)
    `
}

const VM_$FORCE_UPDATE = {
    category: cat,
    name: `vm.$forceUpdate()`,
    usage: `Force the Vue instance to re-render. Note it does not affect all
                        child components, only the instance itself and child components
                        with inserted slot content.`
}

const VM_$NEXT_TICK = {
    category: cat,
    name: `vm.$nextTick([callback])`,
    arguments: [
        `{Function} [callback]`
    ],
    usage:`Defer the callback to be executed after the next DOM update
                        cycle. Use it immediately after you’ve changed some data to wait
                        for the DOM update. This is the same as the global ${colorArgs(`Vue.nextTick`)},
                        except that the callback’s ${colorArgs(`this`)} context is automatically bound
                        to the instance calling this method.
                        ${chalk.bold(`New in 2.1.0: returns a Promise if no callback is provided and
                        Promise is supported in the execution environment`)}.
    
    `,
    example: `
                        ${colorArgs(`new`)} Vue({
                            ${colorComment(`// ...`)}
                            methods: {
                                ${colorComment(`// ...`)}
                                example: ${chalk.blue(`function`)} () {
                                ${colorComment(`// modify data`)}
                                ${colorArgs(`this`)}.message = 'changed'
                                ${colorComment(`// DOM is not updated yet`)}
                                ${colorArgs(`this`)}.$nextTick(${chalk.blue(`function`)} () {
                                    ${colorComment(`// DOM is now updated`)}
                                    ${colorComment(`// 'this' is bound to the current instance`)}
                                    ${colorArgs(`this`)}.doSomethingElse()
                                })
                                }
                            }
                        })    
    
    `
}

const VM_$DESTROY = {
    category: cat,
    name: `vm.$destroy()`,
    usage: `Completely destroy a vm. Clean up its connections with other existing vms,
                        unbind all its directives, turn off all event listeners.
                        Triggers the ${colorArgs(`beforeDestroy`)} and ${colorArgs(`destroyed`)} hooks.
                        
                        In normal use cases you shouldn’t have to call this method yourself.
                        Prefer controlling the lifecycle of child components in a data-driven
                        fashion using ${colorArgs(`v-if`)} and ${colorArgs(`v-for.`)}.`
}

module.exports = {
    VM_$MOUNT,
    VM_$FORCE_UPDATE,
    VM_$NEXT_TICK,
    VM_$DESTROY
}


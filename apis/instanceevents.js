const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Instance Methods/Events'

const VM_$ON = {
    category: cat,
    name: `vm.$on(event, callback)`,
    arguments:[
        `{string | Array<string>} event`,
        `{Function} callback`
    ],
    usage: `Listen for a custom event on the current vm.
                        Events can be triggered by ${colorArgs(`vm.$emit`)}. The callback will receive
                        all the additional arguments passed into these event-triggering methods.`,
    example: `
                        vm.$on(${chalk.green(`'test'`)}, ${chalk.blue(`function`)} (msg) {
                            ${chalk.green(`console`)}.log(msg)
                        })
                        vm.$emit(${chalk.green(`'test'`)}, ${chalk.green(`'hi'`)})
                        ${colorComment(`// -> "hi"`)}
    `
}
const VM_$ONCE = {
    category: cat,
    name: `vm.$once(event,callback)`,
    arguments:[
        `{string} event`,
        `{Function} callback`
    ],
    usage: `Listen for a custom event, but only once.
                        The listener will be removed once it triggers for the first time.`
}
const VM_$OFF = {
    category: cat,
    name: `vm.$off([event,callback])`,
    arguments: [
        `{string} [event]`,
        `{Function} [callback]`
    ],
    usage: `Remove custom event listener(s).
                        * If no arguments are provided, remove all event listeners;
                        * If only the event is provided, remove all listeners for that event;
                        * If both event and callback are given, remove the listener
                            for that specific callback only.
`
}
const VM_$EMIT = {
    category: cat,
    name: `vm.$emit(event,[...args])`,
    arguments: [
        `{string} event`,
        `[...args]`
    ],
    usage: `Trigger an event on the current instance. Any additional
                        arguments will be passed into the listener’s callback function.`
}

module.exports = {
    VM_$ON,
    VM_$ONCE,
    VM_$OFF,
    VM_$EMIT
}
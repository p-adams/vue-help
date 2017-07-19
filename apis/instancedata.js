const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = `Instance Methods/Data`
const VM_$WATCH = {
    category: cat,
    name: `vm.$watch(expOrFn,callback,[options])`,
    arguments:[
                        `{string | Function} expOrFn`,
                        `{Function | Object} callback`,
                        `{Object} [options] 
                            { {Object} [options]: 
                                * {boolean} deep\n
                                * {boolean} immediate
                            }`
    ],
    returns: `{Function} unwatch`,
    usage: `Watch an expression or a computed function on the Vue instance
                        for changes. The callback gets called with the new value
                        and the old value. The expression only accepts simple dot-delimited paths.
                        For more complex expression, use a function instead.
                        
                        Note: when mutating (rather than replacing) an Object
                        or an Array, the old value will be the same as new value
                        because they reference the same Object/Array.
                        Vue doesn’t keep a copy of the pre-mutate value.`,
    example: `
                        ${colorComment(`// keypath`)}
                        vm.$watch(${chalk.green(`'a.b.c'`)}, ${chalk.blue(`function`)} (newVal, oldVal) {
                           ${colorComment(`// do something`)}
                        })
                        ${colorComment(`// function`)}
                        vm.$watch(
                            function () {
                                return this.a + this.b
                            },
                            function (newVal, oldVal) {
                                ${colorComment(`// do something`)}
                            }
                        )
                        ${colorArgs(`vm.$watch`)} returns an unwatch function that stops firing the callback:
                        ${colorArgs(`var`)} unwatch = vm.$watch(${chalk.green(`'a'`)}, cb)
                        ${colorComment(`// later, teardown the watcher`)}
                        unwatch()

                        * ${chalk.bold(`Option: deep`)}
                        To also detect nested value changes inside Objects, you need to pass in ${colorArgs('deep: true')} in the
                        options argument.
                        Note that you don’t need to do so to listen for Array mutations.

                        vm.$watch(${chalk.green(`'someObject'`)}, callback, {
                            deep: ${colorPrimitive(`true`)}
                        })
                        vm.someObject.nestedValue =  ${colorPrimitive(`123`)}
                        ${colorComment(`// callback is fired`)}

                        * ${chalk.bold(`Option: immediate`)}
                        Passing in ${colorArgs(`immediate: true`)} in the option will trigger the callback immediately
                        with the current value of the expression:
                        vm.$watch(${chalk.green(`'a'`)}, callback, {
                            immediate: ${colorPrimitive(`true`)}
                        })
                        ${colorComment(`// callback is fired immediately with current value of 'a'`)}
    `
}
const VM_$SET = {
    category: cat,
    name: 'vm.$set(target,key,value)',
    arguments: [
        `{Object | Array) target`,
        `{string | number} key`,
        `{any} value`
    ],
    returns: `the set value.`,
    usage: `This is the ${chalk.bold(`alias`)} of the global ${colorArgs(`Vue.set`)}.`
}

const VM_$DELETE = {
    category: cat,
    name: `vm.$delete(target,key)`,
    arguments:[
        `{Object | Array} target`,
        `{string | number} key`
    ],
    usage: `This is the ${chalk.bold(`alias`)} of the global ${colorArgs(`Vue.delete`)}.`

}

module.exports = {
    VM_$WATCH,
    VM_$SET,
    VM_$DELETE
}
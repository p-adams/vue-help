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
                        // keypath
                        vm.$watch('a.b.c', function (newVal, oldVal) {
                            // do something
                        })
                        // function
                        vm.$watch(
                            function () {
                                return this.a + this.b
                            },
                            function (newVal, oldVal) {
                                // do something
                            }
                        )
    `
}
const VM_$SET = {}
const VM_$DELETE = {}

module.exports = {
    VM_$WATCH,
    VM_$SET,
    VM_$DELETE
}
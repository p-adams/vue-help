const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const EXTEND = {
    category: 'Global API',
    name: 'Vue.extend(options)',
    arguments: [
        `{Object} options`
    ],
    usage: `Create a "subclass" of the base Vue constructor. The argument should be
                        an object containing component options. The special case to
                        note here is the ${colorArgs('data')} options - it must be a
                        function when used with ${colorArgs('Vue.extend()')}.`,
    example: ` ${colorComment('// in template')}
                        ${chalk.blue('<div id=')}${chalk.green('"mount-point"')}${chalk.blue('></div>')}
                        ${colorComment('// create constructor')}
                        ${colorArgs('var')} Profile = Vue.extend({
                            template: ${chalk.green("'<p>{{firstName}} {{lastName}} aka {{alias}}</p>'")}
                            data: ${chalk.blue('function')} () {
                                ${colorArgs('return')} {
                                    firstName: ${chalk.green("'Walter'")},
                                    lastName: ${chalk.green("'White'")},
                                    alias: ${chalk.green("'Heisenberg'")}
                                }
                            }
                        })
                        ${colorComment('// create an instance of Profile and mount it on an element')}
                        ${colorArgs('new')} Profile().$mount(${chalk.green("'#mount-point'")})
                        Will result in:
                        ${chalk.blue('<p>')}Walter White aka Heisenberg${chalk.blue('</p>')}`
}

const NEXT_TICK = {
    category: 'Global API',
    name: 'Vue.nextTick([callback, context])',
    arguments: [
        `{Function} [callback]`,
        `{Object} [context]`
    ],
    usage: `Defer the callback to be executed after the next DOM update cycle.
                        Use it immediately after you've changed some data to wait
                        for the DOM update.`,
    example: `${colorComment('// modify data')}
                        vm.msg = ${chalk.green("'Hello'")}
                        Vue.nextTick(${chalk.blue('function')} () {
                            ${colorComment('// DOM update')}
                        })`
}

const SET = {
    category: 'Global API',
    name: 'Vue.set(target,key,value)',
    arguments:[
        `{Object | Array} target`,
        `{string | number} key`,
        `{any} value`
    ],
    returns: 'the set value',
    usage: `Set a property on an object. If the object is reactive, ensure
                        the property is created as a reactive property and
                        trigger view updates. This is primarily used to get around
                        the limitation that Vue cannot detect property additions.
                        ${chalk.redBright.bold(`Note the object cannot be a Vue instance, or the root data
                        object of a Vue instance.`)}`
}

const DELETE = {
    category: 'Global API',
    name: 'Vue.delete(target,key)',
    arguments: [
        `{Object | Array} target`,
        `{string | number} key`
    ],
    usage: `Delete a property on an object. If the object is reactive, ensure the
                        deletion triggers view updates. This is primarily used to get
                        around the limitation that Vue cannot detect property deletions,
                        but you should rarely need to use it.
                        ${chalk.redBright.bold(`The target object cannot be a Vue instance, or the root data 
                        object of a Vue instance.`)}`

}

const DIRECTIVE = {
    category: 'Global API',
    name: 'Vue.directive(id,[definition])',
    arguments: [
        `{string} id`,
        `{Function | Object} [definition]`
    ],
    usage: `Register or retrieve a global directive`,
    example: `${colorComment('// register')}
                        Vue.directive(${chalk.green("'my-directive'")}, {
                            bind: ${chalk.blue('function')} () {},
                            inserted: ${chalk.blue('function')} () {},
                            update: ${chalk.blue('function')} () {},
                            componentUpdated: ${chalk.blue('function')} () {},
                            unbind: ${chalk.blue('function')} () {},
                        })
                        ${colorComment('// register (simple function directive')}
                        Vue.directive(${chalk.green("'my-directive'")}, ${chalk.blue('function')} () {
                            ${colorComment('// this will be called as `bind` and `update`')}
                        })
                        ${colorComment(` getter, return the directive definition if registered`)}
                        ${colorArgs('var')} myDirective = Vue.directive(${chalk.green("'my-directive'")})`
}

const FILTER = {
    category: 'Global API',
    name: 'Vue.filter(id,[definition])',
    arguments:[
        `{string} id`,
        `{Function} [definition]`
    ],
    usage: `Register or retrieve a global filter.`,
    example: `${colorComment('// register')}
                        Vue.filter(${chalk.green("'my-filter'")}, ${chalk.blue('function')} (value){
                            ${colorComment('// return processed value')}
                        })
                        ${colorComment('// getter, return the filter is registered')}
                        ${colorArgs('var')} myFilter = Vue.filter(${chalk.green("'my-filter'")})`

}

const COMPONENT = {

}

const USE = {

}

const MIXIN = {

}

const COMPILE = {

}

const VERSION = {

}

module.exports = {
    EXTEND,
    NEXT_TICK,
    SET,
    DELETE,
    DIRECTIVE,
    FILTER
}
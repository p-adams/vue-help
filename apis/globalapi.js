const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
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

}

const SET = {

}

const DELETE = {

}

const DIRECTIVE = {

}

const FILTER = {

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
    EXTEND
}
const chalk = require('chalk')

colorComment = comment => chalk.gray(comment)

colorPrimitive = primitive => chalk.magentaBright(primitive)

const SILENT = {
        category: 'Global Config',
        name: 'silent', 
        type: 'boolean',
        default: 'false',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
}
const OPTION_MERGE_STRATEGIES = {
        category: 'Global Config',
        name: 'optionMergeStrategies', 
        type: '{ [key: string]: Function }',
        default: '{}',
        usage: `Vue.config.optionMergeStrategies._my_option = ${chalk.magentaBright('function')}(parent,child,vm){
                                ${chalk.magentaBright('return')} child + 1
                            }
                            ${chalk.magentaBright('const')} Profile = Vue.extend({
                                 _my_option: 1
                            })
                            // Profile.options._my_option = 2\n`,
        details: `Define custom merging strategies for options.
                            The merge strategy receives the value of that option defined
                            on the parent and child instances as the first and second arguments,
                            respectively. The context Vue instance is passed as the third argument.`
}
const DEVTOOLS = {
        category: 'Global Config',
        name: 'devtools', 
        type: 'boolean',
        default: `true ${chalk.white('(')} false ${chalk.white('in production builds)')}`,
        usage: `// make sure to set this synchronously immediately after loading Vue
                            Vue.config.devtools = ${chalk.magentaBright('true')}`,
        details: `Check whether to allow ${chalk.green('vue-devtools')} inspection.
                            This option's default value is ${chalk.magentaBright('true')} in development builds and ${chalk.magentaBright('false')} in production builds.
                            You can set it to ${chalk.magentaBright('true')} to enable inspection for production builds`
}
const ERROR_HANDLER = {
        category: 'Global Config',
        name: 'errorHandler', 
        type: 'Function',
        default: 'undefined',
        usage: `Vue.config.errorHandler = ${chalk.magentaBright('function')}(err,vm,info){
                            // handle error
                            // 'info' is a Vue-specific error info, e.g. which lifecycle hook
                            // the error was found in. Only available in 2.2.0+
                        }`,
        details: `Assign a handler for uncaught errors during component render function
                            and watchers. The handler gets called with the error and the Vue instance.`
}

const WARN_HANDLER = {
        category: 'Global Config',
        name: 'warnHandler', 
        type: 'Function',
        default: 'undefined',
        usage: `Vue.config.warnHandler = ${chalk.magentaBright('function')} (msg, vm, trace) {
                            // trace is the component hierarchy trace
                        }`,
        details: `Assign a custom handler for runtime Vue warnings. Note this only works
                            during development and is ignored in production.`
}

const IGNORED_ELEMENTS = {
        category: 'Global Config',
        name: 'ignoredElements', 
        type: 'Array<string>',
        usage: `Vue.config.ignoredElements = [
                                'my-custom-web-component', 'another-web-component'
                            ]`,
        details: `Make Vue ignore custom elements defined outside of Vue
                            (e.g., using the Web Components APIs). Otherwise, it will throw
                            a warning about an ${chalk.magentaBright('Unknown custom element')}, assuming that you forgot to 
                            register a global component or misspelled a component name.`
}

const KEY_CODES = {
        category: 'Global Config',
        name: 'keyCodes', 
        type: '{ [key: string]: number | Array<number> }',
        default: '{}', 
        usage: `Vue.config.keyCodes = {
                            v: ${colorPrimitive('86')},
                            f1: ${colorPrimitive('112')},
                            ${colorComment("// camelCase won't work")}
                            mediaPlayPause: ${colorPrimitive('179')},
                            ${colorComment("// instead you can use kebab-case with double quotation marks")}
                            ${chalk.green('"media-play-pause"')}: ${colorPrimitive('179')},
                            up: ${colorPrimitive('[38, 87]')}
                        }
                        ${colorComment("// example")}
                        ${chalk.blue('<input type=')}${chalk.green('"text"')} ${chalk.blue('@keyup.media-play-pause=')}${chalk.green('"method"')}${chalk.blue('>')}
                        `,
        details: 'Define custom key alias(es) for v-on.'
}

/*const SILENT = {
        category: 'Global Config',
        name: '#silent', 
        type: 'boolean',
        default: 'false',
        arguments: '',
        readOption: '',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
        example: ''
}
const SILENT = {
        category: 'Global Config',
        name: '#silent', 
        type: 'boolean',
        default: 'false',
        arguments: '',
        readOption: '',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
        example: ''
}

const SILENT = {
        category: 'Global Config',
        name: '#silent', 
        type: 'boolean',
        default: 'false',
        arguments: '',
        readOption: '',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
        example: ''
}

const SILENT = {
        category: 'Global Config',
        name: '#silent', 
        type: 'boolean',
        default: 'false',
        arguments: '',
        readOption: '',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
        example: ''
}
*/

module.exports = {
    SILENT,
    OPTION_MERGE_STRATEGIES,
    DEVTOOLS,
    ERROR_HANDLER,
    WARN_HANDLER,
    IGNORED_ELEMENTS,
    KEY_CODES
}
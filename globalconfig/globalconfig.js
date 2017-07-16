const chalk = require('chalk')
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
        usage: `Vue.config.optionMergeStrategies._my_option = ${chalk.magentaBright('function')} (parent, child, vm) {
                                ${chalk.magentaBright('return')} child + 1
                            }
                            ${chalk.magentaBright('const')} Profile = Vue.extend({
                                 _my_option: 1
                            })
                            // Profile.options._my_option = 2\n`,
        details: `Define custom merging strategies for options.
                            The merge strategy receives the value of that option defined
                            on the parent and child instances as the first and second arguments, respectively.
                            The context Vue instance is passed as the third argument.`
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
        usage: `Vue.config.errorHandler = ${chalk.magentaBright('function')} (err, vm, info) {
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
    WARN_HANDLER
}
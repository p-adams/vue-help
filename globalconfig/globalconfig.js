const chalk = require('chalk')
const SILENT = {
        category: 'Global Config',
        name: '#silent', 
        type: 'boolean',
        default: 'false',
        usage: `Vue.config.silent = ${chalk.magentaBright('true')}`,
        details: 'Suppress all Vue logs and warnings',
}
const OPTION_MERGE_STRATEGIES = {
        category: 'Global Config',
        name: '#optionMergeStrategies', 
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
        name: '#devtools', 
        type: 'boolean',
        default: `true ${chalk.white('(')} false ${chalk.white('in production builds)')}`,
        usage: `// make sure to set this synchronously immediately after loading Vue
                            Vue.config.devtools = ${chalk.magentaBright('true')}`,
        details: `Check whether to allow ${chalk.green('vue-devtools')} inspection.
                            This option's default value is ${chalk.magentaBright('true')} in development builds and ${chalk.magentaBright('false')} in production builds.
                            You can set it to ${chalk.magentaBright('true')} to enable inspection for production builds`
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
    DEVTOOLS
}
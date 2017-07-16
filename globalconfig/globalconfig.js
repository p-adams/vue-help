const chalk = require('chalk')
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


module.exports = {
    SILENT
}
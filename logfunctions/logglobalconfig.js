const chalk = require('chalk')

module.exports = {
    logGlobalConfig: function(obj){
        return(
                `
                    ${chalk.bgCyan('Category')}: ${obj.category}
                    Name: ${obj.name + '\n'}
                    * Type: ${obj.type}
                    * Default: ${obj.default}
                    * Usage: ${obj.usage}
                    * Details: ${obj.details}
    
                `
            )
    }
}
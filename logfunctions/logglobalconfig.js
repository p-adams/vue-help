const chalk = require('chalk')

module.exports = {
    logGlobalConfig: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    * Type: ${chalk.magentaBright(obj.type)}
                    * Default: ${chalk.magentaBright(obj.default)}
                    * Usage: ${obj.usage}
                    * Details: ${obj.details}
    
                `
            )
    }
}
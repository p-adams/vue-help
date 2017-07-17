const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logGlobalAPI: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    * Arguments: 
                        ${obj.arguments.map(arg => {
                            return `* ${args(arg)}`
                        })}
                    
                    * Usage: ${obj.usage}
                    * Example: ${obj.example}
                `
            )
    }
}
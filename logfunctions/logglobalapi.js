const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logGlobalAPI: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    * Arguments (${obj.arguments.length}): 
                        ${obj.arguments.map((arg, index) => {
                            return `${index+1}: ${args(arg)} `
                        }).join(" ")}
                    ${obj.returns ? `* Returns: ${obj.returns}` : ''}
                    * Usage: ${obj.usage}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
            )
    }
}
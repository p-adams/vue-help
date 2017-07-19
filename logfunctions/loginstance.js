const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logInstance: function(obj){
        return(
                 `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    ${obj.arguments ? `* Arguments (${obj.arguments.length})` : ''} 
                        ${obj.arguments ? obj.arguments.map((arg, index) => {
                            return `${index+1}: ${args(arg)} `
                        }).join(" ") : ''}
                    ${obj.returns ? `* Returns: ${args(obj.returns)}` : ''}
                    * Usage: ${obj.usage}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
        )
    }
}
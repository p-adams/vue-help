const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const args = custom.colorArgs
module.exports = {
    logDirectives: function(obj){
        return(
                 `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    ${obj.shorthand ? `* Shorthand: ${args(obj.shorthand)}` : ''}
                    ${obj.expects ? `* Expects: ${args(obj.expects)}` : ''}
                    ${obj.restriction ? `* Restriction: ${obj.restriction}` : ''}
                    ${obj.limited ? `* Limited to: ${obj.limited}` : ''}
                    ${obj.usage ? `* Usage: ${obj.usage}` : ''}
                    ${obj.details ? `* Details: ${obj.details}` : ''}
                    ${obj.arguments ? `* Arguments (${obj.arguments.length})` : ''} 
                        ${obj.arguments ? obj.arguments.map((arg, index) => {
                            return `${index+1}: ${args(arg)} `
                        }).join(" ") : ''}
                    ${obj.modifiers ? `* Modifiers: ${obj.modifiers}` : ''}
                    ${obj.returns ? `* Returns: ${args(obj.returns)}` : ''}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
        )
    }
}
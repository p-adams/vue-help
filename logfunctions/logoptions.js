const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logOption: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    * Type: ${args(obj.type)}
                    ${obj.restrictions ? `* Restrictions: ${obj.restrictions}` : ''}
                    * Details ${obj.details}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
            )
    }
}
const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logBuiltInComp: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    ${obj.props ? `* Props: ${obj.props}` : ''}
                    ${obj.events ? `* Event: ${obj.events}` : ''}
                    ${obj.usage ? `* Usage: ${obj.usage}` : ``}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
        )
    }
}
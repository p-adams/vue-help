const chalk = require('chalk')

module.exports = {
    colorComment: comment => chalk.gray(comment),
    colorPrimitive: primitive => chalk.magentaBright(primitive),
    colorError: err => chalk.red(err),
    colorArgs: args => chalk.rgb(255,165,0)(args)
}
const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const VM_$ON = {}
const VM_$ONCE = {}
const VM_$OFF = {}
const VM_$EMIT = {}

module.exports = {
    VM_$ON,
    VM_$ONCE,
    VM_$OFF,
    VM_$EMIT
}
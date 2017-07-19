const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Instance Methods/Lifecycle'

const VM_$MOUNT = {}
const VM_$FORCE_UPDATE = {}
const VM_$NEXT_TICK = {}
const VM_$DESTROY = {}

module.exports = {
    VM_$MOUNT,
    VM_$FORCE_UPDATE,
    VM_$NEXT_TICK,
    VM_$DESTROY
}


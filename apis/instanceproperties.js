const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Instance Properties'
const VM_$DATA = {
    category: cat,
    name: 'vm.$data',
    type: 'Object',
    details: `The data object that the Vue instance is observing.
                        The Vue instance proxies access to the properties on its data object.`
}
const VM_$PROPS = {
    category: cat,
    name: 'vm.$props',
    type: 'Object',
    details: `An object representing the current props a component
                        has received. The Vue instance proxies access to the properties
                        on its props object.`
}
const VM_$EL = {
    category: cat,
    name: 'vm.$el',
    type: 'HTMLElement',
    read: 'Read only',
    details: `The root DOM element that the Vue instance is managing.`
}
const VM_$OPTIONS = {}
const VM_$PARENT = {}
const VM_$ROOT = {}
const VM_$CHILDREN = {}
const VM_$SLOTS = {}
const VM_$SCOPED_SLOTS = {}
const VM_$REFS = {}
const VM_$IS_SERVER = {}
const VM_$ATTRS = {}
const VM_$LISTENERS = {}


module.exports = {
    VM_$DATA,
    VM_$PROPS,
    VM_$EL,
    VM_$OPTIONS,
    VM_$PARENT,
    VM_$ROOT,
    VM_$CHILDREN,
    VM_$SLOTS,
    VM_$SCOPED_SLOTS,
    VM_$REFS,
    VM_$IS_SERVER,
    VM_$ATTRS,
    VM_$LISTENERS
}
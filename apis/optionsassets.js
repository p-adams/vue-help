const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Options/Assets'

const DIRECTIVES = {
    category: cat,
    name: 'directives',
    type: 'Object',
    details: `A hash of directives to be made available to the Vue instance.`
}

const FILTERS = {
    category: cat,
    name: 'filters',
    type: 'Object',
    details: `A hash of filters to be made available to the Vue instance.`
}

const COMPONENTS = {
    category: cat,
    name: 'components',
    type: 'Object',
    details: `A hash of components to be made available to the Vue instance.`
}


module.exports = {
    DIRECTIVES,
    FILTERS,
    COMPONENTS
}
const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Options/Lifecycle Hooks'

const BEFORE_CREATE = {
    category: cat,
    name: 'beforeCreate',
    type: 'Function',
    details: `Called synchronously after the instance has just been initialized,
                        before data observation and event/watcher setup.`
}

const CREATED = {
    category: cat,
    name: 'created',
    type: 'Function',
    details: `Called synchronously after the instance is created.
                        At this stage, the instance has finished processing the options
                        which means the following have been set up: data observation, computed
                        properties, methods, watch/event callbacks. However, the mounting phase
                        has not been started, and the ${colorArgs('$el')} property will not be available yet.`
}

const BEFORE_MOUNT = {
    category: cat,
    name: 'beforeMount',
    type: 'Function',
    details: `Called right before the mounting begins: the ${colorArgs('render')} function is
                        about to be called for the first time.
                        ${chalk.bold('This hook is not called during server-side rendering')}.
    `
}

const MOUNTED = {
    category: cat,
    name: 'mounted',
    type: 'Function',
    details: `Called after the instance has just been mounted where ${colorArgs('el')} is replaced by the newly created ${colorArgs('vm.$el')}.
                        If the root instance is mounted to an in-document element, ${colorArgs('vm.$el')} will also be in-document
                        when ${colorArgs('mounted')} is called. ${chalk.bold('This hook is not called during server-side rendering')}.
    
    `
}

const BEFORE_UPDATE = {
    category: cat,
    name: 'beforeUpdate',
    type: 'Function',
    details: `Called when the data changes, before the virtual DOM is re-rendered and patched.
                        You can perform further state changes in this hook and they will not trigger additional re-renders.
                        ${chalk.bold('This hook is not called during server-side rendering')}.
    
    `
}

const UPDATED = {
    category: cat,
    name: 'updated',
    type: 'Function',
    details: `Called after a data change causes the virtual DOM to be re-rendered and patched.
                        The component’s DOM will have been updated when this hook is called,
                        so you can perform DOM-dependent operations here. However, in most cases
                        you should avoid changing state inside the hook. To react to state changes,
                        it’s usually better to use a ${chalk.green('computed property')} or ${chalk.green('watcher')} instead.
                        ${chalk.bold('This hook is not called during server-side rendering')}.
    `
}

const ACTIVATED = {
    category: cat,
    name: 'activated',
    type: 'Function',
    details: `Called when a kept-alive component is activated.
                        ${chalk.bold('This hook is not called during server-side rendering')}.`
}

const DEACTIVATED = {
    category: cat,
    name: 'deactivated',
    type: 'Function',
    details: `Called when a kept-alive component is deactivated.
                        ${chalk.bold('This hook is not called during server-side rendering')}.`
}

const BEFORE_DESTROY = {
    category: cat,
    name: 'beforeDestroy',
    type: 'Function',
    details: `Called right before a Vue instance is destroyed. At this stage the instance is
                        still fully functional. ${chalk.bold('This hook is not called during server-side rendering')}.`
}

const DESTROYED = {
    category: cat,
    name: 'destroyed',
    type: 'Function',
    details: `Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance
                        have been unbound, all event listeners have been removed, and all child Vue instances have also been
                        destroyed. ${chalk.bold('This hook is not called during server-side rendering')}.`
}

module.exports = {
    BEFORE_CREATE,
    CREATED,
    BEFORE_MOUNT,
    MOUNTED,
    BEFORE_UPDATE,
    UPDATED,
    ACTIVATED,
    DEACTIVATED,
    BEFORE_DESTROY,
    DESTROYED
}
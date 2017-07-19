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
const VM_$OPTIONS = {
    category: cat,
    name: 'vm.$options',
    type: 'Object',
    read: 'Read only',
    details: `The instantiation options used for the current Vue instance.
                        This is useful when you want to include custom properties in the options:
                        ${colorArgs('new')} Vue({
                            customOption: ${chalk.green("'foo'")},
                            created: ${chalk.blue('function')} () {
                                ${chalk.green('console')}.log(${colorArgs('this')}.$options.customOption) ${colorComment(`// -> 'foo'`)}
                            }
                        })`
}
const VM_$PARENT = {
    category: cat,
    name:  `vm.$parent`,
    type: `Vue instance`,
    read: 'Read only',
    details: `The parent instance, if the current instance has one.`
}
const VM_$ROOT = {
    category: cat,
    name: `vm.$root`,
    type: `Vue instance`,
    read: `Read only`,
    details: `The root Vue instance of the current component tree.
                        If the current instance has no parents this value will be itself.`
}
const VM_$CHILDREN = {
    category: cat,
    name: `vm.$children`,
    type: `Array<Vue instance>`,
    read: `Read only`,
    details: `The direct child components of the current instance.
                        ${chalk.bold(`Note there’s no order guarantee for ${colorArgs('$children')}, and it is not reactive.`)}
                        If you find yourself trying to use ${colorArgs('$children')} for data binding, consider
                        using an Array and ${colorArgs('v-for')} to generate child components, and use the Array
                        as the source of truth.`
}
const VM_$SLOTS = {
    category: cat,
    name: `vm.$slots`,
    type: `{ [name: string]: ?Array<VNode> }`,
    read: `Read only`,
    details: `Used to programmatically access content ${chalk.green(`distributed by slots`)}.
                        Each ${chalk.green('named slot')} has its own corresponding
                        property (e.g. the contents of ${colorArgs(`slot="foo"`)} will be found at
                        ${colorArgs(`vm.$slots.foo`)}. The ${colorArgs(`default`)} property contains any nodes
                        not included in a named slot. Accessing ${colorArgs(`vm.$slots`)} is most
                        useful when writing a component with a ${chalk.green(`render function`)}.`,
    example: `
                        ${colorComment('// html')}
                        ${chalk.blue(`<blog-post>`)}
                        ${chalk.blue(`<h1 slot=${chalk.green('"header"')}>`)}
                                About Me
                        ${chalk.blue(`</h1>`)}
                            ${chalk.blue(`<p>`)}Here's some page content, which will be included in vm.$slots.default,
                                        because it's not inside a named slot. ${chalk.blue(`</p>`)}
                        ${chalk.blue(`<p slot=${chalk.green('"footer"')}>`)}
                                Copyright 2016 Evan You
                        ${chalk.blue(`</p>`)}
                            ${chalk.blue(`<p>`)}If I have some content down here, it will
                                        also be included in vm.$slots.default.${chalk.blue(`</p>`)}.
                        ${chalk.blue(`</blog-post>`)}
                        ${colorComment('// JS')}
                        Vue.component(${chalk.green(`'blog-post'`)}, {
                            render: ${chalk.blue(`function`)} (createElement) {
                                ${colorArgs(`var`)} header = ${colorArgs(`this`)}.$slots.header
                                ${colorArgs(`var`)} body   = ${colorArgs(`this`)}.$slots.default
                                ${colorArgs(`var`)} footer = ${colorArgs(`this`)}.$slots.footer
                                return createElement(${chalk.green(`'div'`)}, [
                                createElement(${chalk.green(`'header'`)}, header),
                                createElement(${chalk.green(`'main'`)}, body),
                                createElement(${chalk.green(`'footer'`)}, footer)
                                ])
                            }
                        })
    `
}
const VM_$SCOPED_SLOTS = {
    category: cat,
    name: `vm.$scopedSlots`,
    type: `{ [name: string]: props => VNode | Array<VNode> }`,
    read: `Read only`,
    details: `Used to programmatically access ${chalk.green(`scoped slots`)}.
                        For each slot, including the ${colorArgs(`default`)} one, the object
                        contains a corresponding function that returns VNodes.
                        Accessing ${colorArgs(`vm.$scopedSlots`)} is most useful when writing
                        a component with a ${chalk.green(`render function`)}.`
}
const VM_$REFS = {
    category: cat,
    name: `vm.$refs`,
    type: `Object`,
    read: `Read only`,
    details: `An object that holds child components that have ${colorArgs('ref')} registered.`
}
const VM_$IS_SERVER = {
    category: cat,
    name: `vm.$isServer`,
    type: `boolean`,
    read: `Read only`,
    details: `Whether the current Vue instance is running on the server.`
}
const VM_$ATTRS = {
    category: cat,
    name: `vm.$attrs`,
    type: `{ [key: string]: string }`,
    read: `Read only`,
    details: `Contains parent-scope attribute bindings that are not
                        recognized (and extracted) as props. When a component doesn’t
                        have any declared props, this essentially contains all
                        parent-scope bindings except for ${colorArgs(`class`)} and ${colorArgs(`style`)},
                        and can be passed down to an inner component via
                        ${colorArgs(`v-bind="$attrs"`)} - useful when creating higher-order components.`
}
const VM_$LISTENERS = {
    category: cat,
    name: `vm.$listeners`,
    type: `{ [key: string]: Function | Array<Function> }`,
    read: `Read only`,
    details: `Contains parent-scope ${colorArgs(`v-on`)} event listeners
                        (without ${colorArgs(`.native`)} modifiers). This can be passed down to
                        an inner component via ${colorArgs(`v-on="$listeners"`)} - useful when
                        creating higher-order components.`
}


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
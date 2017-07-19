const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Options/Composition'

const PARENT = {
    category: cat,
    name: 'parent',
    type: 'Vue instance',
    details: `Specify the parent instance for the instance to be created.
                        Establishes a parent-child relationship between the two. The parent
                        will be accessible as ${colorArgs('this.$parent')} for the child, and the child will
                        be pushed into the parent’s ${colorArgs('$children')} array. Use ${colorArgs('$parent')} and ${colorArgs('$children')}
                        sparingly - they mostly serve as an escape-hatch.
                        Prefer using props and events for parent-child communication.
    
    `
}

const MIXINS = {
    category: cat,
    name: 'mixins',
    type: 'Array<Object>',
    details: `The ${colorArgs('mixins')} option accepts an array of mixin objects. These mixin objects
                        can contain instance options just like normal instance objects, and they will be merged
                        against the eventual options using the same option merging logic in ${colorArgs('Vue.extend()')}
                        . e.g. If your mixin contains a created hook and the component itself also has one,
                        both functions will be called. Mixin hooks are called in the order they are provided,
                        and called before the component’s own hooks.`,
    example: `
                        ${colorArgs('var')} mixin = {
                            created: ${chalk.blue('function')} () { ${chalk.green('console')}.log(${colorPrimitive('1')} }
                        }
                        ${colorArgs('var')} vm = ${colorArgs('new')} Vue({
                            created: ${chalk.blue('function')} () { ${chalk.green('console')}.log(${colorPrimitive('2')} },
                            mixins: [mixin]
                        })
                        ${colorComment('// -> 1')}
                        ${colorComment('// -> 2')}
    `
}

const EXTENDS = {
    category: cat,
    name: 'extends',
    type: 'Object | Function',
    details: `Allows declaratively extending another component
                        (could be either a plain options object or a constructor) without having to use ${colorArgs('Vue.extend')}
                        This is primarily intended to make it easier to extend between single file components.
                        This is similar to ${colorArgs('mixins')}, the difference being that the component’s own options takes
                        higher priority than the source component being extended.`,
    example: `
                        ${colorArgs('var')} CompA = { ... }
                        ${colorComment('// extend CompA without having to call Vue.extend on either')}
                        ${colorArgs('var')} CompB = {
                            extends: CompA,
                            ...
                        }
    `
}

const PROVIDE_INJECT = {
    category: cat,
    name: 'provide/inject',
    type: `provide: ${colorArgs('Object | () => Object')}\n
                            inject: ${colorArgs('Array<string> | { [key: string]: string | Symbol}')}`,
    details: `${colorArgs('provide')} and ${colorArgs('inject')} are primarily provided for advanced plugin / component
                        library use cases. It is NOT recommended to use them in generic application code.\n
                        This pair of options are used together to allow an ancestor component to serve as a
                        dependency injector for its all descendants, regardless of how deep the component hierarchy
                        is, as long as they are in the same parent chain. If you are familiar with React, this is very
                        similar to React’s context feature. The ${colorArgs('provide')} option should be an object or a function that
                        returns an object. This object contains the properties that are available for injection into
                        its descendants. You can use ES2015 Symbols as keys in this object, but only in environments
                        that natively support ${colorArgs('Symbol')} and ${colorArgs('Reflect.ownKeys')}. The inject options should be either an Array
                        of strings or an object where the keys stand for the local binding name, and the value being the
                        key (string or Symbol) to search for in available injections.\n
                        Note: the ${colorArgs('provide')} and ${colorArgs('inject')} bindings are NOT reactive.
                        This is intentional. However, if you pass down an observed object,
                        properties on that object do remain reactive.
    `,
    example: `
                        ${colorArgs('var')} Provider = {
                            provide: {
                                foo: ${chalk.green("'bar'")}
                            },
                            ${colorComment('// ...')}
                        }
                        ${colorArgs('var')} Child = {
                            inject: [${chalk.green("'foo'")}],
                            created () {
                                ${chalk.green("console")}.log(${colorArgs('this')}.foo) ${colorComment('// -> "bar"')}
                            }
                            ${colorComment('// ...')}
                        }
                        With ES2015 Symbols, function ${colorArgs('provide')} and object ${colorArgs('inject')}:
                        ${colorArgs('const')} s = ${chalk.green('Symbol')}()
                        ${colorArgs('const')} Provider = {
                            provide () {
                                ${colorArgs('return')} {
                                [s]: ${chalk.green("'foo'")}
                                }
                            }
                        }
                        ${colorArgs('const')} Child = {
                            inject: { s },
                            ${colorComment('// ...')}
                        }
                        The next 2 examples only work with Vue > 2.2.1. Below that version,
                        injected values were resolved after the ${colorArgs('props')} and the ${colorArgs('data')} initialization.
                        Using an injected value as the default for a prop:
                         ${colorArgs('const')} Child = {
                            inject: [${chalk.green("'foo'")}],
                            props: {
                                bar: {
                                    ${colorArgs('default')} () {
                                        ${colorArgs('return this')}.foo
                                    }
                                }
                            }
                        }
                        Using an injected value as data entry:
                         ${colorArgs('const')} Child = {
                            inject: [${chalk.green("'foo'")}],
                            data () {
                                ${colorArgs('return')} {
                                    bar: ${colorArgs('this')}.foo
                                }
                            }
                        }
                        `
}

module.exports = {
    PARENT,
    MIXINS,
    EXTENDS,
    PROVIDE_INJECT
}
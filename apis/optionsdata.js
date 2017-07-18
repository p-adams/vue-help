const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs



const DATA = {
    category: 'Options/Data',
    name: 'data',
    type: 'Object | Function',
    restrictions: `Only accepts ${colorArgs('Function')} when used in a component definition.`,
    details: `The data object for the Vue instance. Vue will recursively convert its properties into getter/setters
                        to make it “reactive”. ${chalk.bold('The object must be plain')}: native objects such as browser API objects
                        and prototype properties are ignored. A rule of thumb is that data should just be data - 
                        it is not recommended to observe objects with its own stateful behavior.Once observed, you
                        can no longer add reactive properties to the root data object. It is therefore recommended
                        to declare all root-level reactive properties upfront, before creating the instance. After the
                        instance is created, the original data object can be accessed as ${colorArgs('vm.$data')}. The Vue instance
                        also proxies all the properties found on the data object, so ${colorArgs('vm.a')} will be equivalent to
                        ${colorArgs('vm.$data.a')}. Properties that start with ${colorArgs('_')} or ${colorArgs('$')} will ${chalk.bold('not')} be proxied on the Vue instance because they may conflict
                        with Vue’s internal properties and API methods. You will have to access them as ${colorArgs('vm.$data._property')}.
                        When defining a ${chalk.bold('component')}, ${colorArgs('data')} must be declared as a function that returns the initial data object,
                        because there will be many instances created using the same definition.
                        If we still use a plain object for ${colorArgs('data')}, that same object will be ${chalk.bold('shared by reference')}
                        across all instances created! By providing a ${colorArgs('data')} function, every time a new instance is created, we can simply
                        call it to return a fresh copy of the initial data. If required, a deep clone of the original object can be
                        obtained by passing ${colorArgs('vm.$data')} through ${colorArgs('JSON.parse(JSON.stringify(...))')}.`,
    example: `
                        ${colorArgs('var')} data = { a: ${colorPrimitive('1')} }
                        ${colorComment('// direct instance creation')}
                        ${colorArgs('var')} vm = ${colorArgs('new')} Vue({
                            data: data
                        })
                        vm.a ${colorComment('// -> 1')}
                        vm.$data === data ${colorComment('// -> true')}
                        ${colorComment('// must use function when in Vue.extend()')}
                        ${colorArgs('var')} Component = Vue.extend({
                            data: ${chalk.blue('function')} () {
                                ${colorArgs('return')} { a: ${colorPrimitive('1')} }
                            }
                        })
                        Note that you should not use an arrow function with the ${colorArgs('data')}
                        property (e.g. ${colorArgs('data: () => { return { a: this.myProp }}')} ). The reason is 
                        arrow functions bind the parent context, so ${colorArgs('this')} will not be the Vue instance
                        as you expect and ${colorArgs('this.myProp')} will be undefined.`

}

const PROPS = {
    category: 'Options/Data',
    name: 'props',
    type: 'Array<string> | Object',
    details: `A list/hash of attributes that are exposed to accept data from the parent component. It has a
                        simple Array-based syntax and an alternative Object-based syntax that allows advanced
                        configurations such as type checking, custom validation and default values.`,
    example: `
                        ${colorComment('// simple syntax')}
                        Vue.component(${chalk.green("'props-demo-simple'")}, {
                        props: [${chalk.green("'size'")}, ${chalk.green("'myMessage'")}]
                        })
                        ${colorComment('// object syntax with validation')}
                        Vue.component(${chalk.green("'props-demo-advanced'")}, {
                            props: {
                                ${colorComment('// just type check')}
                                height: ${chalk.green('Number')},
                                ${colorComment('// type check plus other validations')}
                                age: {
                                    type: ${chalk.green('Number')},
                                    default: ${colorPrimitive('0')},
                                    required: ${colorPrimitive('true')},
                                    validator: ${chalk.blue('function')} (value) {
                                        ${colorArgs('return')} value >= ${colorPrimitive('0')}
                                    }
                                }
                            }
                        })
    `

}

const PROPS_DATA = {
    category: 'Options/Data',
    name: 'propsData',
    type: '{ [key: string]: any}',
    restrictions: `only respected in instance creation via ${colorArgs('new')}.`,
    details: `Pass props to an instance during its creation.
                        This is primarily intended to make unit testing easier.`,
    example: `
                        ${colorArgs('var')} Comp = Vue.extend({
                            props: [${chalk.green("'msg'")}],
                            template: ${chalk.green("'<div>{{ msg }}</div>'")}
                        })
                        ${colorArgs('var')} vm = ${colorArgs('new')} Comp({
                            propsData: {
                                msg: ${chalk.green("'hello'")}
                            }
                        })
    `
}

const COMPUTED = {
    category: 'Options/Data',
    name: 'computed',
    type: '{ [key: string]: Function | {get: Function, set: Function } }',
    details: `Computed properties to be mixed into the Vue instance. All getters and setters have their
                        ${colorArgs('this')} context automatically bound to the Vue instance.
                        Note that ${chalk.bold('you should not use an arrow function to define a computed property')}
                        (e.g. ${colorArgs('aDouble: () => this.a * 2')}). The reason is arrow functions bind the parent context,
                        so ${colorArgs('this')} will not be the Vue instance as you expect and ${colorArgs('this.a')} will be undefined.
                        Computed properties are cached, and only re-computed on reactive dependency changes.
                        Note that if a certain dependency is out of the instance’s scope (i.e. not reactive),
                        the computed property will ${chalk.bold('not')} be updated.`,
    example: `
                        ${colorArgs('var')} vm = ${colorArgs('new')} Vue({
                            data: { a: ${colorPrimitive('1')} },
                            computed: {
                                ${colorComment('// get only, just need a function')}
                                aDouble: ${chalk.blue('function')} () {
                                    ${colorArgs('return this')}.a * ${colorPrimitive('2')}
                                },
                                ${colorComment('// both get and set')}
                                aPlus: {
                                    get: ${chalk.blue('function')} () {
                                        ${colorArgs('return this')}.a + ${colorPrimitive('1')}
                                    },
                                    set: ${chalk.blue('function')} (v) {
                                        ${colorArgs('this')}.a = v - ${colorPrimitive('1')}
                                    }
                                }
                            }
                        })
                        vm.aPlus   ${colorComment('// -> 2')}
                        vm.aPlus = ${colorPrimitive('3')}
                        vm.a       ${colorComment('// -> 2')}
                        vm.aDouble ${colorComment('// -> 4')}
    
    `
}

const METHODS = {
    category: 'Options/Data',
    name: 'methods',
    type: '{ [key: string]: Function }',
    details: `Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance,
                        or use them in directive expressions. All methods will have their ${colorArgs('this')} context automatically
                        bound to the Vue instance.
                        Note that ${chalk.bold('you should not use an arrow function to define a method')} (e.g. ${colorArgs('plus: () => this.a++')}).
                        The reason is arrow functions bind the parent context, so ${colorArgs('this')} will not be the Vue instance
                        as you expect and ${colorArgs('this.a')} will be undefined.`,
    example: `
                        ${colorArgs('var')} vm = ${colorArgs('new')} Vue({
                            data: { a: ${colorPrimitive('1')} },
                            methods: {
                                plus: ${chalk.blue('function')} () {
                                    ${colorArgs('this')}.a++
                                }
                            }
                        })
                        vm.plus()
                        vm.a ${colorComment('// 2')}
    
    `
}

const WATCH = {
    category: 'Options/Data',
    name: 'watch',
    type: '{ [key: string]: string | Function | Object }',
    details: `An object where keys are expressions to watch and values are the corresponding callbacks.
                        The value can also be a string of a method name, or an Object
                        that contains additional options. The Vue instance will call
                        ${colorArgs('$watch()')} for each entry in the object at instantiation.`,
    example: `
                        ${colorArgs('var')} vm = ${colorArgs('new')} Vue({
                        data: {
                            a: ${colorPrimitive('1')},
                            b: ${colorPrimitive('2')},
                            c: ${colorPrimitive('3')}
                        },
                        watch: {
                            a: ${chalk.blue('function')} (val, oldVal) {
                                ${chalk.green('console')}.log(${chalk.green("'new: %s, old: %s'")}, val, oldVal)
                            },
                            ${colorComment('// string method name')}
                            b: ${chalk.green("'someMethod'")},
                            ${colorComment('// deep watcher')}
                            c: {
                                handler: ${chalk.blue('function')} (val, oldVal) { ${colorComment('/* ... */')} },
                                deep: ${colorPrimitive('true')}
                            }
                        }
                        })
                        vm.a = ${colorPrimitive('2')} ${colorComment('// -> new: 2, old: 1')}

                        Note that ${chalk.bold('you should not use an arrow function to define a watcher')} (e.g.
                        ${colorArgs('searchQuery: newValue => this.updateAutocomplete(newValue)')}).
                        The reason is arrow functions bind the parent context, so ${colorArgs('this')} will
                        not be the Vue instance as you expect and ${colorArgs('this.updateAutocomplete')} will be undefined.
    `
}


module.exports = {
    DATA,
    PROPS,
    PROPS_DATA,
    COMPUTED,
    METHODS,
    WATCH
}

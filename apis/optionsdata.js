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
                        across all instances created! By providing a ${colorArgs('data')} function, every time a new instance is created, we can simply call it to return a 
                        fresh copy of the initial data. If required, a deep clone of the original object can be obtained by passing
                        ${colorArgs('vm.$data')} through ${colorArgs('JSON.parse(JSON.stringify(...))')}.`,
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

}

const PROPS_DATA = {

}

const COMPUTED = {

}

const METHODS = {

}

const WATCH = {

}


module.exports = {
    DATA,
    PROPS,
    PROPS_DATA,
    COMPUTED,
    METHODS,
    WATCH
}

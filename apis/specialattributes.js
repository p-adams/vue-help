const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Special Attributes'

const KEY = {
    category: cat,
    name: 'key',
    expects: 'string',
    details: `The ${colorArgs(`key`)} special attribute is primarily used as a hint for
                        Vue’s virtual DOM algorithm to identify VNodes when diffing the new list
                        of nodes against the old list. Without keys, Vue uses an algorithm
                        that minimizes element movement and tries to patch/reuse elements of the same type
                        in-place as much as possible. With keys, it will reorder elements based on the order
                        change of keys, and elements with keys that are no longer present will always be removed/destroyed.
                        Children of the same common parent must have ${chalk.bold(`unique keys`)}. Duplicate keys will cause render errors.
                        The most common use case is combined with ${colorArgs(`v-for`)}:

                        ${chalk.blue(`<ul>
                            <li v-for=${chalk.green(`"item in items" :key="item.id"`)}>${chalk.cyan(`...`)}</li>
                        </ul>`)}

                        It can also be used to force replacement of an element/component instead of reusing it.
                        This can be useful when you want to:

                            * Properly trigger lifecycle hooks of a component
                            * Trigger transitions
    `,
    example:`
                        ${chalk.blue(`<transition>
                            <span :key=${chalk.green(`"text"`)}>${chalk.cyan(`{{ text }}`)}</span>
                        </transition>`)}

                        When ${colorArgs(`text`)} changes, the ${colorArgs(`<span>`)} will always be replaced instead of patched,
                        so a transition will be triggered.
    `
}
const REF = {
    category: cat,
    name: `ref`,
    expects: `string`,
    details: `${colorArgs(`ref`)} is used to register a reference to an element or a child component.
                        The reference will be registered under the parent component’s ${colorArgs(`$refs`)} object.
                        If used on a plain DOM element, the reference will be that element;
                        if used on a child component, the reference will be component instance:

                        ${colorComment(`<!-- vm.$refs.p will be the DOM node -->`)}
                        ${chalk.blue(`<p ref=${chalk.green(`"p"`)}>${chalk.cyan(`hello`)}</p>
                        ${colorComment(`<!-- vm.$refs.child will be the child comp instance -->`)}
                        <child-comp ref=${chalk.green(`"child"`)}></child-comp>`)}

                        When used on elements/components with ${colorArgs(`v-for`)}, the registered reference will
                        be an Array containing DOM nodes or component instances.
                        An important note about the ref registration timing: because the refs
                        themselves are created as a result of the render function, you cannot
                        access them on the initial render - they don’t exist yet! ${colorArgs(`$refs`)} is also
                        non-reactive, therefore you should not attempt to use it in templates for data-binding.
    `
}
const SLOT = {
    category: cat,
    name: 'slot',
    expects: 'string',
    details: `Used on content inserted into child components to indicate which named slot the content belongs to.
                        For detailed usage, see the guide section linked below.`
}
const IS = {
    category: cat,
    name: 'is',
    expects: 'string',
    details: `Used for dynamic components and to work around limitations of in-DOM templates.`,
    example: `
                        ${colorArgs(`<!-- component changes when currentView changes -->`)}
                        ${chalk.blue(`<component v-bind:is=${chalk.green(`"currentView"`)}></component>
                        ${colorComment(`<!-- necessary because <my-row> would be invalid inside -->
                        <!-- a <table> element and so would be hoisted out      -->`)}
                        <table>
                            <tr is=${chalk.green(`"my-row"`)}></tr>
                        </table>`)}
    `
}


module.exports = {
    KEY,
    REF,
    SLOT,
    IS
}
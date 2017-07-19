const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const NAME = {
    category: 'Options/Misc',
    name: 'name',
    type: 'string',
    restrictions: 'only respected when used as a component option',
    details: `Allow the component to recursively invoke itself in its template.
                        Note that when a component is registered globally with ${colorArgs('Vue.component()')},
                        the global ID is automatically set as its name.
                        Another benefit of specifying a ${colorArgs('name')} option is debugging.
                        Named components result in more helpful warning messages.
                        Also, when inspecting an app in the ${chalk.green('vue-devtools')}, unnamed components
                        will show up as ${colorArgs('<AnonymousComponent>')}, which isn’t very informative.
                        By providing the ${colorArgs('name')} option, you will get a much more informative
                        component tree.
                        `

}
const DELIMITERS = {
    category: 'Options/Misc',
    name: 'delimiters',
    type: 'Array<string>',
    def: '["{{", "}}"]',
    details: `Change the plain text interpolation delimiters.
                        ${chalk.bold('This option is only available in the full build')}.`,
    example: `
                        ${colorArgs('new')} Vue({
                            delimiters: [${chalk.green("'${'")}, ${chalk.green("'}'")}]
                        })
                        ${colorComment('// Delimiters changed to ES6 template string style')}
    `

}
const FUNCTIONAL = {
    category: 'Option/Misc',
    name: 'functional',
    type: 'boolean',
    details: `Causes a component to be stateless (no ${colorArgs('data')} and instanceless (no ${colorArgs('this')} context).
                        They are simply a ${colorArgs('render')} function that returns virtual nodes making them much cheaper to render.`
}
const MODEL = {
    category: 'Options/Misc',
    name: 'model',
    type: '{ prop?: string, event?: string }',
    details: `Allows a custom component to customize the prop and event used when it’s used with ${colorArgs('v-model')}.
                        By default, ${colorArgs('v-model')} on a component uses ${colorArgs('value')} as the prop and input as the event,
                        but some input types such as checkboxes and radio buttons may want to use the ${colorArgs('value')}
                        prop for a different purpose. Using the ${colorArgs('model')} option can avoid the conflict in such cases.
    `,
    example: `
                        Vue.component(${chalk.green("'my-checkbox'")}, {
                            model: {
                                prop: ${chalk.green("'checked'")},
                                event: ${chalk.green("'change'")}
                            },
                            props: {
                                ${colorComment(`// this allows using the 'value' prop for a different purpose`)}
                                value: ${chalk.green("String")},
                                ${colorComment(`// use 'checked' as the prop which take the place of 'value'`)}
                                checked: {
                                    type: ${chalk.green("Number")},
                                    default: ${colorPrimitive("0")}
                                }
                            },
                            ${colorComment('// ...')}
                        })

                        ${chalk.blue('<my-checkbox v-model=')}${chalk.green('"foo"')} ${chalk.blue('value=')}${chalk.green('"foo"')}${chalk.blue('></my-checkbox>')}

                        The above will be equivalent to:

                        ${chalk.blue('<my-checkbox')}
                        :checked=${chalk.green('"foo"')} 
                        @change=${chalk.green('"val => { foo = val }"')} 
                        value=${chalk.green('"some value"')} >
                        ${chalk.blue('</my-checkbox>')}
    
    `
}
const INHERIT_ATTRS = {
    category: 'Options/Misc',
    name: 'inheritAttrs',
    type: 'boolean',
    def: 'true',
    details: `By default, parent scope attribute bindings that are not recognized as props will “fallthrough”
                        and be applied to the root element of the child component as normal HTML attributes.
                        When authoring a component that wraps a target element or another component,
                        this may not always be the desired behavior. By setting ${colorArgs('inheritAttrs')} to ${colorArgs('false')},
                        this default behavior can be disabled. The attributes are available via the ${colorArgs('$attrs')} instance property
                        (also new in 2.4) and can be explicitly bound to a non-root element using ${colorArgs('v-bind')}.
    
    `
}
const COMMENTS = {
    category: 'Options/Misc',
    name: 'comments',
    type: 'boolean',
    def: 'false',
    details: `When set to ${colorArgs('true')}, will preserve and render HTML comments found in templates.
                        The default behavior is discarding them.`
}


module.exports = {
    NAME,
    DELIMITERS,
    FUNCTIONAL,
    MODEL,
    INHERIT_ATTRS,
    COMMENTS
}
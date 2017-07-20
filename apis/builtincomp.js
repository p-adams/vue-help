const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs


const cat = 'Built-In Components'

const COMPONENT = {
    category: cat,
    name: `component`,
    props: `

                        * ${colorArgs(`is`)} - string | ComponentDefinition | ComponentConstructor
                        * ${colorArgs(`inline-template`)} - boolean

    `,
    usage: `A “meta component” for rendering dynamic components.
                        The actual component to render is determined by the ${colorArgs(`is`)} prop:

                        ${colorComment(`<!-- a dynamic component controlled by -->`)}
                        ${colorComment(`<!-- the 'componentId' property on the vm -->`)}
                        ${chalk.blue(`<component :is=${chalk.green(`"componentId"`)}></component>`)}

                        ${colorComment(`<!-- can also render registered component or component passed as prop -->`)}
                        ${chalk.blue(`<component :is=${chalk.green(`"$options.components.child"`)}></component>`)}
    
    
    `
}
const TRANSITION = {
    category: cat,
    name: `transition`,
    props: `
            
                        * ${colorArgs(`name`)} - string, Used to automatically generate transition CSS class names.
                            e.g. ${colorArgs(`name: 'fade'`)} will auto expand to ${colorArgs(`.fade-enter`)},
                            ${colorArgs(`.fade-enter-active`)}, etc. Defaults to  ${colorArgs(`"v"`)}.
                        * ${colorArgs(`appear`)} - boolean, Whether to apply transition on initial render. Defaults to ${colorArgs(`false`)}.
                        * ${colorArgs(`css`)} - boolean, Whether to apply CSS transition classes. Defaults to ${colorArgs(`true`)}.
                            If set to ${colorArgs(`false`)}, will only trigger JavaScript hooks registered via component events.
                        * ${colorArgs(`type`)} - string, Specify the type of transition events to wait for to determine transition end timing.
                            Available values are ${colorArgs(`"transition"`)} and ${colorArgs(`"animation"`)}.
                            By default, it will automatically detect the type that has a longer duration.
                        * ${colorArgs(`mode`)} - string, Controls the timing sequence of leaving/entering transitions. Available modes are
                           ${colorArgs(`"out-in"`)} and ${colorArgs(`"in-out"`)}; defaults to simultaneous.
                        * ${colorArgs(`enter-class`)} - string
                        * ${colorArgs(`leave-class`)} - string
                        * ${colorArgs(`appear-class`)} - string
                        * ${colorArgs(`enter-to-class`)} - string
                        * ${colorArgs(`leave-to-class`)} - string
                        * ${colorArgs(`appear-to-class`)} - string
                        * ${colorArgs(`enter-active-class`)} - string
                        * ${colorArgs(`leave-active-class`)} - string
                        * ${colorArgs(`appear-active-class`)} - string
    `,
    events: `
    
                        * ${colorArgs(`before-enter`)}
                        * ${colorArgs(`before-leave`)}
                        * ${colorArgs(`before-appear`)}
                        * ${colorArgs(`enter`)}
                        * ${colorArgs(`leave`)}
                        * ${colorArgs(`appear`)}
                        * ${colorArgs(`after-enter`)}
                        * ${colorArgs(`after-leave`)}
                        * ${colorArgs(`after-appear`)}
                        * ${colorArgs(`enter-cancelled`)}
                        * ${colorArgs(`enter-cancelled`)} (v-show only)
                        * ${colorArgs(`appear-cancelled`)}

    `,
    usage: `${colorArgs(`<transition>`)} serve as transition effects for ${chalk.bold(`single`)} element/component.
                        The ${colorArgs(`<transition>`)} does not render an extra DOM element,
                        nor does it show up in the inspected component hierarchy.
                        It simply applies the transition behavior to the wrapped content inside.

                        ${colorComment(`<!-- simple element -->`)}
                        ${chalk.blue(`<transition>
                            <div v-if=${chalk.green(`"ok"`)}>${chalk.black(`toggled content`)}</div>
                        </transition>

                        ${colorComment(`<!-- dynamic component -->`)}
                        <transition name=${chalk.green(`"fade"`)} mode=${chalk.green(`"out-in"`)} appear>
                            <component :is=${chalk.green(`"view"`)}></component>
                        </transition>

                        ${colorComment(`<!-- event hooking -->`)}
                        <div id=${chalk.green(`"transition-demo"`)}>
                            <transition @after-enter=${chalk.green(`"transitionComplete"`)}>
                                <div v-show=${chalk.green(`"ok"`)}>${chalk.black(`toggled content`)}</div>
                            </transition>
                        </div>`)}

                        ${colorArgs(`new`)} Vue({
                        ...
                            methods: {
                                transitionComplete: ${chalk.blue(`function`)} (el) {
                                ${colorComment(`// for passed 'el' that DOM element as the argument, something ...`)}
                                }
                            }
                        ...
                        }).$mount(${chalk.green(`'#transition-demo'`)})
    
    `
}
const TRANSITION_GROUP = {
    category: cat,
    name: `transition-group`,
    props: `
    

                        * ${colorArgs(`tag`)} - string, defaults to ${colorArgs(`span`)}.
                        * ${colorArgs(`move-class`)} - overwrite CSS class applied during moving transition.
                        * exposes the same props as ${colorArgs(`<transition>`)} except ${colorArgs(`mode`)}.
    `,
    events: `
    
                        * exposes the same events as ${colorArgs(`<transition>`)}.
    `,
    usage: `${colorArgs(`<transition-group>`)} serve as transition effects for ${chalk.bold(`multiple`)}
                        elements/components. The ${colorArgs(`<transition-group>`)} renders a real DOM element.
                        By default it renders a ${colorArgs(`<span>`)}, and you can configure what element it
                        should render via the ${colorArgs(`tag`)} attribute. Note every child in a ${colorArgs(`<transition-group>`)}
                        must be ${chalk.bold(`uniquely keyed`)} for the animations to work properly.
                        
                        ${colorArgs(`<transition-group>`)} supports moving transitions via CSS transform.
                        When a child’s position on screen has changed after an updated,
                        it will get applied a moving CSS class (auto generated from the ${colorArgs(`name`)} attribute
                        or configured with the ${colorArgs(`move-class`)} attribute). If the CSS transform property is
                        “transition-able” when the moving class is applied, the element will be smoothly
                        animated to its destination using the ${chalk.green(`FLIP technique`)}.

                        ${chalk.blue(`<transition-group tag=${chalk.green(`"ul"`)} name=${chalk.green(`"slide"`)}>
                            <li v-for=${chalk.green(`"item in items"`)} :key=${chalk.green(`"item.id"`)}>
                                ${chalk.black(`{{ item.text }}`)}
                            </li>
                        </transition-group>`)}
    `
}
const KEEP_ALIVE = {
    category: cat,
    name: 'keep-alive',
    props: `
    

                        * ${colorArgs(`include`)} - string or RegExp or Array. Only components matched by this will be cached.
                        * ${colorArgs(`exclude`)} - string or RegExp or Array. Any component matched by this will not be cached.
    `,
    usage: `When wrapped around a dynamic component, ${colorArgs(`<keep-alive>`)} caches
                        the inactive component instances without destroying them.
                        Similar to ${colorArgs(`<transition>`)}, ${colorArgs(`<keep-alive>`)} is an abstract component:
                        it doesn’t render a DOM element itself, and doesn’t show up
                        in the component parent chain.

                        When a component is toggled inside ${colorArgs(`<keep-alive>`)}, its ${colorArgs(`activated`)}
                        and ${colorArgs(`deactivated`)} lifecycle hooks will be invoked accordingly.

                        In 2.2.0 and above, ${colorArgs(chalk.bold(`activated`))} and ${colorArgs(chalk.bold(`deactivated`))} will fire for all
                        nested components inside a ${colorArgs(chalk.bold(`<keep-alive>`))} tree.

                        Primarily used with preserve component state or avoid re-rendering.
    
                        ${colorComment(`<!-- basic -->`)}
                        ${chalk.blue(`<keep-alive>
                            <component :is=${chalk.green(`"view"`)}></component>
                        </keep-alive>
                        ${colorComment(`<!-- multiple conditional children -->`)}
                        <keep-alive>
                            <comp-a v-if=${chalk.green(`"a > 1"`)}></comp-a>
                            <comp-b v-else></comp-b>
                        </keep-alive>
                        ${colorComment(`<!-- used together with <transition> -->`)}
                        <transition>
                            <keep-alive>
                                <component :is=${chalk.green(`"view"`)}></component>
                            </keep-alive>
                        </transition>`)}


                        Note, ${colorArgs(`<keep-alive>`)} is designed for the case where it has one
                        direct child component that is being toggled. It does not work if you
                        have ${colorArgs(`v-for`)} inside it. When there are multiple conditional children,
                        as above, ${colorArgs(`<keep-alive>`)} requires that only one child is rendered
                        at a time.

                        ${chalk.underline(`include and exclude`)}

                        ${chalk.bold(`New in 2.1.0`)}

                        The ${colorArgs(chalk.bold('include'))} and ${colorArgs(chalk.bold('exclude'))} props allow components to be conditionally cached.
                        Both props can be a comma-delimited string, a RegExp or an Array:

                        ${colorComment(`<!-- comma-delimited string -->`)}
                        ${chalk.blue(`<keep-alive include=${chalk.green(`"a,b"`)}>
                            <component :is=${chalk.green(`"view"`)}></component>
                        </keep-alive>
                        ${colorComment(`<!-- regex (use v-bind) -->`)}
                        <keep-alive :include=${chalk.green(`"/a|b/"`)}>
                            <component :is=${chalk.green(`"view"`)}></component>
                        </keep-alive>
                        ${colorComment(`<!-- Array (use v-bind) -->`)}
                        <keep-alive :include=${chalk.green(`"['a', 'b']"`)}>
                            <component :is=${chalk.green(`"view"`)}></component>
                        </keep-alive>`)}

                        The match is first checked on the component’s own ${colorArgs(`name`)} option,
                        then its local registration name (the key in the parent’s ${colorArgs(`components`)}
                        option) if the ${colorArgs(`name`)} option is not available. Anonymous components
                        cannot be matched against.

                        ${colorArgs(`<keep-alive>`)} does not work with functional components because they
                        do not have instances to be cached.

    
    `
}
const SLOT_COMPONENT = {
    category: cat,
    name: 'slot',
    props: `
    
                        * ${colorArgs('slot')} -string, Used for named slot.
    `,
    usage: `
    
                        ${colorArgs(`<slot>`)} serve as content distribution outlets in component templates.
                        ${colorArgs(`<slot>`)} itself will be replaced.
    
    `
}


module.exports = {
    COMPONENT,
    TRANSITION,
    TRANSITION_GROUP,
    KEEP_ALIVE,
    SLOT_COMPONENT
}
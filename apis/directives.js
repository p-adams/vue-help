const chalk = require('chalk')
const custom = require('../customcolors')
const colorComment = custom.colorComment
const colorPrimitive = custom.colorPrimitive
const colorError = custom.colorError
const colorArgs = custom.colorArgs

const cat = 'Directives'


const V_TEXT = {
    category: cat,
    name: 'v-text',
    expects: 'string',
    details: `Updates the element’s ${colorArgs(`textContent`)}. If you need to update
                        the part of ${colorArgs(`textContent`)}, you should use ${colorArgs(`{{ Mustache }}`)} interpolations.`,
    example: `
                        ${chalk.blue(`<span v-text=${chalk.green(`"msg"`)}></span>`)}
                            ${colorComment(`<!-- same as -->`)}
                       ${chalk.blue(`<span>${chalk.cyan(`{{msg}}`)}</span>`)}
    `
}
const V_HTML = {
    category: cat,
    name: `v-html`,
    expects: 'string',
    details: `Updates the element’s ${colorArgs(`innerHTML`)}. ${chalk.bold(`Note that the contents
                        are inserted as plain HTML - they will not be compiled
                        as Vue templates`)}. If you find yourself trying to compose
                        templates using ${colorArgs(`v-html`)}, try to rethink the solution by
                        using components instead.
                        Dynamically rendering arbitrary HTML on your website
                        can be very dangerous because it can easily lead to ${chalk.green(`XSS attacks`)}.
                        Only use ${colorArgs(`v-html`)} on trusted content and never on user-provided content.
    
    `,
    example: `
                        ${chalk.blue(`<div v-html=${chalk.green('"html"')}></div>`)}`
}
const V_SHOW = {
    category: cat,
    name: 'v-show',
    expects: 'any',
    usage: `Toggle’s the element’s ${colorArgs(`display`)} CSS property based
                        on the truthy-ness of the expression value. This directive triggers
                        transitions when its condition changes.`
}
const V_IF = {
    category: cat,
    name: 'v-if',
    expects: 'any',
    usage: `Conditionally render the element based on the truthy-ness
                        of the expression value. The element and its contained directives / components
                        are destroyed and re-constructed during toggles. If the element is a
                        ${colorArgs(`<template>`)} element, its content will be extracted as the conditional block.
                        This directive triggers transitions when its condition changes.
                        When used together with v-if, v-for has a higher priority than v-if.
                        See the ${chalk.green(`list rendering guide`)} for details.
                        `
}
const V_ELSE = {
    category: cat,
    name: 'v-else',
    expects: 'Does not expect expression',
    restriction: `previous sibling element must have ${colorArgs('v-if')} or ${colorArgs(`v-else-if`)}`,
    usage: `Denote the “else block” for ${colorArgs(`v-if`)} or a ${colorArgs(`v-if`)}/${colorArgs(`v-else-if`)} chain.
                        ${chalk.blue(`<div v-if=${chalk.green(`"Math.random() > 0.5"`)}>
                            ${chalk.cyan(`Now you see me`)}
                        </div>
                        <div v-else>
                            ${chalk.cyan(`Now you don't`)}
                        </div>`)}`
}
const V_ELSE_IF = {
    category: cat,
    name: `v-else-if`,
    expects: 'any',
    restriction: `previous sibling element must have ${colorArgs('v-if')} or ${colorArgs(`v-else-if`)}`,
    usage: `Denote the “else if block” for ${colorArgs(`v-if`)}. Can be chained.
                        ${chalk.blue(`<div v-if=${chalk.green(`"type === 'A'"`)}>
                            ${chalk.cyan(`A`)}
                        </div>
                        <div v-else-if=${chalk.green(`"type === 'B'"`)}>
                            ${chalk.cyan(`B`)}
                        </div>
                        <div v-else-if=${chalk.green(`"type === 'C'"`)}>
                            ${chalk.cyan(`C`)}
                        </div>
                        <div v-else>
                            ${chalk.cyan(`Not A/B/C`)}
                        </div>`)}
    `
}
const V_FOR = {
    category: cat,
    name: `v-for`,
    expects: `Array | Object | number | string`,
    usage: `Render the element or template block multiple times
                        based on the source data. The directive’s value must use
                        the special syntax ${colorArgs(`alias in expression`)} to provide an alias
                        for the current element being iterated on:

                        ${chalk.blue(`<div v-for=${chalk.green(`"item in items"`)}>
                            ${chalk.cyan(`{{ item.text }}`)}
                        </div>`)}
                        
                        Alternatively, you can also specify an alias for the index
                        (or the key if used on an Object):

                        ${chalk.blue(`<div v-for=${chalk.green(`"(item, index) in items"`)}></div>
                        <div v-for=${chalk.green(`"(val, key) in object"`)}></div>
                        <div v-for=${chalk.green(`"(val, key, index) in object"`)}></div>`)}

                        The default behavior of ${colorArgs(`v-for`)} will try to patch the elements
                        in-place without moving them. To force it to reorder elements, you need to
                        provide an ordering hint with the ${colorArgs(`key`)} special attribute:

                        ${chalk.blue(`<div v-for=${chalk.green(`"item in items" :key="item.id"`)}>
                            ${chalk.cyan(`{{ item.text }}`)}
                        </div>`)}

                        When used together with v-if, v-for has a higher priority than v-if.
                        See the ${chalk.green(`list rendering guide for details`)}.`
}
const V_ON = {
    category: cat,
    name: `v-on`,
    shorthand: '@',
    expects: `Function | Inline Statement | Object`,
    arguments: [
        `event`
    ],
    modifiers: `

                        ${colorArgs(`.stop`)} - call ${colorArgs(`event.stopPropagation()`)}.
                        ${colorArgs(`.prevent`)} - call ${colorArgs(`event.preventDefault()`)}.
                        ${colorArgs(`.capture`)} - add event listener in capture mode.
                        ${colorArgs(`.self`)} - only trigger handler if event was dispatched from this element.
                        ${colorArgs(`.{keyCode | keyAlias}`)} - only trigger handler on certain keys.
                        ${colorArgs(`.native`)} - listen for a native event on the root element of component.
                        ${colorArgs(`.once`)} - trigger handler at most once.
                        ${colorArgs(`.left`)} - (2.2.0+) only trigger handler for left button mouse events.
                        ${colorArgs(`.right`)} - (2.2.0+) only trigger handler for right button mouse events.
                        ${colorArgs(`.middle`)} - (2.2.0+) only trigger handler for middle button mouse events.
                        ${colorArgs(`.passive`)} - (2.3.0+) attaches a DOM event with ${colorArgs(`{ passive: true }`)}.`,

    usage: `Attaches an event listener to the element. The event type
                        is denoted by the argument. The expression can either be
                        a method name or an inline statement, or simply omitted
                        when there are modifiers present. Starting in ${colorArgs(`2.4.0`)}, ${colorArgs(`v-on`)} also
                        supports binding to an object of event/listener pairs without
                        an argument. Note when using the object syntax, it does not support any modifiers.
                        When used on a normal element, it listens to ${chalk.bold(`native DOM events`)} only.
                        When used on a custom element component, it also listens to ${chalk.bold(`custom events`)}
                        emitted on that child component. When listening to native DOM events,
                        the method receives the native event as the only argument.
                        If using inline statement, the statement has access to the
                        special ${colorArgs(`$event`)} property: ${colorArgs(`v-on:click="handle('ok', $event)"`)}.`,
    example: `
                        ${colorComment(`<!-- method handler -->`)}
                        ${chalk.blue(`<button v-on:click=${chalk.green(`"doThis"`)}></button>
                        ${colorComment(`<!-- object syntax (2.4.0+) -->`)}
                        <button v-on=${chalk.green(`"{ mousedown: doThis, mouseup: doThat }"`)}></button>
                        ${colorComment(`<!-- inline statement -->`)}
                        <button v-on:click=${chalk.green(`"doThat('hello', $event)"`)}></button>
                        ${colorComment(`<!-- shorthand -->`)}
                        <button @click=${chalk.green(`"doThis"`)}></button>
                        ${colorComment(`<!-- stop propagation -->`)}
                        <button @click.stop=${chalk.green(`"doThis"`)}></button>
                        ${colorComment(`<!-- prevent default -->`)}
                        <button @click.prevent=${chalk.green(`"doThis"`)}></button>
                        ${colorComment(`<!-- prevent default without expression -->`)}
                        <form @submit.prevent></form>
                        ${colorComment(`<!-- chain modifiers -->`)}
                        <button @click.stop.prevent=${chalk.green(`"doThis"`)}></button>
                        ${colorComment(`<!-- key modifier using keyAlias -->`)}
                        <input @keyup.enter=${chalk.green(`"onEnter"`)}>
                        ${colorComment(`<!-- key modifier using keyCode -->`)}
                        <input @keyup.13=${chalk.green(`"onEnter"`)}>
                        ${colorComment(`<!-- the click event will be triggered at most once -->`)}
                        <button v-on:click.once=${chalk.green(`"doThis"`)}></button>`)}


                        Listening to custom events on a child component
                        (the handler is called when “my-event” is emitted on the child):

                        ${chalk.blue(`<my-component @my-event=${chalk.green(`"handleThis"`)}></my-component>
                        ${colorComment(`<!-- inline statement -->`)}
                        <my-component @my-event=${chalk.green(`"handleThis(123, $event)"`)}></my-component>
                        ${colorComment(`<!-- native event on component -->`)}
                        <my-component @click.native=${chalk.green(`"onClick"`)}></my-component>`)}
                `
}
const V_BIND = {
    category: cat,
    name: 'v-bind',
    shorthand: ':',
    expects: `any (with arguments) | Object (without argument)`,
    arguments: [
        `attrOrProp (optional)`
    ],
    modifiers: `
                        ${colorArgs(`.prop`)} - Bind as a DOM property instead of an attribute (what’s the difference?).
                        If the tag is a component then ${colorArgs(`.prop`)} will set the property on the component’s ${colorArgs(`$el`)}.
                        ${colorArgs(`.camel`)} - (2.1.0+) transform the kebab-case attribute name into camelCase.
                        ${colorArgs(`.sync`)} - (2.3.0+) a syntax sugar that expands into a ${colorArgs(`v-on`)} handler for updating the bound value.`,

    usage: `Dynamically bind one or more attributes, or a component prop to an expression.
                        When used to bind the ${colorArgs(`class`)} or ${colorArgs(`style`)} attribute, it supports additional value types
                        such as Array or Objects. See linked guide section below for more details.
                        When used for prop binding, the prop must be properly declared in the child component.
                        When used without an argument, can be used to bind an object containing attribute name-value pairs.
                        Note in this mode ${colorArgs(`class`)} and ${colorArgs(`style`)} does not support Array or Objects.`,
    
    example: `
                        ${colorComment(`<!-- bind an attribute -->`)}
                        <img v-bind:src=${chalk.green(`"imageSrc"`)}>
                        ${colorComment(`<!-- shorthand -->`)}
                        <img :src=${chalk.green(`"imageSrc"`)}>
                        ${colorComment(`<!-- with inline string concatenation -->`)}
                        <img :src=${chalk.green(`"'/path/to/images/' + fileName"`)}>
                        ${colorComment(`<!-- class binding -->`)}
                        <div :class=${chalk.green(`"{ red: isRed }"`)}></div>
                        <div :class=${chalk.green(`"[classA, classB]"`)}></div>
                        <div :class=${chalk.green(`"[classA, { classB: isB, classC: isC }]"`)}>
                        ${colorComment(`<!-- style binding -->`)}
                        <div :style=${chalk.green(`"{ fontSize: size + 'px' }"`)}></div>
                        <div :style=${chalk.green(`"[styleObjectA, styleObjectB]"`)}></div>
                        ${colorComment(`<!-- binding an object of attributes -->`)}
                        <div v-bind=${chalk.green(`"{ id: someProp, 'other-attr': otherProp }"`)}></div>
                        ${colorComment(`<!-- DOM attribute binding with prop modifier -->`)}
                        <div v-bind:text-content.prop=${chalk.green(`"text"`)}></div>
                        ${colorComment(`<!-- prop binding. "prop" must be declared in my-component. -->`)}
                        <my-component :prop=${chalk.green(`"someThing"`)}></my-component>
                        ${colorComment(`<!-- pass down parent props in common with a child component -->`)}
                        <child-component v-bind=${chalk.green(`"$props"`)}></child-component>
                        ${colorComment(`<!-- XLink -->`)}
                        <svg><a :xlink:special=${chalk.green(`"foo"`)}></a></svg>

                        The ${colorArgs(`.camel`)} modifier allows camelizing a ${colorArgs(`v-bind`)} attribute name when using in-DOM templates,
                        e.g. the SVG ${colorArgs(`viewBox`)} attribute:

                            ${chalk.blue(`<svg :view-box.camel=${chalk.green(`"viewBox"`)}></svg>`)}

                        ${colorArgs(`.camel`)} is not needed if you are using string templates,
                        or compiling with ${colorArgs(`vue-loader`)}/${colorArgs(`vueify`)}.
    
    
    `
}
const V_MODEL = {
    category: cat,
    name: `v-model`,
    expects:  `varies based on value of form inputs element or output of components`,
    limited: `
                        * ${colorArgs('<input>')}
                        * ${colorArgs('<select>')}
                        * ${colorArgs('<textarea>')}
                        * components
    `,
    modifiers: `

                        ${colorArgs(`.lazy`)} - listen to ${colorArgs(`change`)} events instead of ${colorArgs(`input`)}
                        ${colorArgs(`.number`)} - cast input string to numbers
                        ${colorArgs(`.trim`)} - trim input
    `,
    usage: `Create a two-way binding on a form input element or a component.
                        For detailed usage and other notes, see the Guide section linked below.
    `
}
const V_PRE = {
    category: cat,
    name: 'v-pre',
    expects: 'Does not expect expression',
    usage: `Skip compilation for this element and all its children.
                        You can use this for displaying raw mustache tags. Skipping large
                        numbers of nodes with no directives on them can also speed up compilation.`,
    example: `
                        ${chalk.blue(`<span v-pre>${chalk.cyan(`{{ this will not be compiled }}`)}</span>`)}
    `
}
const V_CLOAK = {
    category: cat,
    name: `v-cloak`,
    expects: `Does not expect expression`,
    usage: `This directive will remain on the element until the associated
                        Vue instance finishes compilation. Combined with CSS rules
                        such as ${colorArgs(`[v-cloak] { display: none }`)}, this directive can be used to hide
                        un-compiled mustache bindings until the Vue instance is ready.`,
    example: `
                        [v-cloak] {
                            ${colorArgs(`display`)}: none;
                        }

                        ${chalk.blue(`<div v-cloak>
                            ${chalk.cyan(`{{ message }}`)}
                        </div>`)}

                        The ${colorArgs(`<div>`)} will not be visible until the compilation is done.
    
    `
}
const V_ONCE = {
    category: cat,
    name: `v-once`,
    expects: `Does not expect expression`,
    details: `Render the element and component ${chalk.bold(`once`)} only.
                        On subsequent re-renders, the element/component and all its children
                        will be treated as static content and skipped.
                        This can be used to optimize update performance.

                        ${colorComment(`<!-- single element -->`)}
                        ${chalk.blue(`<span v-once>${chalk.cyan(`This will never change: {{msg}}`)}</span>
                        ${colorComment(`<!-- the element have children -->`)}
                        <div v-once>
                        <h1>${chalk.cyan(`comment`)}</h1>
                        <p>${chalk.cyan(`{{msg}}`)}</p>
                        </div>
                        ${colorComment(`<!-- component -->`)}
                        <my-component v-once :comment=${chalk.green('"msg"')}></my-component>
                        ${colorComment(`<!-- v-for directive -->`)}
                        <ul>
                            <li v-for=${chalk.green(`"i in list"`)} v-once>${chalk.cyan(`{{i}}`)}</li>
                        </ul>`)}`
}

module.exports = {
    V_TEXT,
    V_HTML,
    V_SHOW,
    V_IF,
    V_ELSE,
    V_ELSE_IF,
    V_FOR,
    V_ON,
    V_BIND,
    V_MODEL,
    V_PRE,
    V_CLOAK,
    V_ONCE
}
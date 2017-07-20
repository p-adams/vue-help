const V = require('vorpal')()
const figlet = require('figlet')
const LGC = require('./logfunctions/logglobalconfig')
const LGA = require('./logfunctions/logglobalapi')
const LI = require('./logfunctions/loginstance')
const LD = require('./logfunctions/logdirectives')
const LBC = require('./logfunctions/logbuiltincomp')
const O = require('./logfunctions/logoptions')
const api = require('./API')
const gc = api.GlobalConfig
const ga = api.GlobalAPI
const od = api.OptionsData
const odom = api.OptionsDOM
const olh = api.OptionsLifecycleHooks
const oa = api.OptionsAssets
const oc = api.OptionsComposition
const om = api.OptionsMisc
const ip = api.InstanceProperties
const id = api.InstanceData
const im = api.InstanceEvents
const il = api.InstanceLifecycle
const d = api.Directives
const sa = api.SpecialAttributes
const bc = api.BuiltInComponents


figlet('vue - help', 'Standard', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(`${data}\n`)
    console.log(`Repo: https://github.com/p-adams/vue-help`)
    console.log(`Up-to-date with Vue version 2.4.0 API\n`)



    V.delimiter('vue-help$').show()

    // Global Config

    V.command('silent', 'Global Config: #silent').action(function(args, callback){
        const silent= gc[0]
        this.log(LGC.logGlobalConfig(silent))
        callback()
    })

    V.command('optionMergeStrategies', 'Global Config: #optionMergeStrategies').action(function(args, callback){
        const optMergeStrat = gc[1]
        this.log(LGC.logGlobalConfig(optMergeStrat))
        callback()
    })

    V.command('devtools', 'Global Config: #devtools').action(function(args, callback){
        const devtools = gc[2]
        this.log(LGC.logGlobalConfig(devtools))
        callback()
    })

    V.command('errorHandler', 'Global Config: #errorHandler').action(function(args, callback){
        const errorHandler = gc[3]
        this.log(LGC.logGlobalConfig(errorHandler))
        callback()
    })

    V.command('warnHandler', 'Global Config: #warnHandler').action(function(args, callback){
        const warnHandler = gc[4]
        this.log(LGC.logGlobalConfig(warnHandler))
        callback()
    })

    V.command('ignoredElements', 'Global Config: #ignoredElements').action(function(args, callback){
        const ignoredElements = gc[5]
        this.log(LGC.logGlobalConfig(ignoredElements))
        callback()
    })

    V.command('keyCodes', 'Global Config: #keyCodes').action(function(args, callback){
        const keyCodes = gc[6]
        this.log(LGC.logGlobalConfig(keyCodes))
        callback()
    })

    V.command('performance', 'Global Config: #performance').action(function(args, callback){
        const perf = gc[7]
        this.log(LGC.logGlobalConfig(perf))
        callback()
    })

    V.command('productionTip', 'Global Config: #productionTip').action(function(args, callback){
        const prod = gc[8]
        this.log(LGC.logGlobalConfig(prod))
        callback()
    })

    // Global API

    V.command('Vue.extend', 'Global API: #Vue.extend(options)').action(function(args, callback){
        const ext = ga[0]
        this.log(LGA.logGlobalAPI(ext))
        callback()
    })

    V.command('Vue.nextTick', 'Global API: #Vue.nextTick([callback,context])').action(function(args, callback){
        const nextTick = ga[1]
        this.log(LGA.logGlobalAPI(nextTick))
        callback()
    })

    V.command('Vue.set', 'Global API: #Vue.set(target,key,value)').action(function(args, callback){
        const st = ga[2]
        this.log(LGA.logGlobalAPI(st))
        callback()
    })

    V.command('Vue.delete', 'Global API: #Vue.delete(target,key)').action(function(args, callback){
        const dlt = ga[3]
        this.log(LGA.logGlobalAPI(dlt))
        callback()
    })

    V.command('Vue.directive', 'Global API: #Vue.directive(id,[definition])').action(function(args, callback){
        const dir = ga[4]
        this.log(LGA.logGlobalAPI(dir))
        callback()
    })

    V.command('Vue.filter', 'Global API: #Vue.filter(id,[definition])').action(function(args, callback){
        const flt = ga[5]
        this.log(LGA.logGlobalAPI(flt))
        callback()
    })

    V.command('Vue.component', 'Global API: #Vue.component(id,[definition])').action(function(args, callback){
        const c= ga[6]
        this.log(LGA.logGlobalAPI(c))
        callback()
    })

    V.command('Vue.use', 'Global API: #Vue.use(plugin)').action(function(args, callback){
        const u = ga[7]
        this.log(LGA.logGlobalAPI(u))
        callback()
    })

    V.command('Vue.mixin', 'Global API: #Vue.mixin(mixin)').action(function(args, callback){
        const m = ga[8]
        this.log(LGA.logGlobalAPI(m))
        callback()
    })

    V.command('Vue.compile', 'Global API: #Vue.compile(template)').action(function(args, callback){
        const c = ga[9]
        this.log(LGA.logGlobalAPI(c))
        callback()
    })

    V.command('Vue.version', 'Global API: #Vue.version').action(function(args, callback){
        const v = ga[10]
        this.log(LGA.logGlobalAPI(v))
        callback()
    })

    // Options/Data

    V.command('data', 'Options/Data: #data').action(function(args, callback){
        const d = od[0]
        this.log(O.logOptions(d))
        callback()
    })

    V.command('props', 'Options/Data: #props').action(function(args, callback){
        const p = od[1]
        this.log(O.logOptions(p))
        callback()
    })

    V.command('propsData', 'Options/Data: #propsData').action(function(args, callback){
        const pd = od[2]
        this.log(O.logOptions(pd))
        callback()
    })

    V.command('computed', 'Options/Data: #computed').action(function(args, callback){
        const c = od[3]
        this.log(O.logOptions(c))
        callback()
    })

    V.command('methods', 'Options/Data: #methods').action(function(args, callback){
        const m = od[4]
        this.log(O.logOptions(m))
        callback()
    })

    V.command('watch', 'Options/Data: #watch').action(function(args, callback){
        const w = od[5]
        this.log(O.logOptions(w))
        callback()
    })

    // Options/DOM

    V.command('el', 'Options/DOM: #el').action(function(args, callback){
        const w = odom[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('template', 'Options/DOM: #template').action(function(args, callback){
        const w = odom[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('render', 'Options/DOM: #render').action(function(args, callback){
        const w = odom[2]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('renderError', 'Options/DOM: #renderError').action(function(args, callback){
        const w = odom[3]
        this.log(O.logOptions(w))
        callback()
    })

    // Options/Lifecycle Hooks

    V.command('beforeCreate', 'Options/Lifecycle Hooks: #beforeCreate').action(function(args, callback){
        const w = olh[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('created', 'Options/Lifecycle Hooks: #created').action(function(args, callback){
        const w = olh[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('beforeMount', 'Options/Lifecycle Hooks: #beforeMount').action(function(args, callback){
        const w = olh[2]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('mounted', 'Options/Lifecycle Hooks: #mounted').action(function(args, callback){
        const w = olh[3]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('beforeUpdate', 'Options/Lifecycle Hooks: #beforeUpdate').action(function(args, callback){
        const w = olh[4]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('updated', 'Options/Lifecycle Hooks: #updated').action(function(args, callback){
        const w = olh[5]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('activated', 'Options/Lifecycle Hooks: #activated').action(function(args, callback){
        const w = olh[6]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('deactivated', 'Options/Lifecycle Hooks: #deactivated').action(function(args, callback){
        const w = olh[7]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('beforeDestroy', 'Options/Lifecycle Hooks: #beforeDestroy').action(function(args, callback){
        const w = olh[8]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('destroyed', 'Options/Lifecycle Hooks: #destroyed').action(function(args, callback){
        const w = olh[9]
        this.log(O.logOptions(w))
        callback()
    })

    // Options/Assets

    V.command('directives', 'Options/Assets: #directives').action(function(args, callback){
        const w = oa[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('filters', 'Options/Assets: #filters').action(function(args, callback){
        const w = oa[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('components', 'Options/Assets: #components').action(function(args, callback){
        const w = oa[2]
        this.log(O.logOptions(w))
        callback()
    })

    // Options/Composition

    V.command('parent', 'Options/Composition: #parent').action(function(args, callback){
        const w = oc[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('mixins', 'Options/Composition: #mixins').action(function(args, callback){
        const w = oc[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('extends', 'Options/Composition: #extends').action(function(args, callback){
        const w = oc[2]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('provide/inject', 'Options/Composition: #provide/inject').action(function(args, callback){
        const w = oc[3]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('provide', 'Options/Composition: #provide/inject').action(function(args, callback){
        const w = oc[3]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('inject', 'Options/Composition: #provide/inject').action(function(args, callback){
        const w = oc[3]
        this.log(O.logOptions(w))
        callback()
    })

    // Options/Misc

    V.command('name', 'Options/Misc: #name').action(function(args, callback){
        const w = om[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('delimiters', 'Options/Misc: #delimiters').action(function(args, callback){
        const w = om[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('functional', 'Options/Misc: #functional').action(function(args, callback){
        const w = om[2]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('model', 'Options/Misc: #model').action(function(args, callback){
        const w = om[3]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('inheritAttrs', 'Options/Misc: #inheritAttrs').action(function(args, callback){
        const w = om[4]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('comments', 'Options/Misc: #comments').action(function(args, callback){
        const w = om[5]
        this.log(O.logOptions(w))
        callback()
    })

    // Instance Properties

    V.command('vm.$data', 'Instance Properties: #vm.$data').action(function(args, callback){
        const w = ip[0]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$props', 'Instance Properties: #vm.$props').action(function(args, callback){
        const w = ip[1]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$el', 'Instance Properties: #vm.$el').action(function(args, callback){
        const w = ip[2]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$options', 'Instance Properties: #vm.$options').action(function(args, callback){
        const w = ip[3]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$parent', 'Instance Properties: #vm.$parent').action(function(args, callback){
        const w = ip[4]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$root', 'Instance Properties: #vm.$root').action(function(args, callback){
        const w = ip[5]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$children', 'Instance Properties: #vm.$children').action(function(args, callback){
        const w = ip[6]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$slots', 'Instance Properties: #vm.$slots').action(function(args, callback){
        const w = ip[7]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$scopedSlots', 'Instance Properties: #vm.$scopedSlots').action(function(args, callback){
        const w = ip[8]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$refs', 'Instance Properties: #vm.$refs').action(function(args, callback){
        const w = ip[9]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$isServer', 'Instance Properties: #vm.$isServer').action(function(args, callback){
        const w = ip[10]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$attrs', 'Instance Properties: #vm.$attrs').action(function(args, callback){
        const w = ip[11]
        this.log(O.logOptions(w))
        callback()
    })

    V.command('vm.$listeners', 'Instance Properties: #vm.$listeners').action(function(args, callback){
        const w = ip[12]
        this.log(O.logOptions(w))
        callback()
    })

    // Instance Methods/Data

    V.command('vm.$watch', 'Instance Methods/Data: #vm.$watch(expOrFn,callback,[options])').action(function(args, callback){
        const w = id[0]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$set', 'Instance Methods/Data: #vm.$set(target,key,value)').action(function(args, callback){
        const w = id[1]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$delete', 'Instance Methods/Data: #vm.$delete(target,key)').action(function(args, callback){
        const w = id[2]
        this.log(LI.logInstance(w))
        callback()
    })

    // Instance Methods/Events

    V.command('vm.$on', 'Instance Methods/Events: #vm.$on(event,callback)').action(function(args, callback){
        const w = im[0]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$once', 'Instance Methods/Events: #vm.$once(event,callback)').action(function(args, callback){
        const w = im[1]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$off', 'Instance Methods/Events: #vm.$off([event,callback])').action(function(args, callback){
        const w = im[2]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$emit', 'Instance Methods/Events: #vm.$delete(event,[...args])').action(function(args, callback){
        const w = im[3]
        this.log(LI.logInstance(w))
        callback()
    })

    // Instance Methods/Lifecycle

    V.command('vm.$mount', 'Instance Methods/Lifecycle: #vm.$mount([elementOrSelector])').action(function(args, callback){
        const w = il[0]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$forceUpdate', 'Instance Methods/Lifecycle: #vm.$forceUpdate()').action(function(args, callback){
        const w = il[1]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$nextTick', 'Instance Methods/Lifecycle: #vm.$nextTick([callback])').action(function(args, callback){
        const w = il[2]
        this.log(LI.logInstance(w))
        callback()
    })

    V.command('vm.$destroy', 'Instance Methods/Lifecycle: #vm.$destroy()').action(function(args, callback){
        const w = il[3]
        this.log(LI.logInstance(w))
        callback()
    })

    // Directives

    V.command('v-text', 'Directives: #v-text').action(function(args, callback){
        this.log(LD.logDirectives(d[0]))
        callback()
    })

    V.command('v-html', 'Directives: #v-html').action(function(args, callback){
        this.log(LD.logDirectives(d[1]))
        callback()
    })

    V.command('v-show', 'Directives: #v-show').action(function(args, callback){
        this.log(LD.logDirectives(d[2]))
        callback()
    })

    V.command('v-if', 'Directives: #v-if').action(function(args, callback){
        this.log(LD.logDirectives(d[3]))
        callback()
    })

    V.command('v-else', 'Directives: #v-else').action(function(args, callback){
        this.log(LD.logDirectives(d[4]))
        callback()
    })

    V.command('v-else-if', 'Directives: #v-else-if').action(function(args, callback){
        this.log(LD.logDirectives(d[5]))
        callback()
    })

    V.command('v-for', 'Directives: #v-for').action(function(args, callback){
        this.log(LD.logDirectives(d[6]))
        callback()
    })

    V.command('v-on', 'Directives: #v-on').action(function(args, callback){
        this.log(LD.logDirectives(d[7]))
        callback()
    })

    V.command('v-bind', 'Directives: #v-bind').action(function(args, callback){
        this.log(LD.logDirectives(d[8]))
        callback()
    })

    V.command('v-model', 'Directives: #v-model').action(function(args, callback){
        this.log(LD.logDirectives(d[9]))
        callback()
    })

    V.command('v-pre', 'Directives: #v-pre').action(function(args, callback){
        this.log(LD.logDirectives(d[10]))
        callback()
    })

    V.command('v-cloak', 'Directives: #v-cloak').action(function(args, callback){
        this.log(LD.logDirectives(d[11]))
        callback()
    })

    V.command('v-once', 'Directives: #v-once').action(function(args, callback){
        this.log(LD.logDirectives(d[12]))
        callback()
    })

    // Special Attributes

    V.command('key', 'Special Attributes: #key').action(function(args, callback){
        this.log(LD.logDirectives(sa[0]))
        callback()
    })

    V.command('ref', 'Special Attributes: #ref').action(function(args, callback){
        this.log(LD.logDirectives(sa[1]))
        callback()
    })

    V.command('slot', 'Special Attributes: #slot').action(function(args, callback){
        this.log(LD.logDirectives(sa[2]))
        callback()
    })

    V.command('is', 'Special Attributes: #is').action(function(args, callback){
        this.log(LD.logDirectives(sa[3]))
        callback()
    })

    // Built-In Components

    V.command('component', 'Built-In Components: #component').action(function(args, callback){
        this.log(LBC.logBuiltInComp(bc[0]))
        callback()
    })

    V.command('transition', 'Built-In Components: #transition').action(function(args, callback){
        this.log(LBC.logBuiltInComp(bc[1]))
        callback()
    })

    V.command('transition-group', 'Built-In Components: #transition-group').action(function(args, callback){
        this.log(LBC.logBuiltInComp(bc[2]))
        callback()
    })

    V.command('keep-alive', 'Built-In Components: #keep-alive').action(function(args, callback){
        this.log(LBC.logBuiltInComp(bc[3]))
        callback()
    })

    V.command('slot-component', 'Built-In Components: #slot').action(function(args, callback){
        this.log(LBC.logBuiltInComp(bc[4]))
        callback()
    })


})



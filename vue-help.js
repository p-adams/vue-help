const V = require('vorpal')()
const LGC = require('./logfunctions/logglobalconfig')
const LGA = require('./logfunctions/logglobalapi')
const O = require('./logfunctions/logoptions')
const api = require('./API')
const gc = api.GlobalConfig
const ga = api.GlobalAPI
const od = api.OptionsData

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

V.command('extend', 'Global API: #Vue.extend(options)').action(function(args, callback){
    const ext = ga[0]
    this.log(LGA.logGlobalAPI(ext))
    callback()
})

V.command('nextTick', 'Global API: #Vue.nextTick([callback,context])').action(function(args, callback){
    const nextTick = ga[1]
    this.log(LGA.logGlobalAPI(nextTick))
    callback()
})

V.command('set', 'Global API: #Vue.set(target,key,value)').action(function(args, callback){
    const st = ga[2]
    this.log(LGA.logGlobalAPI(st))
    callback()
})

V.command('delete', 'Global API: #Vue.delete(target,key)').action(function(args, callback){
    const dlt = ga[3]
    this.log(LGA.logGlobalAPI(dlt))
    callback()
})

V.command('directive', 'Global API: #Vue.directive(id,[definition])').action(function(args, callback){
    const dir = ga[4]
    this.log(LGA.logGlobalAPI(dir))
    callback()
})

V.command('filter', 'Global API: #Vue.filter(id,[definition])').action(function(args, callback){
    const flt = ga[5]
    this.log(LGA.logGlobalAPI(flt))
    callback()
})

V.command('component', 'Global API: #Vue.component(id,[definition])').action(function(args, callback){
    const c= ga[6]
    this.log(LGA.logGlobalAPI(c))
    callback()
})

V.command('use', 'Global API: #Vue.use(plugin)').action(function(args, callback){
    const u = ga[7]
    this.log(LGA.logGlobalAPI(u))
    callback()
})

V.command('mixin', 'Global API: #Vue.mixin(mixin)').action(function(args, callback){
    const m = ga[8]
    this.log(LGA.logGlobalAPI(m))
    callback()
})

V.command('compile', 'Global API: #Vue.compile(template)').action(function(args, callback){
    const c = ga[9]
    this.log(LGA.logGlobalAPI(c))
    callback()
})

V.command('version', 'Global API: #Vue.version').action(function(args, callback){
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
const V = require('vorpal')()
const LGC = require('./logfunctions/logglobalconfig')
const api = require('./API')
const gc = api.GlobalConfig


V.delimiter('vue-help$').show()

// Global Config API

V.command('silent', 'Outputs "Global Config: #silent"').action(function(args, callback){
    const silent= gc[0]
    this.log(LGC.logGlobalConfig(silent))
    callback()
})

V.command('optionMergeStrategies', 'Outputs "Global Config: #optionMergeStrategies"').action(function(args, callback){
    const optMergeStrat = gc[1]
    this.log(LGC.logGlobalConfig(optMergeStrat))
    callback()
})

V.command('devtools', 'Outputs "Global Config: #devtools"').action(function(args, callback){
    const devtools = gc[2]
    this.log(LGC.logGlobalConfig(devtools))
    callback()
})

V.command('errorHandler', 'Outputs "Global Config: #errorHandler"').action(function(args, callback){
    const errorHandler = gc[3]
    this.log(LGC.logGlobalConfig(errorHandler))
    callback()
})

V.command('warnHandler', 'Outputs "Global Config: #warnHandler"').action(function(args, callback){
    const warnHandler = gc[4]
    this.log(LGC.logGlobalConfig(warnHandler))
    callback()
})

V.command('ignoredElements', 'Outputs "Global Config: #ignoredElements"').action(function(args, callback){
    const ignoredElements = gc[5]
    this.log(LGC.logGlobalConfig(ignoredElements))
    callback()
})

V.command('keyCodes', 'Outputs "Global Config: #keyCodes"').action(function(args, callback){
    const keyCodes = gc[6]
    this.log(LGC.logGlobalConfig(keyCodes))
    callback()
})

V.command('performance', 'Outputs "Global Config: #performance"').action(function(args, callback){
    const perf = gc[7]
    this.log(LGC.logGlobalConfig(perf))
    callback()
})

V.command('productionTip', 'Outputs "Global Config: #productionTip"').action(function(args, callback){
    const prod = gc[8]
    this.log(LGC.logGlobalConfig(prod))
    callback()
})
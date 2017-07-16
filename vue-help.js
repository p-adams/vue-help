const V = require('vorpal')()
const LGC = require('./logfunctions/logglobalconfig')
const api = require('./API')
const gc = api.GlobalConfig


V.delimiter('vue-help$').show()

// Global Config API

V.command('silent', 'Outputs').action(function(args, callback){
    const silent= gc[0]
    this.log(LGC.logGlobalConfig(silent))
    callback()
})

V.command('optionMergeStrategies', 'Outputs').action(function(args, callback){
    const optMergeStrat = gc[1]
    this.log(LGC.logGlobalConfig(optMergeStrat))
    callback()
})

V.command('devtools', 'Outputs').action(function(args, callback){
    const devtools = gc[2]
    this.log(LGC.logGlobalConfig(devtools))
    callback()
})

V.command('errorHandler', 'Outputs').action(function(args, callback){
    const errorHandler = gc[3]
    this.log(LGC.logGlobalConfig(errorHandler))
    callback()
})

V.command('warnHandler', 'Outputs').action(function(args, callback){
    const warnHandler = gc[4]
    this.log(LGC.logGlobalConfig(warnHandler))
    callback()
})
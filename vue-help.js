const V = require('vorpal')()
const LGC = require('./logfunctions/logglobalconfig')
const api = require('./API')
const gc = api.GlobalConfig


V.delimiter('vue-help$').show()


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
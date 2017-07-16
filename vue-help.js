const V = require('vorpal')()
const api = require('./API')
const gc = api.GlobalConfig



V.delimiter('vue-help$').show()
V.command('silent', 'Outputs').action(function(args, callback){
    const s = gc[0]
    this.log(`
            Category: ${s.category}
            Name: ${s.name + '\n'}
            * Type: ${s.type}
            * Default: ${s.default}
            * Usage: ${s.usage}
            * Details: ${s.details}
            `)
    callback()
})
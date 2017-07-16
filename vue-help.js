const V = require('vorpal')()



V.delimiter('vue-help$').show()
V.command('vm.$data', 'Outputs').action(function(args, callback){
    this.log('<div v-for="d in data></div>')
    callback()
})
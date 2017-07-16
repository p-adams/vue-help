const V = require('vorpal')()
const AB = require('./APIBuilder')
console.log(AB)


V.delimiter('vue-help$').show()
V.command('vm.$data', 'Outputs').action(function(args, callback){
    this.log('<div v-for="d in data></div>')
    callback()
})
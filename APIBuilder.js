class APIBuilder {
    constructor (category, name) {
        this.category = category
        this.name = name
        this.options = [
            {
                type: '',
                readOption: '',
                details: '',
                example: ''
            }
        ]
    }
    get category() {
        return this.category
    }
    get name() {
        return this.name
    }
    get options() {
        return this.options
    }
    set options(type, read, details, example) {
        this.options.type = type
        this.options.readOption = read
        this.options.details = details
        this.options.example = example
    }
}

module.exports.APIBuilder = APIBuilder
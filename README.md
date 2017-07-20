# vue-help

Vue.js API in the Terminal

###### screenshot
<img
    src="https://image.ibb.co/nAmOVQ/screen_shot.png"
    height="400" width="800"/>


#### Motivation

vue-help was created to facilitate access to all of Vue's API without the need for a browser or internet connection.


#### Usage

##### Install

`npm install -g vue-help`


##### Start CLI

`vue-help`

##### Enter API name at the prompt

For example:

```
    vue-help$ devtools

                    Category: Global Config
                    Name: devtools

                    * Type: boolean
                    * Default: true ( false in production builds)
                    * Usage: // make sure to set this synchronously immediately after loading Vue
                            Vue.config.devtools = true
                    * Details: Check whether to allow vue-devtools inspection.
                            This option's default value is true in development builds and false in production builds.
                            You can set it to true to enable inspection for production builds

```



##### or enter help to list all commands

`vue-help? help`


#### Inspiration

Clojure's `(doc name)` function
https://clojuredocs.org/clojure.repl/doc

Elixir's `h/1` function
https://hexdocs.pm/iex/IEx.Helpers.html
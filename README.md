jsizzle
=======

Like `fortune` but prints @JavaScriptizzle's tweets

###Installation

```bash
npm install jsizzle -g
```

  Usage: jsizzle [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -f --first     show first tweet
    -a --all       show all tweets


###Customizations

Add a ~/.jsizzlerc file that will be used to customize things, yo.

It can be a JSON or a JS file where the following object can be required

```js
{
  heading: {
    text: 'Yo yo JavaScriptizzle says',
    color: ['blue', 'underline']
  },
  tweetColor: ['yellow']
}
```

[![npm version](https://img.shields.io/npm/v/simple-memory-trace.svg)](https://npmjs.com/package/simple-memory-trace)

# simple-memory-trace

simple-memory-trace gives you a simple way to easily trace the used memory of a JS function. 

It uses `process.memoryUsage` to get the metadata.

It is as simple as Python tracemalloc!

NOTE: NEEDS TO RUN WITH `--expose-gc`: `node --expose-gc <file>.js`

- for browser environments: `chrome | brave: --enable-precise-memory-info`

However, you may turn it off from `options` with `force_gc: 0`.

```js

const trace_memory = require("simple-memory-trace")

function make_array(size) {
  let arr = []
  for(let i = 0; i < size; i++) 
    arr.push(i)
  return arr
} 

trace_memory( () => {
  make_array(1000000)
}, { verbose: true, unit: 'MB' })

// This will print out something like:
{
  rss: '33.593 MB',
  heapTotal: '44.382 MB',
  heapUsed: '28.986 MB', // memory actually used by your JS function
  external: '0 MB',
  arrayBuffers: '0 MB',
  time: 16 // measured time to run make_array
}

// to get this object instead of using verbose for console.log
trace_memory( () => {
  make_array(1000000)
}, { unit: 'MB' })
  .then(memoryUsage => console.log(memoryUsage))
// trace_memory returns a Promise so you can use await as well :)

// to trace memory of a function one after another, it is important to use await to avoid weird behavior
// for example

let memoryUsage = await trace_memory( () => {
  make_array(1000000)
}, { unit: 'MB' })
// use memoryUsage

let memoryUsage1 = await trace_memory( () => {
  make_array(1000000)
}, { unit: 'MB' })
// use memoryUsage1

// to look at the memory actually used by your function
// look at either heapTotal, headUsed



```

## trace_memory(func: Function | AsyncFunction, options: Object, ...args: any[]) -> Promise<any>

  <h2>options</h2>
  <pre>
{
  verbose: true | false, // default: false
  unit: "B" | "KB" | "MB" | "GB" | "TB", // default: "B"
  fix_decimal: &lt;INTEGER&gt; // default: 3,
  force_gc: 0 | 1 // default: 1
}</pre>
  <p>Where:<br>
    <i>&lt;INTEGER&gt;</i>: the maximum floor of the traced memory <br>
  </p>


## Installation

```sh
npm install simple-memory-trace --save-dev # NodeJS
npm install simple-memory-trace-browser --save-dev # Browser
```

# simple_memory_trace

simple_memory_trace gives you a simple way to easily trace the used memory of a JS function.

It is as simple as Python trace_malloc!

```js

const trace_memory = require('../lib/js/trace_memory')

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
  heapUsed: '28.986 MB',
  external: '0 MB',
  arrayBuffers: '0 MB',
  time: 16
}


```

## trace_memory(func: Function | AsyncFunction, options: Object, ...args: any[]) -> Promise<any>

  <h2>options</h2>
  <pre>
{
  verbose: true | false, # default: false
  unit: "B" | "KB" | "MB" | "GB" | "TB", # default: "B"
  fix_decimal: &lt;INTEGER&gt; # default: 3
}</pre>
  <p>Where:<br>
    <i>&lt;INTEGER&gt;</i>: the maximum floor of the traced memory <br>
  </p>


**Installation:**
        npm: `> npm install simple-memory-trace`

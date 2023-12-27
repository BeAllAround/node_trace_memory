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

```

**Installation:**
        npm: `> npm install simple-memory-trace`

const trace_memory = require('../lib/js/trace_memory')

function make_array(size) {
  let arr = []
  for(let i = 0; i < size; i++)
    arr.push(i)
  return arr
}

function trace_make_array() {
  trace_memory( () => {
    make_array(1000000)
  }, { verbose: true, unit: 'MB' })
    .then(console.log)
}

(async function main(argc, argv) {
  let args = []
  trace_make_array(...args)

})(process.argv.length, process.argv)


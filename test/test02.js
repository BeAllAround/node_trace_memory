

const trace_memory = require("../lib/js/trace_memory")

function make_array(size) {
  let arr = []
  for(let i = 0; i < size; i++)
    arr.push(i)
  return arr
}

(async function main(argc, argv)  {
  await trace_memory( () => {
    make_array(100)
  }, { verbose: true, unit: 'B' })

  /*
  let memoryUsage = await trace_memory( () => {
    make_array(10000000)
  }, { unit: 'MB' })
  console.log(memoryUsage)
  */

  // to get this object instead of using verbose for console.log
  let memoryUsage1 = await trace_memory( () => {
    make_array(1000000)
  }, { unit: 'MB' })
  console.log(memoryUsage1)

  memoryUsage = await trace_memory( () => {
    make_array(5000000)
  }, { unit: 'MB' })
  console.log(memoryUsage)

  memoryUsage = await trace_memory( () => {
    make_array(100000)
  }, { unit: 'MB' })
  console.log(memoryUsage)


})(process.argv.length, process.argv)


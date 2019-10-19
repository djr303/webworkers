// example one
/* onmessage = () => {
  postMessage('condition A')
} */

// example two
/* onmessage = (arg1, arg2, arg3) => {
  console.log('executed inside the worker')
  console.log('arg1', arg1)
  console.log('arg2', arg2)
  console.log('arg3', arg3)
  postMessage('arg3', arg3)
} */

// example three
/* onmessage = (...args) => {
  console.log('executed inside the worker')
  console.log('')
  console.log('...args', args)
  postMessage({ name: 'data', message: 'hello'})
} */

// example four
/* onmessage = (e) => {
  throw e
} */

// example five
/* onmessage = (e) => {
  throw console
} */

// example six
/* onmessage = (e) => {
  throw self
} */

// example seven
/* onmessage = (e) => {
  throw self.console
} */

// example eight
/* onmessage = (e) => {
  console.log('hello')
} */

// example nine
onmessage = (e) => {
  console.log('e.data.fn', e.data.fn)
  // throw e
}

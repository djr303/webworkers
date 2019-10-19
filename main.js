const worker = new Worker('./worker.js')

worker.postMessage('hello!')

worker.onmessage = (...args) => {
  console.log('main thread')
  console.log(args)
}

const worker = new Worker('./worker.js')

/* worker.onmessage = (...args) => {
  console.log('main thread')
  console.log(args)
} */

// worker.postMessage({})

/* worker.postMessage({
  fn: function fn () {
    console.log('is this executed in webworker thread?')
  }
}) */

worker.postMessage({
  string: 'string',
  fn: () => {}
})

/*
worker.addEventListener('message', (e) => {
  console.log('addEventListener(\'message\'', e)
}) */

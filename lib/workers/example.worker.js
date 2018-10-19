// https://github.com/webpack-contrib/worker-loader#examples
self.addEventListener('message', (event) => console.log('Worker received:', event.data))
self.postMessage('from Worker')
export default function timeout(timeout, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Response timeout'))
    }, timeout)
    promise.then(resolve, reject)
  })
}

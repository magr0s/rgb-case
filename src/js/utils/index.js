const SERVER_TIMEOUT = 1500

const uploaderFactory = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: '/uploader'
      })
    }, SERVER_TIMEOUT)
  })
}

export {
  uploaderFactory
}

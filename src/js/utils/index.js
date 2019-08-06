const SERVER_TIMEOUT = 1500

const uploaderFactory = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: '/uploader'
      })
    }, SERVER_TIMEOUT)
  })
}

const prepareProductPrice = (price) => {
  const arr = price.split('.')
  const peni = `.${arr[1]}`

  return '$' + arr[0] + peni.sup()
}

export {
  uploaderFactory,
  prepareProductPrice
}

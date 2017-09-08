export default api => (...args) =>
  new Promise(async (resolve, reject) => {
    await api(...args, (error, result) => {
      if (error) reject(error)
      else resolve(result)
    })
  })

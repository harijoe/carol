export default nightWatchApi => (...args) => new Promise(async resolve => {
  await nightWatchApi(...args, res => {
    resolve(res.value)
  })
})


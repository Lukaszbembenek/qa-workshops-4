// Try to console.log data returned from getData

const randomNumber = Math.random()

const getData = () => new Promise(((resolve, reject) => {
  if(randomNumber > 0.5) {
    resolve('everything is fine!')
  } else {
    reject('Oops, something gone wrong')
  }
}))

const randomNumber = new Promise((resolve, reject) => {

    setTimeout(() => {
        const number = Math.random()
        resolve(number)
    }, 1000)

})

try {
    const result = await randomNumber
    console.log(result)
} catch (error) {
    console.log(error)
} finally {
    console.log('Fim1')
}

console.log('-'.repeat(50))


randomNumber
    .then(value => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Fim1'))
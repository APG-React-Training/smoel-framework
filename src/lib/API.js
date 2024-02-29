import config from '../config/config'

const fetchData = () => new Promise( (resolve, reject) => {

    fetch(config.DATA_URL)
    .then((result) => result.json())
    .then((result) => resolve(result))
    .catch((err) => reject(err))

})

export default fetchData
import { useState, useEffect } from 'react'
import './resources/styles/main.css'

import Overview from './components/pages/Overview'
import fetchData from './lib/API'

const App = () => {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect( () => {
    fetchData()
    .then( result => {
      setData(result.data)
      setFilteredData(result.data)
      setLoaded(true)
    })
  }, [])

  return(
    <div>
      { JSON.stringify(filteredData, null, 2) }
      <Overview />
    </div>
  )
 
}


export default App

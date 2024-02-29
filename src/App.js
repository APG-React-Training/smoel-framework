import { useState, useEffect } from 'react'
import './resources/styles/main.css'

import Overview from './components/pages/Overview'
import fetchData from './lib/API'

import DataContext from './context/DataContext'

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
    <DataContext.Provider value={{ filteredData }}>
      { isLoaded && <Overview /> }
    </DataContext.Provider>
  )
 
}


export default App

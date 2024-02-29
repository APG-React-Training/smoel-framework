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

  const resetFilter = () => {
    setFilteredData(data)
  }

  const filterPersons = (search) => {
    const result = data.filter( item => 
      item.firstname.toUpperCase().includes(search.toUpperCase())
      || 
      item.lastname.toUpperCase().includes(search.toUpperCase())     
      )
    setFilteredData(result)  
  }

  return(
    <DataContext.Provider value={{ filteredData, filterPersons, resetFilter }}>
      { isLoaded && <Overview /> }
    </DataContext.Provider>
  )
 
}


export default App

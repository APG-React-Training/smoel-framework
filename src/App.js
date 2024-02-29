
import { useEffect, useState }  from 'react'

import "./resources/styles/main.css"
import fetchData from './lib/API'
import Overview from './components/pages/Overview'
import DataContext from './context/DataContext'

const App = () => {
  
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect( () => {
    fetchData()
    .then( result => {
      setData(result.data)
      setFilterData(result.data)
      setLoaded(true)
    })
  }, [])

  const resetFilter = () => {
    setFilterData(data)
  }

  const filterPersons =(search) => {
    const result = data.filter( item => 
        item.firstname.toUpperCase().includes(search.toUpperCase()) ||
        item.lastname.toUpperCase().includes(search.toUpperCase()) 
    )

    setFilterData(result)
  }

  return (
    <DataContext.Provider value={{ filterData, resetFilter, filterPersons }}>
      { isLoaded && <Overview /> }
    </DataContext.Provider>
  )
}

export default App

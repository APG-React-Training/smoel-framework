import { useContext }  from 'react'
import SearchBar from '../molecules/SearchBar'
import List from '../organism/List'

import DataContext from '../../context/DataContext'

const Overview = () => {

    const ctx = useContext(DataContext)

    return(
        <div className='Overview'>
            <SearchBar />
            <List people={ ctx.filteredData } />        
        </div>
    )

}

export default Overview
import { useState, useContext } from 'react'

import SearchField from "../atoms/SearchField"
import Button from "../atoms/Button"
import DataContext from '../../context/DataContext'

const SearchBar = () => {

    const ctx = useContext(DataContext)

    const [value, setValue] = useState('')

    const reset = () => {
        setValue('')
        ctx.resetFilter()
    }

    const inputHandler = (e) => {
        const input = e.target.value
        setValue(input)
        ctx.filterPersons(input)
    }

    return(
        <div className='SearchBar'>
            <SearchField value={ value } handler={ inputHandler } />
            <Button text='Reset' handler={ reset } />
        </div>
    )



}

export default SearchBar
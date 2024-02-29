import { useState } from 'react'

const SearchField = () => {

    const [value, setValue] = useState('')

    return(
        <div className='SearchField'>
            <input type='text'
                   value={ value }
                   onChange={ (e) => setValue(e.target.value)} /> 
        </div>
    )

}

export default SearchField
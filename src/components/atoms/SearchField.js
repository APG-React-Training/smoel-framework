
const SearchField = ({ value, handler }) => {

    return(
        <div className='SearchField'>
            <input type='text'
                   value={ value }
                   onChange={ handler } /> 
        </div>
    )

}

export default SearchField
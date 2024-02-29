import SearchField from "../atoms/SearchField"
import Button from "../atoms/Button"

const SearchBar = () => {

    return(
        <div className='SearchBar'>
            <SearchField />
            <Button text='Reset' handler={ () => alert('Klik') } />
        </div>
    )



}

export default SearchBar
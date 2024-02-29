import InfoText from "../atoms/InfoText"
import TitleText from "../atoms/TitleText"

const ListItem = ({ item }) => {

    return(
        <div className='ListItem'>
            <TitleText text={ `${item.firstname} ${item.lastname}` }/>
            <div className='item-content'>
                <InfoText text={ item.email } />
                <InfoText text={ item.phone } />                
            </div>
        </div>
    )

}

export default ListItem
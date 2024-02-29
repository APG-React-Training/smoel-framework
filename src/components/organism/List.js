import ListItem from '../molecules/ListItem'

const List = () => {

    const people = [
        { id: 1, firstname: 'Jan', lastname: 'Smith', email: 'jan@smit.com', phone: '12233333'},
        { id: 2, firstname: 'Piet', lastname: 'Veerman', email: 'piet@veerman.com', phone: '12233333'},
    ]


    return(
        <div>
            {
                people.map( (item, index) => {
                    return(
                        <ListItem key={ item.id } 
                                  item={ item } />
                    )
                })
            }
        </div>
    )

}

export default List
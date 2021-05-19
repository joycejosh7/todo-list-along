import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

class List extends React.Component {

   

    render() {
        return (
            <div>
                {this.props.list.name}
            </div>
        
        )
    }

}



export default List
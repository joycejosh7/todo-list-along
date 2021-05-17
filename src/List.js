import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

class List extends React.Component {

    // state = {groceryList: ["coffee", "ice cream", "sugar", "flour"]}

    constructor(props) {
        super(props)
        this.state = {groceryList: ["coffee", "ice cream", "sugar", "flour"]}
        this.updateState = this.updateState.bind(this)
    }


    updateState(arg) {
        this.setState((prevState, prevProps) => { 
            return {groceryList: [...prevState.groceryList, arg]}
        })
    }

    render() {
        return (
            <div>
                <ItemForm sendData={this.updateState}/>
                <ul>
                    {this.state.groceryList.map((item, i) => <Item key={i} item={item} i={i} />)}
                </ul>
            </div>
        
        )
    }

}

// List.defaultProps = {
//     groceryList: []
// }

export default List
import React from 'react'
import Item from './Item'

class List extends React.Component {

    // state = {groceryList: ["coffee", "ice cream", "sugar", "flour"]}

    constructor(props) {
        super(props)
        this.state = {groceryList: ["coffee", "ice cream", "sugar", "flour"]}
        this.updateState = this.updateState.bind(this)
    }

    // static defaultProps = {
    //     groceryList: []
    // }

    updateState(arg) {
        // this.setState({groceryList: [...this.state.groceryList, "cereal"]})
        this.setState((prevState, prevProps) => { 
            return {groceryList: [...prevState.groceryList, arg]}
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateState}>Click to Update State</button>
                <ul>
                    {this.state.groceryList.map((item, i) => <Item key={i} item={item} i={i} callBackFn={this.updateState}/>)}
                </ul>
            </div>
        
        )
    }

}

// List.defaultProps = {
//     groceryList: []
// }

export default List
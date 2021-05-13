import React, { Component } from 'react'

class Item extends Component {

    

    render() {
        return <div>
        <li key={this.props.i}>{this.props.item}</li>
        <button onClick={(e) => this.props.callBackFn("cereal")}>Send Info Back</button>
        </div>
    }
}

export default Item

import React, { Component } from 'react'

class Item extends Component {

    sendInfoBack(e){
        this.props.callBackFn("cereal")
    }

    render() {
        return <div>
        <li key={this.props.i}>{this.props.item}</li>
        </div>
    }
}

export default Item

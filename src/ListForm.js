import React from 'react'

class ListForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {name: ""}
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendData(this.state)
        this.setState({name: ""})
    }

    handleChange(e) {
        this.setState({[e.target.value]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.name} name="name"/>
                <input type="submit" />
            </form>
    )
    }
}
export default ListForm
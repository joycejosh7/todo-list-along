import React from 'react'
import List from  './List'
import ListForm from 'ListForm'

class Lists extends React.Component {

    constructor() {
        super()
        this.state = {
            lists: [{name: "Errands"}, {name: "Health"}, {name: "Work"}],
            id: (Math.floor(Math.random() * Math.floor(100)))
            tracker: 0
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(arg){
        this.setState((prevState, prevProps) => {
            return {lists: [...prevState.lists, arg]}
        })
    }

    render(){
        return (
            <div>
                <ListForm sendData={this.updateState}/>
                <ul>
                    {this.state.lists.map((list, i) => <List key={i} list={list} />)}
                </ul>
            </div>
        )
    }
}
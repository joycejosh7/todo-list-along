import React, {Component} from 'react'
import List from './List'

class App extends React.Component {

  handleClick(e) {
    console.log("clicked!")
  }
  
  render() {

    return (
      <div>
        <h1 className="greeting">Hello, world!</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <List />
      </div>
    )
  }

}
export default App
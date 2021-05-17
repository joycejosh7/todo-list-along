import React from 'react'
import List from './List'

class App extends React.Component {

  
  render() {

    return (
      <div>
        <h1 className="greeting">Hello, world!</h1>
        <List name={"Bob"}/>
      </div>
    )
  }

}
export default App
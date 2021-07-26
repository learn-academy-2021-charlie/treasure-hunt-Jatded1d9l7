import React, { Component } from 'react'
import './App.css'
import square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

ComponentDidMount(){
  let treasure = Math.floor(Math.random() * this.state.board.length)
  this.setState({treasureLocation: treasure})
}

handleGamePlay = (index) => {
  const {board} = this.state
  if (index === treasureLocation)
  board[index] = "💎"
} else
  board[index] = "🌲"
  this.setState({board: board})
  }
}

  render(){
    return(
      <>
        <h1> Treasure Hunt Game </h1>
        <div id = "gameboard" >
        {this.state.board.map((value, index) => {
          return (
          <Square
          value= (value)
          key= (index)
          index=(index)
          handleGamePlay= {this.handleGamePlay}
          />
          )
        })}
        </div>
      </>
    )
  }
}
export default App

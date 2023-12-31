import React from 'react';

class Main extends React.Component {
  state = {
    count: 7,
    counting: false
  }
  handleClick = () => {
    this.setState({counting:true})
    this.Time(this.state.counting)
  }
  Time = () => {
      let timer = setInterval(() => {
        this.setState({count: this.state.count-1})
        console.log(this.state.counting)
        setTimeout(() => {
        if (this.state.counting === false || this.state.count < 1)  {
          clearInterval(timer)
        }
      }, 0)
      }, 1000)
      
  }
  handleClock = () => {
    this.setState({counting:false})
  }
  reset = () => {
    this.setState({counting:false})
    this.setState({count:7})
  }
  render (){
    return (
      <div className='target'>
        <p className='sec'>{this.state.count}</p>
        {this.state.counting ? <button onClick = {this.handleClock}>Za Warudo</button> : <button onClick = {this.handleClick}>Start</button>}
        <button onClick = {this.reset}>Reset</button>
      </div> 
    )
  }
}

export default Main;
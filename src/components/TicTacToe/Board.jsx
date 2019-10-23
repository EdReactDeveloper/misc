import React from 'react'
import Square from './Suare';

class Board extends React.Component {

  constructor(props){
    super(props)
    this.root = null

    this.setRef = element=>{
      this.root = element
    }
  }  

  componentDidMount(){
    document.addEventListener('mousedown', this.clickOutSide)
  }


  renderSquare(i) {
    return <Square 
    value={this.props.squares[i]}
    onClick={()=>this.props.onClick(i)}
    />;
  } 

  
  clickOutSide=(event)=>{
    if(this.root && !this.root.contains(event.target)){
      console.log(this.root.contains(event.target))
      alert('you clicked outside me')
    }
  }
  

  render() {
    console.log(this.root)
    return (
      <div ref={this.setRef}>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board
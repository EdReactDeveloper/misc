import React, { Component } from 'react';
import style from './Tracker.module.scss'

class Mouse extends Component {
  state={
    x: 0,
    y: 0
  }

  handleMouseEvent=(e)=>{
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    console.log(this.state.x, this.state.y)
    return (
      <div className={style.container} onMouseMove={this.handleMouseEvent}>
        {this.props.here(this.state)}
      </div>
    );
  }
}

export default Mouse;
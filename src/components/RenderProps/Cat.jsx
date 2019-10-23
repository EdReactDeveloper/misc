import React, { Component } from 'react';
import style from './Tracker.module.scss'
class Cat extends Component {

  render() {
    const {mouse} = this.props
    return (
      <div className={style.cat} style={{left: mouse.x, top: mouse.y}}> 
        
      </div>
    );
  }
}

export default Cat;
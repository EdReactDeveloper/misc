import React, { Component } from 'react';
import Mouse from './Mouse'; 
import Cat from './Cat'; 

class MouseTracker extends Component {
  render() {
    return (
      <div>
        <Mouse
        here={props=> <Cat mouse={props}/> }
        />
      </div>
    );
  }
}

export default MouseTracker;
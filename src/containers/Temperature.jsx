import React, { Component } from 'react';
import TemperatureItem from '../components/Temperature'

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class TemperatureContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      temperature: '',
      scale: 'c'
    }
  }

handleCelceusChange=(temperature)=>{
  this.setState({scale: 'c', temperature})
}

handleFahrenheitChange=(temperature)=>{
  this.setState({scale: 'f', temperature})
}



  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature;
    console.log(this.state)
    return (
      <div>
        <TemperatureItem 
        scale='c' 
        onTemperatureChange={this.handleCelceusChange}
        temperature={celsius}
        />

        <TemperatureItem 
        scale='f'
        onTemperatureChange={this.handleFahrenheitChange}
        temperature={fahrenheit}
        />
      </div>
    );
  }
}

export default TemperatureContainer;
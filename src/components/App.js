import React from 'react';
import Form from './Form';
import Content from './Content';

export default class App extends React.Component {
  state = {
    value: 'Gdańsk',
    temp: 0,
    loading: false
  }

  roundTemp = e => {
    this.setState({
      temp: Math.round(e * 10) / 10
    })
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmitChange = async e => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    try {
      const keyAPI = '40ea5ceef9ec33888dffe518d21b0d28';
      const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${keyAPI}&units=metric`);
      const APIJson = await API.json();
      
      this.roundTemp(APIJson.main.temp);

      this.setState({
        icon: APIJson.weather[0].icon,
        loading: false
      });

      console.log(APIJson); // Debug
    } catch(err) {

      // Popup
      console.log(err); // Debug
    }
  }

  render() {
    return (
      <>
        <Form value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleSubmitChange} />
        <Content loading={this.state.loading} temp={this.state.temp} icon={this.state.icon} />
      </>
    )
  }
}
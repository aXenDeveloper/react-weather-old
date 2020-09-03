import React from 'react';
import Form from './Form';
import Content from './Content';

export default class App extends React.Component {
  state = {
    value: 'Gdańsk',
    clouds: null,
    temp: 0,
    icon: '',
    loading: false
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
      const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=40ea5ceef9ec33888dffe518d21b0d28&units=metric`);
      const APIJson = await API.json();
      this.setState({
        clouds: APIJson.clouds.all,
        temp: APIJson.main.temp,
        icon: APIJson.weather[0].icon,
        loading: false
      });
      console.log(APIJson);
    } catch(err) {
      console.log(err);
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

import React, { Component } from 'react';
import Form from './Form';

export default class Weather extends Component {

    state = {
        value: 'Gdańsk'
    }

    componentDidMount = () => {
        const { match } = this.props;

        this.setState({
            value: match.params.id
        })
    }
    
    getDataAPI = async parms => {
        try {
            const keyAPI = '40ea5ceef9ec33888dffe518d21b0d28';
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${parms}&appid=${keyAPI}&units=metric`);
            const APIJson = await API.json();

            console.log(APIJson);

        } catch (error) {
            console.log(error);
        }
    }


    handleForm = e => {
        e.preventDefault();
        this.API();
      };
    
      handleInput = e => {
        this.setState({
          value: e.target.value
        });
      }

    render() {
        const { match } = this.props;
        console.log(match.params.id);

        this.getDataAPI(match.params.id);

        return (
            <Form handleForm={this.handleForm} handleInput={this.handleInput} valueInput={this.state.value} />
        )
    }
}
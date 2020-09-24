import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';

const configAPI = {
    key: '40ea5ceef9ec33888dffe518d21b0d28'
}

class API extends Component {
    state = {
        value: this.props.match.params.id ? this.props.match.params.id : ''
    }

    componentDidMount() {
        if (this.props.match.path !== '/') {
            this.API();
        }
    }

    API = async () => {
        try {
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${configAPI.key}&units=metric`);
            const APIJson = await API.json();
            console.log(APIJson);
        } catch (error) {
            console.error(error);
        }
    }

    handleForm = e => {
        e.preventDefault();
        this.API();
        this.props.history.push(this.state.value.toLowerCase());
    }

    handleInput = e => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <>
                <div>You are now at {this.state.value}</div>
                <Form handleForm={this.handleForm} handleInput={this.handleInput} valueInput={this.state.value} />
            </>
        )
    }
};

export default withRouter(API);
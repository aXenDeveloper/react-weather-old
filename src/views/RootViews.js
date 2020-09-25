import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { configAPI } from '../configAPI';
import Form from '../components/Form';

class RootViews extends Component {
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
        this.props.history.push(this.state.value.toLowerCase());
        this.API();
    }

    handleInput = e => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const { value } = this.state;

        return (
            <>
                <div className="topBar">
                    <Form handleForm={this.handleForm} handleInput={this.handleInput} value={value} />
                </div>
                <div>You are now at {value}</div>
            </>
        )
    }
};

export default withRouter(RootViews);
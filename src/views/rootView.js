import React, { Component } from 'react';
import { withRouter } from "react-router";
import { APIContext } from '../context';
import Form from '../components/Form';
import HomeVievs from './homeView';
import WeatherView from './weather/weatherView';

const configAPI = {
    key: '40ea5ceef9ec33888dffe518d21b0d28'
}

class rootView extends Component {
    state = {
        city: this.props.match.params.id ? this.props.match.params.id : '',
        temp: 0,
        loading: false
    }

    mounted = false;

    componentDidMount() {
        this.mounted = true;
        if (this.props.match.params.id) this.API();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    API = async () => {
        if (this.mounted) this.setState({ loading: true });

        try {
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${configAPI.key}&units=metric`);
            const APIJson = await API.json();

            console.log(APIJson); // Debug

            if (this.mounted && API.status === 200) {
                this.setState({
                    temp: APIJson.main.temp,
                    weatherID: APIJson.weather[0].id,
                    weatherIcon: APIJson.weather[0].icon
                })
            }

            if (this.mounted) this.setState({ loading: false });

        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.history.push(
            this.state.city.toLowerCase()
        );

        this.API();
    }

    handleInput = event => {
        this.setState({ city: event.target.value })
    }

    render() {
        return (
            <APIContext.Provider value={this.state}>
                <header className="topBar">
                    <Form
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        city={this.state.city}
                    />
                </header>

                {this.props.match.params.id ? <WeatherView loading={this.state.loading} /> : <HomeVievs />}
            </APIContext.Provider>
        )
    }
}

export default withRouter(rootView);
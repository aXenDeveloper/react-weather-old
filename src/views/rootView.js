import React, { Component } from 'react';
import { withRouter } from "react-router";
import { APIContext } from '../context';
import Form from '../components/Form';
import HomeVievs from './homeView';
import WeatherView from './weather/weatherView';
import Lang from '../components/Lang';
import i18n from '../i18n';
import config from '../config';

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
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${config.keyAPI}&units=metric&lang=${i18n.language}`);
            const APIJson = await API.json();

            console.log(APIJson); // Debug
            console.log(APIJson.weather[0].description); // Debug lang

            if (this.mounted) {
                if (API.status === 200) {
                    this.setState({
                        temp: APIJson.main.temp,
                        weatherID: APIJson.weather[0].id,
                        weatherIcon: APIJson.weather[0].icon
                    })
                }

                this.setState({ loading: false });
            }

        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.history.push(
            this.state.city.toLowerCase()
        );

        if (this.props.match.params.id) this.API();
    }

    handleInput = e => {
        this.setState({ city: e.target.value })
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
                    <Lang />
                </header>

                {this.props.match.params.id ? <WeatherView loading={this.state.loading} /> : <HomeVievs />}
            </APIContext.Provider>
        )
    }
}

export default withRouter(rootView);
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { APIContext } from '../context';
import Form from '../components/Form';
import HomeVievs from './homeView';
import WeatherView from './weather/weatherView';
import { setCookie, getCookie } from '../components/Cookie';

const configAPI = {
    key: '40ea5ceef9ec33888dffe518d21b0d28'
}

class rootView extends Component {
    state = {
        lang: getCookie('lang') ? getCookie('lang') : 'en',
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
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${configAPI.key}&units=metric&lang=${this.state.lang}`);
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

    handleSelect = e => {
        this.setState({
            lang: e.target.value
        })
        setCookie('lang', e.target.value);
    }

    render() {
        return (
            <APIContext.Provider value={this.state}>
                <header className="topBar">
                    <Form
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        handleSelect={this.handleSelect}
                        city={this.state.city}
                        lang={this.state.lang}
                    />
                </header>

                {this.props.match.params.id ? <WeatherView loading={this.state.loading} /> : <HomeVievs />}
            </APIContext.Provider>
        )
    }
}

export default withRouter(rootView);
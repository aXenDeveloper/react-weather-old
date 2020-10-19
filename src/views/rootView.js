import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { APIContext } from '../context';
import Form from '../components/Form/Form';
import Lang from '../components/Lang/Lang';
import i18n from '../i18n';
import config from '../config';

class RootView extends Component {
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
            // const API = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=53.68&lon=16.42&exclude=hourly,daily&appid=${config.keyAPI}`);
            const APIJson = await API.json();

            console.log(APIJson); // Debug
            console.log(APIJson.weather[0].description); // Debug lang

            if (this.mounted) {
                if (API.status === 200) {
                    this.setState({
                        temp: APIJson.main.temp,
                        weatherID: APIJson.weather[0].id,
                        weatherIcon: APIJson.weather[0].icon,
                        clouds: APIJson.clouds.all,
                        coord_lat: APIJson.coord.lat,
                        coord_lon: APIJson.coord.lon,
                        feels_like: APIJson.main.feels_like,
                        humidity: APIJson.main.humidity,
                        pressure: APIJson.main.pressure,
                        temp_max: APIJson.main.temp_max,
                        temp_min: APIJson.maintemp_min
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

    changeLanguage = lng => {
        i18n.changeLanguage(lng);
        if (this.props.match.params.id) this.API();
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, { state: this.state }));

        return (
            <APIContext.Provider value={this.state}>
                <header className="topBar">
                    <Form
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        city={this.state.city}
                    />
                    <div className="hide_mobile">
                        <Lang changeLanguage={this.changeLanguage} />
                    </div>
                </header>

                {childrenWithProps}
            </APIContext.Provider>
        )
    }
}

export default withRouter(RootView);
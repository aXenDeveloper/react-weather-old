import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { configAPI } from '../configAPI';
import Form from '../components/Form';
import GraphicWeatherViews from './Weather/GraphicViews';
import DetailWeatherViews from './Weather/DetailViews';
import ErrorViews from './ErrorViews';
import MainViews from './MainViews';

class RootViews extends Component {
    state = {
        status: 0,
        value: this.props.match.params.id ? this.props.match.params.id : ''
    }

    mounted = false;

    componentDidMount() {
        this.mounted = true;
        if (this.props.match.path !== '/') {
            this.API();
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    API = async () => {
        try {
            const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${configAPI.key}&units=metric`);
            const APIJson = await API.json();
            console.log(APIJson);

            if (this.mounted && API.status === 200) {
                this.setState({
                    status: API.status,
                    weatherID: APIJson.weather[0].id,
                    weatherIcon: APIJson.weather[0].icon
                })
            }

            console.log(this.state);

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
                {this.state.status === 0 || this.state.status === 200 ? (
                    <>
                        {this.state.status === 200 ? (
                            <div>
                                <GraphicWeatherViews value={this.state.value} />
                                <DetailWeatherViews />
                            </div>

                        ) : <MainViews />}
                    </>
                ) : <ErrorViews />}
            </>
        )
    }
};

export default withRouter(RootViews);
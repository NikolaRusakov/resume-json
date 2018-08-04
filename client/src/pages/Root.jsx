import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Layout';


export default class Root extends React.Component {
    state = {
        data: []
    };

    async componentDidMount() {
        const fetchResume = await fetch(`http://localhost:8800/data`)
            .then(data => {
                return data.json()
            })
            .catch((body) => {
                    return body.message;
                }
            );
        this.setState({
            data: fetchResume
        })
    }

    render() {
        const {data} = this.state;
        return <BrowserRouter key="router">
            <Layout
                data={data && data}
            />
        </BrowserRouter>
    }
}

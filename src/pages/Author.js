import React, { Component } from 'react';
import axios from "axios";

export default class Author extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("https://jsonplaceholder.typicode.com/users/" +id)
        .then(res => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Auteur: {this.state.data.name} {this.state.data.email}</h1>
            </div>
        )
    }
}

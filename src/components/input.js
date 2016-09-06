import React, { Component } from 'react';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render()  {
        return (
            <input
                type = "text"
                value = { this.state.value }
                onChange = { this.handleChange.bind(this) }
                className = { this.props.className }
            />
        );
    }
}

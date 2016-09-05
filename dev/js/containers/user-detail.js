import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserDetail extends Component {
    constructor() {
        super();
    }
    render() {
        const params = this.props.params;

        if (!this.props.user) {
            return (<span className="loader">Select a user...</span>);
        }

        return (
            <div>
                <img src={ this.props.user.thumbnail } width="200px"/>
                <h2>{ this.props.user.first } { this.props.user.last }</h2>
                <h3>Age: { this.props.user.age }</h3>
                <h4>Description: { this.props.user.description }</h4>
                <p>filter: { params ? params.filter : "" }</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);

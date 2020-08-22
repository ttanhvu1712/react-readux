import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthUser } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fecthUser(this.props.userId);
    }
    render() {
        const user = this.props.users.find(user => user.id === this.props.userId)
        if(!user)
            return null
        return <div className="header"> {user.name} </div>
    }
}

export default connect(({users}) =>({users}), { fecthUser })(UserHeader)


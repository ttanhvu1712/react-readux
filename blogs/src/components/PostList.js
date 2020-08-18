import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

export class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                PostList
            </div>
        )
    }
}

const mapsStateToProps = (state) => ({})
export default connect(null, { fetchPosts })(PostList)

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/create" className="ui button primary">
            Create Link
          </Link>
        </div>
      );
    }
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2> Streams </h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

export default connect(
  ({ streams, auth }) => ({
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
  }),
  {
    fetchStreams,
  }
)(StreamList);

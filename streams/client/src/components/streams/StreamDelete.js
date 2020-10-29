import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  renderAction() {
    const { deleteStream, match } = this.props;
    return (
      <>
        <button
          onClick={() => deleteStream(match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">Cancle</Link>
      </>
    );
  }

  renderContent() {
    const { stream } = this.props;
    if (stream) {
      return `Are you sure you want to delete this stream with title: ${stream.title}?`;
    }
    return "Are you sure you want to delete this stream?";
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(
  ({ streams }, { match }) => ({ stream: streams[match.params.id] }),
  { fetchStream, deleteStream }
)(StreamDelete);

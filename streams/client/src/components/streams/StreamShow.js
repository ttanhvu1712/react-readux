import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  render() {
    const { stream } = this.props
    if(stream) {
      return (
        <div>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      )
    }
    return <div>Loading...</div>;
  }
}

export default connect(
  ({ streams }, { match }) => ({ stream: streams[match.params.id] }),
  {fetchStream}
)(StreamShow);

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);

    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  componentWillUnmount() {
    this.flvPlayer.destroy()
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) return;

    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
        <div>
          <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default connect(
  ({ streams }, { match }) => ({ stream: streams[match.params.id] }),
  { fetchStream }
)(StreamShow);

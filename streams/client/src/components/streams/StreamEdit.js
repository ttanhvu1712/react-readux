import React , { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from '../../actions'

class StreamEdit extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props
    fetchStream(match.params.id)
  }

  render () {
    const { stream } = this.props
    if(stream) {
      return <div>{stream.title}</div>
    }
    return <div>Loading...</div>;
  }
}

export default connect(
    ({ streams }, ownProps) => ({ stream: streams[ownProps.match.params.id]}),
    {fetchStream}
  )(StreamEdit)

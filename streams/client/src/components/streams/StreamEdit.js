import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  onSubmit = (formValue) => {
    const { match } = this.props;
    this.props.editStream(match.params.id, formValue);
  };

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
        <div>
          <h3> Edit a stream </h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(stream, "title", "description")}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default connect(
  ({ streams }, ownProps) => ({ stream: streams[ownProps.match.params.id] }),
  { fetchStream, editStream }
)(StreamEdit);

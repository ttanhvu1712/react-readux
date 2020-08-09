import React from 'react';

const Spiner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  )
}

Spiner.defaultProps = {
  message: "Loading..."
}

export default Spiner;
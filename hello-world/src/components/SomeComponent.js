import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class CounterComponent extends React.Component {
  render () {
    return <div>
      <Button onClick={() => this.props.increment(this.props.value)}>
        Counter: {this.props.value}
      </Button>
    </div>;
  }
}

CounterComponent.propTypes = {
  'increment': PropTypes.func.isRequired,
  'value': PropTypes.number.isRequired
};

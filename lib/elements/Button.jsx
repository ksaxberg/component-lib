// @flow
import * as React from 'react';

export default class Button extends React.PureComponent {
  style = {
    cursor: 'pointer',
    background: 'lime',
    padding: '8px'
  };

  render() {
      return (
      <button style={this.style} onClick={this.props.onClick}>
        {this.props.children}
      </button>
      );
  }
}
// @flow
import * as React from 'react';

type Props = {
  onClick: Function,
  children: React.Node
}

export default class Button extends React.PureComponent<Props> {
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
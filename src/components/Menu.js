import React from 'react';
import {
  Link
} from "react-router-dom";

export class MenuLink extends React.Component {
  render() {
    return (
        <Link to={this.props.to}>{this.props.value}</Link>
    );
  }
}

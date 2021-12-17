import React, { Component } from 'react';
import SignalR from './SignalR';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <SignalR />
    );
  }
}

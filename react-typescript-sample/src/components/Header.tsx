import React, { Component } from "react";

interface AppProps {
  job: string;
  message: Message;
}

export interface Message {
  word1: string;
  word2: string;
}

export default class Header extends Component<AppProps> {
  render() {
    const { job, message } = this.props;
    return (
      <div className="header">
        {job}の{message.word1} {message.word2}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";
import "./App.css";

interface AppState {
  count: number;
  message: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0, message: "初期化しました" };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      message: "プラスしました"
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
      message: "マイナスしました"
    }));
  };

  // セレクトボックスとかチェックボックスとかだとe.target.valueで値が取れる
  //ncrement2 = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }));
  // };
  // decrement2 = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   this.setState(prevState => ({
  //     count: prevState.count - 1
  //   }));
  // };

  render() {
    const { count, message } = this.state;
    return (
      <div className="container">
        {" "}
        <header>
          <h1>カウンター</h1>{" "}
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>{" "}
            <Statistic.Label>message</Statistic.Label>
            <Statistic.Value>{message}</Statistic.Value>{" "}
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.decrement}>
                {" "}
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1{" "}
              </Button>
            </div>{" "}
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default App;

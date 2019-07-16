import React, { Component } from "react";
import "./App.css";
import { Item } from "semantic-ui-react";
import Header, { Message } from "./components/Header";
import { Link } from "react-router-dom";

//型の定義
export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number; // 省略許可(nullが許可なわけではない）
}

class Sample1 extends Component {
  render() {
    //型の利用
    const characters: Character[] = [
      {
        id: 1,
        name: "東京 太郎",
        age: 25,
        height: 181
      },
      {
        id: 2,
        name: "大阪 次郎",
        age: 22
      }
    ];

    const message: Message = {
      word1: "みなさん",
      word2: "こんにちわ"
    };

    return (
      <>
        <Header job="エンジニア" message={message} />
        <div>
          ID : {characters[0].id}
          <br />
          NAME : {characters[0].name}
          <br />
          AGE : {characters[0].age}
          <br />
          HEIGHT : {characters[0].height}
          <br />
        </div>
        <hr />
        <div>
          {characters.map(c => (
            <Item key={c.id}>
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>{" "}
                <Item.Meta>{c.age}歳</Item.Meta>{" "}
                <Item.Meta>{c.height ? c.height : "???"} cm </Item.Meta>
              </Item.Content>{" "}
            </Item>
          ))}
        </div>
        <div>
          <Link to="/sample2">sample2</Link>
          <br />
          <Link to="/sample3">sample3</Link>
          <br />
          <Link to="/sample4">sample4</Link>
          <br />
          <Link to="/sample5">sample5</Link>
          <br />
          <Link to="/sample6">sample6</Link>
          <br />
          <Link to="/sample7">sample7</Link>
        </div>
      </>
    );
  }
  //{c.height ? c.height : "???"}は省略可能な箇所を省略すると???と表示される
}

export default Sample1;

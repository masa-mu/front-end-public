import React, { FC } from "react";
import { Header, Icon, Item } from "semantic-ui-react";

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

// ここに定義してもCharacterListの引数としてcharactersの引数に使えない
// const characters: Character[] = [
//   {
//     id: 1,
//     name: "東京 太郎",
//     age: 25,
//     height: 181
//   },
//   {
//     id: 2,
//     name: "大阪 次郎",
//     age: 22
//   }
// ];

const CharacterList: FC<CharacterListProps> = ({
  school = "校名不明",
  characters = [
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
  ]
}) => (
  <>
    <Header as="h2">{school}</Header>{" "}
    <Item.Group>
      {characters.map(c => (
        <Item>
          <Icon name="user circle" size="huge" />{" "}
          <Item.Content>
            <Item.Header>{c.name}</Item.Header>{" "}
            <Item.Meta>{c.age}歳 </Item.Meta>{" "}
            <Item.Meta>
              {c.height ? c.height : "???"}
              cm{" "}
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);
export default CharacterList;

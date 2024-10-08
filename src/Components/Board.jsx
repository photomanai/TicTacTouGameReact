import React, { useState } from "react";
import Block from "./Block";
import "../Styles/Board.css";

function Board() {
  const [blocks, setBlocks] = useState([
    {
      Id: 0,
      content: " 1",
    },
    {
      Id: 1,
      content: " 1",
    },
    {
      Id: 2,
      content: " 1",
    },
    {
      Id: 3,
      content: " 1",
    },
    {
      Id: 4,
      content: " 1",
    },
    {
      Id: 5,
      content: " 1",
    },
    {
      Id: 6,
      content: " 1",
    },
    {
      Id: 7,
      content: " 1",
    },
    {
      Id: 8,
      content: " 1",
    },
  ]);
  //true X false O
  const [player, setPlayer] = useState(true);

  const checkContent = (ID) => {
    // console.log(ID);
    setBlocks([
      ...blocks.filter((block) => block.Id !== ID),
      {
        Id: ID,
        content: "X",
      },
    ]);
    console.log(blocks);
  };

  return (
    <div className="board">
      {blocks
        .sort((a, b) => a.Id - b.Id)
        .map((block) => (
          <Block
            Id={block.Id}
            child={block.content}
            checkContent={checkContent}
            key={block.Id}
          />
        ))}
    </div>
  );
}

export default Board;

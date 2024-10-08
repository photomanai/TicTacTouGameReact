import React, { useEffect, useState } from "react";
import Block from "./Block";
import "../Styles/Board.css";

function Board() {
  const [blocks, setBlocks] = useState([
    {
      Id: 0,
      content: " ",
    },
    {
      Id: 1,
      content: " ",
    },
    {
      Id: 2,
      content: " ",
    },
    {
      Id: 3,
      content: " ",
    },
    {
      Id: 4,
      content: " ",
    },
    {
      Id: 5,
      content: " ",
    },
    {
      Id: 6,
      content: " ",
    },
    {
      Id: 7,
      content: " ",
    },
    {
      Id: 8,
      content: " ",
    },
  ]);
  //true X false O
  const [player, setPlayer] = useState(true);
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkContent = (ID) => {
    const filteredBlocks = blocks.filter((block) => block.Id === ID);
    if (filteredBlocks[0].content === " ") {
      if (player) {
        setBlocks([
          ...blocks.filter((block) => block.Id !== ID),
          {
            Id: ID,
            content: "X",
          },
        ]);
        setPlayer(false);
      } else {
        setBlocks([
          ...blocks.filter((block) => block.Id !== ID),
          {
            Id: ID,
            content: "O",
          },
        ]);
        setPlayer(true);
      }
    }
  };

  const checkWin = (player) => {
    return winPatterns.some((pattern) => {
      return pattern.every((index) => blocks[index].content === player);
    });
  };

  const checkDraw = () => {
    return blocks.every((block) => {
      return block.content === "X" || block.content === "O";
    });
  };

  useEffect(() => {
    if (checkWin("X")) {
      alert("X win!");
      setTimeout(() => {
        document.location.reload();
      }, 1500);
    } else if (checkWin("O")) {
      alert("O win!");
      setTimeout(() => {
        document.location.reload();
      }, 1500);
    } else if (checkDraw()) {
      alert("Draw!");
      setTimeout(() => {
        document.location.reload();
      }, 1500);
    }
  });

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

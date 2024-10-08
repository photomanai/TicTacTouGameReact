import React from "react";
import "../Styles/Block.css";

function Block({ Id, child, checkContent }) {
  const retrunId = () => {
    checkContent(Id);
  };
  return (
    <div onClick={retrunId} className="blocks">
      {child}
      {Id}
    </div>
  );
}

export default Block;

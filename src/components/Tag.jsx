// import React from "react";

import "./Tag.css";

const Tag = ({ name, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      style={selected ? tagStyle[name] : tagStyle.default}
      className="tag"
      onClick={() => selectTag(name)}
    >
      {name}
    </button>
  );
};

export default Tag;

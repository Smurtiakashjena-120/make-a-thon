import React from "react";

function Dropdown({ setLanguage }) {
  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="text/x-c++src">C++</option>
      <option value="text/x-java">Java</option>
    </select>
  );
}

export default Dropdown;

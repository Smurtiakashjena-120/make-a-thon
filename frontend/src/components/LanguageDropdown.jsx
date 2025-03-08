import React from "react";

function LanguageDropdown({ setLanguage }) {
  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="cpp">C++</option>
      <option value="java">Java</option>
    </select>
  );
}

export default LanguageDropdown;

import React, { useState, useEffect } from "react";
import SaveButton from "./SaveButton";
import "../styles/editor.css";

function CodeEditor({ file, onClose }) {
  console.log("File received:", file);

  const [code, setCode] = useState("");

  // Update code when file changes
  useEffect(() => {
    if (file) {
      console.log("Loaded file:", file.name);
      setCode(file.content || "");
    }
  }, [file]);

  // Function to run code (just logs to console for now)
  const runCode = () => {
    console.log("Running Code:\n", code);
  };

  return (
    <div className="code-editor">
      <div className="editor-header">
        <span>{file ? file.name : "No file selected"}</span>
        {file && <button onClick={() => onClose(file.name)}>❌</button>}
      </div>

      {/* ✅ Simple Textarea Instead of CodeMirror */}
      {/* <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="plain-text-editor"
        placeholder="Write your code here..."
      /> */}

    </div>
  );
}

export default CodeEditor;

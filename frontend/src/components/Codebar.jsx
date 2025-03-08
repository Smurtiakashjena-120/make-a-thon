import React, { useState, useEffect } from "react";
import SaveButton from "./SaveButton";
import "../styles/codebar.css";

function Codebar({ openedFiles, onEditFile }) {
  const [output, setOutput] = useState("");
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  useEffect(() => {
    // Show terminal as soon as a file is opened
    if (openedFiles.length > 0) {
      setIsTerminalVisible(true);
    }
  }, [openedFiles]); // Runs when openedFiles changes

  const runCode = (code, name) => {
    console.log(`Running Code from File: ${name}\n`, code);

    const dummyOutput = `> Running ${name}...\n> Execution finished.\n> Output: Hello, World!`;
    setOutput(dummyOutput);
  };

  return (
    <div className="codebar">
      {openedFiles.length === 0 ? (
        <div className="empty-message">
          <p>Upload/Create a file and select to appear here</p>
        </div>
      ) : (
        openedFiles.map((file, index) => (
          <div key={index} className="file-tab">
            <h3>{file.name}</h3>
            <textarea
              value={file.content}
              onChange={(e) => onEditFile(file.name, e.target.value)}
              className="editor"
            />
            <div className="buttons">
              <SaveButton code={file.content} fileName={file.name} />
              <button className="run-btn" onClick={() => runCode(file.content, file.name)}>
                ▶ Run
              </button>
            </div>
          </div>
        ))
      )}

      {isTerminalVisible && (
        <div className="terminal">
          {output || "> Welcome to the Code Editor Terminal.\n> Press 'Run' to execute your code."}
        </div>
      )}
    </div>
  );
}

export default Codebar;

import React, { useState, useEffect } from "react";
import SaveButton from "./SaveButton";
import "../styles/codebar.css";

function Codebar({ openedFiles, onEditFile }) {
  const [output, setOutput] = useState(""); // State for terminal output
  const [isTerminalVisible, setIsTerminalVisible] = useState(false); // Control terminal visibility

  // Show terminal when files are opened
  useEffect(() => {
    setIsTerminalVisible(openedFiles.length > 0);
  }, [openedFiles]); // Runs when files change

  // Function to run the code (log content & show output in the terminal)
  const runCode = (code, name) => {
    console.log(`Running Code from File: ${name}\n`, code);

    // Dummy output for now
    const dummyOutput = `> Running ${name}...\n> Execution finished.\n> Output: Hello, World!`;

    setOutput(dummyOutput); // Update the terminal section
  };

  return (
    <div className="codebar">
      {openedFiles.length === 0 ? (
        <p style={{ color: "gray" }}>Upload a file and select to appear here</p>
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

      {/* Terminal Section (Only visible when a file is opened) */}
      {isTerminalVisible && (
        <div className="terminal">
          {output || "> Welcome to the Code Editor Terminal.\n> Press 'Run' to execute your code."}
        </div>
      )}
    </div>
  );
}

export default Codebar;

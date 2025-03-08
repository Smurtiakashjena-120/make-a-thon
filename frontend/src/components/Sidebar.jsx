import React, { useState, useRef } from "react";
import "../styles/sidebar.css";

function Sidebar({ files, onFileUpload, onFileClick, onFileRemove, onCreateFile }) {
  const fileInputRef = useRef(null); 
  const [newFileName, setNewFileName] = useState(""); // State for new file name

  // Handle file selection from upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
      event.target.value = null; // Reset input value
    }
  };

  // ✅ Handle creating a new file
  const handleCreateFile = () => {
    if (newFileName.trim() === "") return; // Prevent empty names

    const validExtensions = [".cpp", ".js", ".py", ".java", ".txt"];
    const hasValidExtension = validExtensions.some(ext => newFileName.endsWith(ext));

    if (!hasValidExtension) {
      alert("Invalid file type! Use .cpp, .js, .py, .java, or .txt");
      return;
    }

    onCreateFile(newFileName); // Create file in parent component
    setNewFileName(""); // Reset input field
  };

  return (
    <div className="sidebar">
      <h2>Files</h2>

      {/* ✅ File Upload */}
      <input 
        ref={fileInputRef}
        type="file" 
        onChange={handleFileChange} 
        className="upload-btn" 
        accept=".cpp,.js,.py,.java,.txt" 
      />

      {/* ✅ Manual File Creation */}
      <div className="create-file">
        <input 
          type="text" 
          placeholder="Enter filename (e.g., main.cpp)" 
          value={newFileName} 
          onChange={(e) => setNewFileName(e.target.value)} 
        />
        <button onClick={handleCreateFile}>Create File</button>
      </div>

      {/* ✅ File List */}
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index} className="file-item">
            <span onClick={() => onFileClick(file.name)}>{file.name}</span>
            <button 
              onClick={() => onFileRemove(file.name)} 
              className="close-btn"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

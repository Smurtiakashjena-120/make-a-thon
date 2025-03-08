import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Codebar from "./components/Codebar";

import "./App.css";

function App() {
  const [openedFiles, setOpenedFiles] = useState([]);
  const [files, setFiles] = useState([]); // Store uploaded files

  const handleFileUpload = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const newFile = { name: file.name, content: content };

      setFiles((prev) => [...prev, newFile]); // Store file in memory
    };

    reader.readAsText(file);
  };

  const handleFileClick = (fileName) => {
    const fileToOpen = files.find((file) => file.name === fileName);
    
    if (fileToOpen) {
      setOpenedFiles([fileToOpen]); // Ensures only one file is open at a time
    }
  };
  
  const handleFileRemove = (fileName) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setOpenedFiles((prev) => prev.filter((file) => file.name !== fileName)); // Also remove from opened files
  };
  // ✅ Handle manual file creation
  const handleCreateFile = (fileName) => {
    const newFile = { name: fileName, content: "" };
    setFiles([...files, newFile]);
    setOpenedFiles([...openedFiles, newFile]); // Open in editor immediately
  };

  const handleFileEdit = (fileName, newContent) => {
    setOpenedFiles((prev) =>
      prev.map((file) =>
        file.name === fileName ? { ...file, content: newContent } : file
      )
    );
  };

  return (
    <div className="app-container">

      <Sidebar 
        files={files} 
        onFileUpload={handleFileUpload} 
        onFileClick={handleFileClick} 
        onFileRemove={handleFileRemove}
        onCreateFile={handleCreateFile} // Pass the function
      />
      <Codebar openedFiles={openedFiles} onEditFile={handleFileEdit} />
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import "../styles/sidebar.css";
function Sidebar({ files, onFileUpload, onFileClick, onFileRemove }) {
  const fileInputRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);

      
      event.target.value = null;
    }
  };

  return (
    <div className="sidebar">
      <h2>Files</h2>
      <input 
        ref={fileInputRef} // ✅ Assign ref to input
        type="file" 
        onChange={handleFileChange} 
        className="upload-btn" 
        accept=".cpp,.js,.py,.java,.txt" 
      />
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

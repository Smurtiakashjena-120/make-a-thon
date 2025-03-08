import React from "react";

function UploadButton({ onUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && ["js", "py", "cpp", "java"].includes(file.name.split(".").pop())) {
      onUpload(file);
    } else {
      alert("Only .js, .py, .cpp, and .java files are allowed!");
    }
  };

  return (
    <div className="upload-button">
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadButton;

import React from "react";

function SaveButton({ code, fileName }) {
  const handleSave = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return <button onClick={handleSave}>💾 Save</button>;
}

export default SaveButton;

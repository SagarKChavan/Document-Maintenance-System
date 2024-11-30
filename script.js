// Array to temporarily store files in memory
const fileStorage = [];

// File Upload Handler
document.getElementById("file-upload").addEventListener("change", (event) => {
  const files = Array.from(event.target.files); // Get selected files
  files.forEach((file) => {
    // Read file content (for demonstration purposes)
    const reader = new FileReader();
    reader.onload = (e) => {
      fileStorage.push({
        name: file.name,
        size: file.size,
        type: file.type,
        content: e.target.result, // File content as Base64 string
      });
    };
    reader.readAsDataURL(file); // Read file as Base64
  });

  alert(`${files.length} file(s) added to temporary storage!`);
});

// Show Temporary File Storage
document.getElementById("upload-btn").addEventListener("click", () => {
  if (fileStorage.length === 0) {
    alert("No files uploaded yet!");
  } else {
    const fileNames = fileStorage.map((file) => file.name).join("\n");
    alert(`Stored Files:\n${fileNames}`);
  }
});

// Search Handler (Modified to work with uploaded files)
document.getElementById("search-btn").addEventListener("click", () => {
  const query1 = document.getElementById("query1").value.toLowerCase();
  const query2 = document.getElementById("query2").value.toLowerCase();
  const query3 = document.getElementById("query3").value.toLowerCase();

  const results = fileStorage.filter(
    (file) =>
      file.name.toLowerCase().includes(query1) &&
      file.name.toLowerCase().includes(query2) &&
      file.name.toLowerCase().includes(query3)
  );

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = results.length
    ? results.map((file) => `<p>${file.name} (${file.size} bytes)</p>`).join("")
    : "<p>No matching files found!</p>";
});

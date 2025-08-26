// ✅ Check if user is a teacher and logged in
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const username = localStorage.getItem("username");

if (!token || role !== "teacher") {
  window.location.href = "login.html";
}

document.getElementById("uploadForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  formData.append("uploadedBy", username); // Include the username of the teacher

  try {
    const response = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      alert("Video uploaded successfully!");
      form.reset();
    } else {
      alert(result.message || "Upload failed");
    }
  } catch (error) {
    console.error("Upload error:", error);
    alert("Something went wrong!");
  }
});

// ✅ Logout Function
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

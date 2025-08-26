document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, role: "student" }),
    });

    const data = await res.json();

    if (res.ok) {
      showToast("✅ Registration successful!");

      setTimeout(() => {
        window.location.href = "watch.html";
      }, 2000);
    } else {
      showToast(data.message || "❌ Registration failed.", true);
    }
  } catch (err) {
    console.error("Error:", err);
    showToast("⚠️ Could not connect to server.", true);
  }
});

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.background = isError ? "#e74c3c" : "#4CAF50";
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

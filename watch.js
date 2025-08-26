document.addEventListener("DOMContentLoaded", async () => {
  const videoList = document.getElementById("videoList");

  try {
    const response = await fetch("http://localhost:5000/api/videos");
    const videos = await response.json();

    videos.forEach(video => {
      const col = document.createElement("div");
      col.className = "col-md-6";

      col.innerHTML = `
        <div class="video-card">
          <h5>${video.title}</h5>
          <p><strong>Educator:</strong> ${video.educator}</p>
          <p><strong>Price:</strong> ₹${video.price}</p>
          <video controls src="http://localhost:5000/uploads/${video.filename}"></video>
        </div>
      `;
      videoList.appendChild(col);
    });

  } catch (error) {
    console.error("❌ Error fetching videos:", error);
    videoList.innerHTML = `<p class="text-danger">Failed to load videos.</p>`;
  }
});

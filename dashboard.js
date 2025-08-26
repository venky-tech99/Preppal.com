// Mock course data with images
const courses = [
    { 
        title: "Aptitude Basics", 
        description: "Master aptitude skills for placements. click here!",
        image: "Images/aptitude.jpg"
    },
    { 
        title: "Logical Reasoning", 
        description: "Sharpen your logical problem-solving ability. click here!",
        image: "Images/logical.jpg"
    },
    { 
        title: "Technical MCQs", 
        description: "Practice important technical questions. click here!",
        image: "Images/technical.jpg"
    },
    { 
        title: "Interview Tips", 
        description: "Ace your HR and technical interviews. click here!",
        image: "Images/interview.jpg"
    },
    { 
        title: "Resume Building", 
        description: "Create a resume that stands out. click here!",
        image: "Images/resume.jpg"
    },
    { 
        title: "Coding Challenges", 
        description: "Boost coding skills with practice problems.",
        image: "Images/coding.jpg"
    }
];

// Render Courses
function renderCourses(data) {
    const container = document.getElementById("courseContainer");
    container.innerHTML = "";
    data.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front" style="background-image: url('${course.image}?auto=compress&cs=tinysrgb&w=600');">
                    <h3>${course.title}</h3>
                </div>
                <div class="card-back">
                    <p>${course.description}</p>
                </div>
            </div>
        `;

        // ✅ Redirects based on course title
        if (course.title === "Aptitude Basics") {
            card.addEventListener("click", () => {
                window.location.href = "quantitative.html";
            });
        }
        if (course.title === "Logical Reasoning") {
            card.addEventListener("click", () => {
                window.location.href = "logicalreasoning.html";
            });
        }
         if (course.title === "Technical MCQs") {
            card.addEventListener("click", () => {
                window.location.href = "technicalmcqs.html";
            });
        }

         if (course.title === "Interview Tips") {
            card.addEventListener("click", () => {
                window.location.href = "InterviewTips.html";
            });
        }

         if (course.title === "Resume Building") {
            card.addEventListener("click", () => {
                window.location.href = "resume_builder.html";
            });
        }

         if (course.title === "Coding Challenges") {
            card.addEventListener("click", () => {
                window.location.href = "CodingChallenges.html";
            });
        }


        container.appendChild(card);
    });
}

renderCourses(courses);

// Search
document.getElementById("searchInput").addEventListener("input", e => {
    const val = e.target.value.toLowerCase();
    const filtered = courses.filter(c => 
        c.title.toLowerCase().includes(val) || 
        c.description.toLowerCase().includes(val)
    );
    renderCourses(filtered);
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    window.location.href = "login.html";
});

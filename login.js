document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        
        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            localStorage.setItem('username', data.username);

            showToast(`✅ Welcome ${data.username} (${data.role})!`);

            setTimeout(() => {
                if (data.role === 'teacher' || data.role === 'admin') {
                    window.location.href = 'upload.html';
                } else {
                    window.location.href = 'watch.html';
                }
            }, 2000);

        } else {
            showToast(`❌ ${data.message || 'Invalid login credentials'}`);
        }
    } catch (err) {
        console.error(err);
        showToast("⚠️ Error connecting to server.");
    }
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

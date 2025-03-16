*HTML:
<header>
      <!-- <h1>Rule of 72 Calculator</h1> -->
      <button class="go-home" onclick="goHome()"><i>&#8592;</i> Home</button>
      <button id="themeToggle">🌙</button>
    </header>

*CSS:
/* New Design for Go Home Button */
/* Go Home Button - Clean Design */

.go-home {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #1e3d59; /* Dark blue */
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.go-home:hover {
  background-color: #ffc107; /* Golden Yellow on Hover */
  color: #1e3d59; /* Dark blue text */
  transform: translateY(-3px); /* Adds slight elevation effect */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Home Icon Styling */
.go-home i {
  font-size: 1.2rem; /* Slightly larger than the text */
}

#themeToggle {
  width: 6%;
  position: fixed;
  right: 128px;
  top: 50px;
}

/* Dark Theme */
.dark-mode {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

.dark-mode .container {
  background: #333;
}

/* Responsive */
@media (max-width: 600px) {

  #themeToggle {
    width: 10%;
    position: fixed;
    right: 10px;
    top: 50px;
  }

  .go-home {
    width: 23%;
    left: 10px;
    }
}



**JS:
// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

function goHome() {
  setTimeout(() => {
    document.location.href = "../index.html";
  }, 300);
}
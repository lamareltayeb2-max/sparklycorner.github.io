let currentPage = "home";
let dark = false;
let days = new Set();

function goTo(id) {
  document.getElementById(currentPage).classList.remove("active");
  document.getElementById(id).classList.add("active");
  currentPage = id;
}

function toggleMode() {
  dark = !dark;
  document.body.className = dark ? "dark" : "light";
  document.getElementById("modeText").innerText = dark ? "داكن" : "فاتح";
}

function addThought() {
  const div = document.createElement("div");
  div.className = "thought";
  div.contentEditable = true;
  div.innerText = "ابدئي بالكتابة…";

  div.addEventListener("input", () => {
    updateForMe();
    trackDay();
  });

  document.getElementById("thoughtsArea").appendChild(div);
}

function updateForMe() {
  const container = document.getElementById("forMe");
  container.innerHTML = "";

  document.querySelectorAll(".thought").forEach(t => {
    if (t.innerText.trim()) {
      const item = document.createElement("div");
      item.className = "for-me-item";
      item.innerText = t.innerText;
      container.appendChild(item);
    }
  });
}

function burn() {
  const box = document.getElementById("messageBox");
  if (box.value.trim()) {
    box.value = "";
    trackDay();
  }
}

function trackDay() {
  days.add(new Date().toDateString());
  document.getElementById("daysCount").innerText = days.size;
}

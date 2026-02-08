let current = "home";
let dark = false;
let days = new Set();

const quotes = [
  "كن لطيفًا مع نفسك، أنت تحاول.",
  "الهدوء ليس هروبًا، بل شفاء.",
  "ما تكتبه اليوم قد ينقذك غدًا."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

function show(id) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(id).classList.add("active");
  current = id;
}

function toggleMode() {
  dark = !dark;
  document.body.className = dark ? "dark" : "light";
  document.getElementById("modeText").innerText = dark ? "داكن" : "فاتح";
}

function addThought() {
  const div = document.createElement("div");
  div.className = "card";
  div.contentEditable = true;
  div.innerText = "اكتب خاطرتك هنا…";
  document.getElementById("thoughtsArea").appendChild(div);
  track();
}

function burn() {
  const box = document.getElementById("messageBox");
  if (box.value.trim() !== "") {
    box.value = "";
    track();
  }
}

function track() {
  const today = new Date().toDateString();
  days.add(today);
  document.getElementById("daysCount").innerText = days.size;
}

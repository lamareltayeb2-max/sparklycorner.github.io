function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function setMode(mode) {
  document.body.classList.toggle('dark', mode === 'dark');
}

function setColor(color) {
  document.body.className = document.body.className.replace(/\b(green|pink|blue|brown|orange|purple|white)\b/g, '');
  document.body.classList.add(color);
}

function addThought() {
  const d = document.createElement('div');
  d.className = 'card';
  d.contentEditable = true;
  d.innerText = 'اكتب خاطرتك…';
  document.getElementById('thoughtList').appendChild(d);
}

const textarea = document.getElementById("burnText");
if (textarea) {
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
}

function burn() {
  document.getElementById('burnText').value = '';
}

const motivations = [
  "أنت تفعل ما يكفي.",
  "الهدوء قوة.",
  "خذ وقتك."
];

document.getElementById("dailyMotivation").innerText =
  motivations[new Date().getDate() % motivations.length];

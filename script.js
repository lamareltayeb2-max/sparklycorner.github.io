function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// الوضع الداكن / الفاتح
const toggle = document.getElementById("modeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "داكن" : "فاتح";
};

// تغيير اللون
document.querySelectorAll(".colors span").forEach(c => {
  c.onclick = () => {
    document.documentElement.style.setProperty("--bg", c.dataset.color);
  };
});

// تكبير تلقائي للرسائل
document.querySelectorAll(".auto-grow").forEach(t => {
  t.addEventListener("input", () => {
    t.style.height = "auto";
    t.style.height = t.scrollHeight + "px";
  });
});

// لنفسي
const affirmations = [
  "أنا أستحق السلام.",
  "كل شيء سيتحسن.",
  "أنا أقوى مما أظن.",
  "التعب لا يعني الفشل.",
  "أنا كافية."
];

const books = [
  "لأنك الله",
  "الخيميائي",
  "فاتتني صلاة",
  "حديث الصباح"
];

const podcasts = [
  "فنجان",
  "وعي",
  "كنبة السبت",
  "أشياء غيرتنا"
];

function loadDaily() {
  const day = new Date().getDate();
  const box = document.getElementById("affirmations");
  box.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.textContent = affirmations[(day + i) % affirmations.length];
    box.appendChild(p);
  }

  document.getElementById("book").textContent = books[day % books.length];
  document.getElementById("podcast").textContent = podcasts[day % podcasts.length];
}

function addAffirmation() {
  const input = document.getElementById("ownAffirmation");
  if (!input.value.trim()) return;
  const p = document.createElement("p");
  p.textContent = input.value;
  document.getElementById("affirmations").appendChild(p);
  input.value = "";
}

loadDaily();

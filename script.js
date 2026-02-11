function openSection(id){
  document.querySelector('.home').style.display='none';
  document.querySelectorAll('.section').forEach(sec=>sec.style.display='none');
  document.getElementById(id).style.display='block';
}

function goHome(){
  document.querySelectorAll('.section').forEach(sec=>sec.style.display='none');
  document.querySelector('.home').style.display='flex';
}

function toggleMode(){
  document.body.classList.toggle('dark');
  let btn=document.querySelector('.theme-toggle');
  btn.textContent=document.body.classList.contains('dark')?'فاتح':'داكن';
}

function changeColor(color){
  document.documentElement.style.setProperty('--main-color',color);
}

const quotes=[
"أنتِ قادرة على أكثر مما تظنين 🤍",
"خطوة صغيرة اليوم تصنع فرقًا غدًا 🌿",
"كوني لطيفة مع نفسك دائمًا"
];

function loadQuotes(){
  const container=document.getElementById("dailyQuotes");
  container.innerHTML="";
  let day=new Date().getDate();
  for(let i=0;i<3;i++){
    let q=document.createElement("p");
    q.textContent=quotes[(day+i)%quotes.length];
    container.appendChild(q);
  }
}

function addPersonalQuote(){
  let text=prompt("اكتبي عبارتك التحفيزية:");
  if(text){
    let p=document.createElement("p");
    p.textContent=text;
    document.getElementById("dailyQuotes").appendChild(p);
  }
}

const books=[
"رواية خوف - أسامة المسلم",
"Atomic Habits",
"فن اللامبالاة"
];

function loadBook(){
  let day=new Date().getDate();
  document.getElementById("bookSuggestion").innerHTML=
  "<h3>اقتراح اليوم:</h3><p>"+books[day%books.length]+"</p>";
}

function loadPlanner(){
  const days=["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
  const container=document.getElementById("plannerContainer");
  days.forEach(day=>{
    let div=document.createElement("div");
    div.innerHTML=`<strong>${day}</strong>
    <input type="text" placeholder="مهمة...">
    <input type="checkbox">`;
    container.appendChild(div);
  });
}

loadQuotes();
loadBook();
loadPlanner();

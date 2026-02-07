let themes = ["theme-purple","theme-green","theme-blue","theme-beige"];
let themeIndex = 0;
let quiet = false;
let days = new Set();

function changeTheme(){
  document.body.className = themes[themeIndex];
  themeIndex = (themeIndex+1)%themes.length;
}

function toggleQuiet(){
  quiet = !quiet;
  document.body.classList.toggle("quiet");
}

function addCard(){
  const c = document.createElement("div");
  c.className="card";
  const p=document.createElement("p");
  p.contentEditable=true;
  p.innerText="خواطرة جديدة…";
  c.appendChild(p);
  document.getElementById("cards").appendChild(c);
  trackDay();
}

function openMessage(type){
  const area=document.getElementById("messageArea");
  area.contentEditable=true;

  if(type==="private"){
    area.innerText="هذه رسالة لا يراها أحد…";
  }
  if(type==="temp"){
    area.innerText="هذه رسالة ستختفي عند التحديث";
  }
  if(type==="daily"){
    area.contentEditable=false;
    area.innerText="رسالة اليوم: كوني لطيفة مع نفسك 🌿";
  }
}

function trackDay(){
  const today=new Date().toDateString();
  days.add(today);
  document.getElementById("days").innerText=days.size;
}

function exportNotes(){
  let text="";
  document.querySelectorAll(".card p").forEach(p=>{
    text+=p.innerText+"\n\n";
  });
  const blob=new Blob([text],{type:"text/plain"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="خواطري.txt";
  a.click();
}

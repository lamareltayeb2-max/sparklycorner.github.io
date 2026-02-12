function toggleTheme(){
  document.body.classList.toggle("dark");
}

function changeColor(color){
  document.documentElement.style.setProperty("--main",color);
  localStorage.setItem("color",color);
}

window.onload=function(){
  const savedColor=localStorage.getItem("color");
  if(savedColor){
    document.documentElement.style.setProperty("--main",savedColor);
  }

  loadQuotes();
  loadPlanner();
  loadTips();
}

const quotes=[
"أنتِ أقوى مما تظنين 🤍",
"كل يوم فرصة جديدة 🌿",
"تقدّمك البسيط إنجاز كبير"
];

function loadQuotes(){
  const q=document.getElementById("dailyQuote");
  if(q){
    const day=new Date().getDate();
    q.innerText=quotes[day%quotes.length];
  }
}

function saveText(id){
  const value=document.getElementById(id).value;
  localStorage.setItem(id,value);
}

function loadText(id){
  const saved=localStorage.getItem(id);
  if(saved){
    document.getElementById(id).value=saved;
  }
}

function loadPlanner(){
  const container=document.getElementById("planner");
  if(!container) return;

  const days=["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"];
  days.forEach(day=>{
    const div=document.createElement("div");
    div.className="planner-day";
    div.innerHTML=`<strong>${day}</strong>
    <input type="text" placeholder="مهمة..." 
    oninput="saveText('${day}')"
    id="${day}">`;
    container.appendChild(div);
    loadText(day);
  });
}

function addTip(){
  const input=document.getElementById("tipInput");
  if(input.value.trim()!==""){
    const tips=JSON.parse(localStorage.getItem("tips")||"[]");
    tips.push(input.value);
    localStorage.setItem("tips",JSON.stringify(tips));
    input.value="";
    loadTips();
  }
}

function loadTips(){
  const container=document.getElementById("tipsList");
  if(!container) return;

  container.innerHTML="";
  const tips=JSON.parse(localStorage.getItem("tips")||"[]");
  tips.forEach(t=>{
    const div=document.createElement("div");
    div.className="quote";
    div.innerText=t;
    container.appendChild(div);
  });
}

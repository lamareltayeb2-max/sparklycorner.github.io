// التنقل بين الأقسام
function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// الوضع الليلي
function toggleDark(){
  document.body.classList.toggle('dark');
}

// اختيار لون الخلفية
function changeBackground(){
  const color = document.getElementById('bgColorSelect').value;
  document.body.style.background = color;
}

// حفظ كل النصوص القابلة للكتابة
window.addEventListener('DOMContentLoaded',()=>{
  const editableElements = document.querySelectorAll('[contenteditable]');
  editableElements.forEach(el=>{
    const saved = localStorage.getItem(el.id);
    if(saved) el.innerHTML = saved;

    el.addEventListener('input',()=>{
      localStorage.setItem(el.id, el.innerHTML);
    });
  });
});

// -------------------- التنقل بين الأقسام --------------------
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// -------------------- الوضع الليلي --------------------
function toggleDark() {
  document.body.classList.toggle('dark');
}

// -------------------- الكتابة المباشرة والحفظ التلقائي --------------------
window.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll('[contenteditable]');
  
  // تحميل النصوص المحفوظة
  editableElements.forEach(el => {
    const saved = localStorage.getItem(el.id);
    if(saved) el.innerHTML = saved;

    // حفظ النصوص عند التغيير
    el.addEventListener('input', () => {
      localStorage.setItem(el.id, el.innerHTML);
    });
  });
});

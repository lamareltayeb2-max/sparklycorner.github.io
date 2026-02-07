// التبديل بين الأقسام
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// الوضع الليلي
function toggleDark() {
  document.body.classList.toggle('dark');
}

// عند تحميل الصفحة، يظهر القسم الأول تلقائيًا
window.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('.section');
  if (firstSection) firstSection.classList.add('active');
});

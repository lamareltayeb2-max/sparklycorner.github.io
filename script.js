// -------------------- التبديل بين الأقسام --------------------
function showSection(id) {
  // أولًا، نزيل الكلاس active من كل الأقسام
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // ثم نضيف الكلاس active للقسم المطلوب
  document.getElementById(id).classList.add('active');
}

// -------------------- الوضع الليلي --------------------
function toggleDark() {
  // نضيف أو نزيل كلاس dark على body لتغيير الألوان
  document.body.classList.toggle('dark');
}

// -------------------- ربط الأزرار تلقائيًا --------------------
// هذا إذا أحببتي أن يتم تفعيل القسم الأول تلقائيًا عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  // يظهر القسم الأول فقط عند فتح الموقع
  const firstSection = document.querySelector('.section');
  if (firstSection) firstSection.classList.add('active');
});

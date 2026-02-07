function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function toggleDark() {
  document.body.classList.toggle('dark');
}

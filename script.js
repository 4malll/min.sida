document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    if(themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
         document.body.classList.toggle('darkTheme');

         if (document.body.classList.contains('darkTheme')) {
            themeToggleBtn.textContent = 'Ljust tema';
         } else {
            themeToggleBtn.textContent = 'Mörk tema'
         }
      });
    }
});

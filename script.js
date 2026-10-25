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

const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

if(readMoreBtn && moreText) {
   readMoreBtn.addEventListener('click', () => {
      moreText.classList.toggle('hidden');

      if (moreText.classList.contains('hidden')) {
         readMoreBtn.textContent = 'Läs mer';
      } else {
         readMoreBtn.textContent = 'Visa mindre';
      }
   });
}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        console.log(`Clicked: ${item.textContent}`);
        // Add functionality for navigation here
      });
    });
  
    const aboutItems = document.querySelectorAll('.about li');
      aboutItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`Clicked: ${item.textContent}`);
            // Add functionality to show content related to the clicked item
        });
    });
  });
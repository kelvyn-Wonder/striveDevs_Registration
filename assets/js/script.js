// Function to show the popup 
function showPopup() {
  document.getElementById('success-popup').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function closePopup() {
  document.getElementById('success-popup').style.display = 'none';
  document.body.classList.remove('no-scroll');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  setTimeout(function() {
      showPopup();  
  }, 500);
});

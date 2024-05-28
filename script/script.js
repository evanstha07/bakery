  //  FAQ popup
  function toggleFaqPopup() {
    var faqPopup = document.getElementById("faq-popup");
    faqPopup.classList.toggle("active");
  }
  document.getElementById("faq").addEventListener("click", function(event) {
    event.preventDefault();
    toggleFaqPopup(); 
  });
  document.querySelector("#faq-popup .close-btn").addEventListener("click", toggleFaqPopup);

// Shared navigation functions for the portfolio website

function showSection(idToShow) {
  const allSections = [
    "main-content", "main-footer",
    "senior-design", "generator-competition", "gearbox-design","mechatronics",
    "sensor-design","mechanical-design", "portenta-camera", "results-section",
    "generator-theory", "generator-mechanical", "generator-results"
  ];
  allSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  const target = document.getElementById(idToShow);
  if (target) {
    target.style.display = "block";
    
    // Process MathJax for the newly shown section
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([target]).catch(function (err) {
        console.log('MathJax error:', err);
      });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goBackToMain() {
  const mainSections = ["main-content", "main-footer"];
  const subSections = [
    "senior-design", "generator-competition", "gearbox-design","mechatronics",
    "sensor-design", "mechanical-design", "portenta-camera", "results-section",
    "generator-theory", "generator-mechanical", "generator-results",
  ];
  mainSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  });
  subSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  
  // Process MathJax for the main content
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([document.getElementById("main-content")]).catch(function (err) {
      console.log('MathJax error:', err);
    });
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = imageSrc;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Initialize modal keyboard support when the script loads
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keydown", function(e) {
    const modal = document.getElementById("imageModal");
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});

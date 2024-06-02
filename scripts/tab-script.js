function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  var otherSections = document.querySelectorAll(".table-of-contents, .about");

  if (section.style.display === "none") {
    // Hide all other sections
    otherSections.forEach(function (otherSection) {
      otherSection.style.display = "none";
    });

    // Show the clicked section
    section.style.display = "block";
  } else {
    // Hide the clicked section
    section.style.display = "none";
  }
}

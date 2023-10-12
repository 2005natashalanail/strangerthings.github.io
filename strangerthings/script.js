document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el nombre de la página actual
    var currentPage = window.location.pathname.split("/").pop();
  
    // Añadimos la clase 'active' al enlace correspondiente según la página actual
    if (currentPage === "home.html") {
      document.querySelector(".home-link").classList.add("active");
    } else if (currentPage === "cast.html") {
      document.querySelector(".cast-link").classList.add("active");
    } else if (currentPage === "about.html") {
      document.querySelector(".about-link").classList.add("active");
    } else if (currentPage === "reviews.html") {
      document.querySelector(".reviews-link").classList.add("active");
    } else if (currentPage === "contact.html") {
      document.querySelector(".contact-link").classList.add("active");
    }
  });
  
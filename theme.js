document.addEventListener("DOMContentLoaded", function() {
  const themeMap = {
      dark: "light",
      light: "solar",
      solar: "dark"
  };

  const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);

  function toggleTheme() {
      const current = localStorage.getItem('theme');
      const next = themeMap[current];

      animateThemeChange();

      setTimeout(() => {
          bodyClass.replace(current, next);
          localStorage.setItem('theme', next);
      }, 500);
  }

  function animateThemeChange() {
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor = "#000";
  }

  document.getElementById('themeButton').onclick = toggleTheme;
  
  // Guardar el estado inicial del contenido de box6

  //innerHtml puede ser devuelta o establecida.Se puede usar para ver el código HTML de la página actual, incluida la que haya sido modificada dinámicamente.
  const initialState = document.getElementById("box6").innerHTML;

  function restoreInitialState() {
      document.getElementById("box6").innerHTML = initialState;
      assignEvents();
  }

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(function(item) {
      item.addEventListener("click", restoreInitialState);
  });

  function assignEvents() {
      document.getElementById("faq").addEventListener("click", function() {
        const FAQContent = document.getElementById("FAQContent").innerHTML;

        document.getElementById("box6").innerHTML = FAQContent;

        assignEvents();
      });

      document.getElementById("reportes").addEventListener("click", function() {
          const reportesContent = document.getElementById("reportesContent").innerHTML;

          document.getElementById("box6").innerHTML = reportesContent;

          assignEvents();
      });
  }

  assignEvents();
});
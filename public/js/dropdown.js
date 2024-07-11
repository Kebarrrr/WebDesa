{
  document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.nav-item.dropdown');
    var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  });
}

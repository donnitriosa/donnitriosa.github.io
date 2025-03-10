document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('#experience .nav');
  const navItems = nav.querySelectorAll('.nav-item');
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const dropdownToggle = document.createElement('button');
  dropdownToggle.className = 'dropdown-toggle';
  dropdownToggle.textContent = nav.querySelector('.nav-link.active').textContent;

  const dropdownMenu = document.createElement('div');
  dropdownMenu.className = 'dropdown-menu';

  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdownLink = link.cloneNode(true);
    dropdownLink.className = 'nav-link';
    dropdownMenu.appendChild(dropdownLink);

    dropdownLink.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#experience .nav-link.active').classList.remove('active');
      link.classList.add('active');
      dropdownToggle.textContent = link.textContent;
      dropdownMenu.classList.remove('show');

      // Change the content
      const targetId = link.getAttribute('data-bs-target').substring(1);
      document.querySelectorAll('#experience .tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active');
      });
      document.getElementById(targetId).classList.add('show', 'active');
    });
  });

  dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show');
  });

  dropdown.appendChild(dropdownToggle);
  dropdown.appendChild(dropdownMenu);
  nav.parentNode.insertBefore(dropdown, nav);
});
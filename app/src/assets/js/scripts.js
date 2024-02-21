import '@fortawesome/fontawesome-free/js/all.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ScrollSpy} from 'bootstrap';
import './tooltip';


window.addEventListener('DOMContentLoaded', (event) => {
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link'),
  );
  responsiveNavItems.map(function(responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

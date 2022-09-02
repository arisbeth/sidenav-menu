
import { gsap } from '../../node_modules/gsap/index.js';

// Component
import { sidenavMenu } from './components/sidenav.js';

// document.addEventListener("DOMContentLoaded", function(event) {
//   sidenavMenu(gsap);
// });
window.addEventListener("DOMContentLoaded", () => {
  sidenavMenu(gsap);
});
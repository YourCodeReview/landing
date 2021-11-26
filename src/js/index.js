/* import './import/modules.js'; */
/* import './import/waypoints.js'; */
/* import './import/_animate-css.js'; */

import Header from '../blocks/modules/header/header';
import Form from '../blocks/modules/form/form';
import ScrollTo from './import/scrollTo';

document.addEventListener("DOMContentLoaded", function() {
  Header.init();
  ScrollTo.init();
  //form
  document.querySelectorAll('.welcome-form').forEach($parent => {
    new Form($parent).init();
  })
})
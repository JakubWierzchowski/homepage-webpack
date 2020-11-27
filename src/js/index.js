import '../scss/main.scss';

import moment from 'moment';
const startOfDay = moment().startOf('day').fromNow();
const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')




let isDark = false;
const switchModes = document.querySelector('.mode--js')

switchModes.addEventListener('click', () => {
  if (isDark) {
    document.documentElement.style.setProperty('--background-color', '#fefefe');
    document.documentElement.style.setProperty('--color', 'black');
    isDark = false;
  } else {
    document.documentElement.style.setProperty('--background-color', 'black');
    document.documentElement.style.setProperty('--color', 'yellow');
    isDark = true;
  }
  
})
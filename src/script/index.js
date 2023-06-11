import 'regenerator-runtime';
import '../../src/styles/main.css';
import '../../src/styles/responsive.css';
import '../components/app-bar';
import '../components/jumbotran';
import '../components/footer';
import App from './views/app';

const hamburgerButtonElement = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('#menu');

const app = new App( {
   button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});



hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
} );

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

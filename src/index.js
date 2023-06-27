import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import './index.css';
import './custom.css';
// Cuidado porque si tengo los estilos desordenados, me sobreescribe el estilo que la aplicación intepreta.
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


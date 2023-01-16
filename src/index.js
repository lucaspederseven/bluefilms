import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="movie-detail/:id" element={<Details />} />
      </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


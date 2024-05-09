import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter1 from './hooks/Counter1.jsx';
import Counter2 from './hooks/Counter2.jsx';
import ArticleDetails from './components/ArticleDetails/AtrticleDetails.jsx';
import Access from './components/Access/Access.jsx';
import { FreeCodeCamp } from './components/FreeCodeCamp/main/FreeCodeCamp.jsx';
import Testimonio from './components/FreeCodeCamp/Testimonio/Testimonio.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FreeCodeCamp/>
    <Access/>
    <Counter1/>
    <App/>
    <Counter2/>
    <ArticleDetails/>
  </React.StrictMode>
);
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

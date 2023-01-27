import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import reportWebVitals from './reportWebVitals';
// import Login from './Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css'
// import noteReducer from './NotesComponents/Note/Notes'
// const store = createStore(noteReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>


    {/* <Navbar />
    <Features />
    <Dashboard /> */}
    <App />



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

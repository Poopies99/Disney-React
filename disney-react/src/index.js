import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}

function LoginPage() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

function DetailPage() {
  return (
    <div>
      <Header />
      <Detail />
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

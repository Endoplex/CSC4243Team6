import React, { } from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomeScreen from './screens/home.js';
import EducationScreen from './screens/education.js';
import ExperienceScreen from './screens/experience.js';
import DesignScreen from './screens/design.js';
import PersonalScreen from './screens/personal.js';
import ResultScreen from './screens/result.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

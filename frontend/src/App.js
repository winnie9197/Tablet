import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header"></header>
        <main className="main">
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/contact" component={ContactScreen} />
        </main>
        <footer className="footer">
          <p>© 2020 Tablet. All Rights Reserved. </p>
        </footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;

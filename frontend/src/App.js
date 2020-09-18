import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import PocketScreen from './screens/PocketScreen';
import './App.css';
import data from './data.js';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header"></header>
        <main className="main">
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/pocket" render={(data) => (
            <PocketScreen contact={data.contacts}/>
          )} />
        </main>
        <footer className="footer">
          <p>© 2020 Tablet. All Rights Reserved. </p>
        </footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;

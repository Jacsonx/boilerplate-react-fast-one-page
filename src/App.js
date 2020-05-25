//your app file 
import React from 'react';
import Header from './components/Header';
import "./styles.css";
import api from './services/api';
import Main from './pages/main';
import Routes from './routes';
import Footer from './components/Footer';


//your app structuring
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

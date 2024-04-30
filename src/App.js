import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Side from './components/Side';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Side show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
<main>
  <Routes>
  <Route exact path='/' Component={StartScreen} />
    <Route exact path='/buy' Component={HomeScreen} />
    <Route exact path='/product/:id' Component={ProductScreen} />
    <Route exact path='/cart' Component={CartScreen} />
  </Routes>
  </main>
    </Router>
  );
}

export default App;

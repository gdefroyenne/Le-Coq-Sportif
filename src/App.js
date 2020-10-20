import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <div class="row">
        <div class="col-md-12">
          <a href="https://twitter.com/?lang=fr"><img src="hp-XV-france-1400.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <a href="https://twitter.com/?lang=fr"><img src="push-neree-960.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
        <div class="col-md-6">
          <a href="https://twitter.com/?lang=fr"><img src="hp-ton-sur-ton-960.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
      </div>
      <div class="row"><span>En ce moment</span></div>
      <div class="row"><span>Un vestiaire idéal pour l'automne</span></div>
      <div class="row">
        <div class="col-sm">
          <a href="https://twitter.com/?lang=fr"><img src="m_2021521_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="https://twitter.com/?lang=fr"><span>Sweat Essentiels</span></a></div>
          <div class="row center"><span>79€</span></div>
        </div>
        <div class="col-sm">
          <a href="https://twitter.com/?lang=fr"><img src="m_2020815_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="https://twitter.com/?lang=fr"><span>Bomber Essentiels</span></a></div>
          <div class="row center"><span>139€</span></div>
        </div>
        <div class="col-sm">
          <a href="https://twitter.com/?lang=fr"><img src="m_2020811_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="https://twitter.com/?lang=fr"><span>Pantalon Essentiels</span></a></div>
          <div class="row center"><span>139€</span></div>
        </div>
        <div class="col-sm">
          <a href="https://twitter.com/?lang=fr"><img src="m_2020668_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="https://twitter.com/?lang=fr"><span>Prestige</span></a></div>
          <div class="row center"><span>145€</span></div>
        </div>
      </div>
      <nav class="navbar navbar-light bg-light justify-content-center">
        <form class="form-inline">
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-light">Light</button>
        </form>
      </nav> 
    </div>
  );
}

export default App;

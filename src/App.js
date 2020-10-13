import React from 'react';
import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <nav class="nav justify-content-end">
        <span class="navbar-text">Livraison standard gratuite pour toute commande supérieure à 90€</span>
        <span class="navbar-text">|</span>
        <a class="nav-link" href="#">Trouver un point de vente</a>
        <span class="navbar-text">|</span>
        <a class="nav-link" href="#">Suivi de commande</a>
        <span class="navbar-text">|</span>
        <a class="nav-link" href="#">S'identifier</a>
        <span class="navbar-text">|</span>
        <a class="nav-link" href="#"><img src="public/logo-1.png" width="30" height="30" alt=""/>Mon panier</a>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="nav-link" href="#"><img src="logo-1.png" width="30" height="30" alt=""/></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Textile</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Collection</a>
                <a class="dropdown-item" href="#">Homme</a>
                <a class="dropdown-item" href="#">Femme</a>
                <a class="dropdown-item" href="#">Enfant</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Chaussures</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Homme</a>
                <a class="dropdown-item" href="#">Femme</a>
                <a class="dropdown-item" href="#">Enfant</a>
              </div>
            </li>
            <span class="navbar-text">|</span>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sports</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Rugby</a>
                <a class="dropdown-item" href="#">Football</a>
                <a class="dropdown-item" href="#">Cyclisme</a>
                <a class="dropdown-item" href="#">Tennis</a>
                <a class="dropdown-item" href="#">Training</a>
                <a class="dropdown-item" href="#">Boxe</a>
                <a class="dropdown-item" href="#">Renault F1 Team</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Ma recherche..." aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
          </form>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-12">
          <a href="#"><img src="hp-XV-france-1400.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <a href="#"><img src="push-neree-960.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
        <div class="col-md-6">
          <a href="#"><img src="hp-ton-sur-ton-960.jpg" alt="" class="img-fluid w-100" /></a>
        </div>
      </div>
      <div class="row"><span>En ce moment</span></div>
      <div class="row"><span>Un vestiaire idéal pour l'automne</span></div>
      <div class="row">
        <div class="col-sm">
          <a href="#"><img src="m_2021521_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="#"><span>Sweat Essentiels</span></a></div>
          <div class="row center"><span>79€</span></div>
        </div>
        <div class="col-sm">
          <a href="#"><img src="m_2020815_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="#"><span>Bomber Essentiels</span></a></div>
          <div class="row center"><span>139€</span></div>
        </div>
        <div class="col-sm">
          <a href="#"><img src="m_2020811_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="#"><span>Pantalon Essentiels</span></a></div>
          <div class="row center"><span>139€</span></div>
        </div>
        <div class="col-sm">
          <a href="#"><img src="m_2020668_1.jpg" class="mx-auto d-block" width="300" height="300" alt=""/></a>
          <div class="row center"><a href="#"><span>Prestige</span></a></div>
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

import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="nav justify-content-end">
                <span class="navbar-text">Livraison standard gratuite pour toute commande supérieure à 90€</span>
                <span class="navbar-text">|</span>
                <a class="nav-link" href="https://twitter.com/?lang=fr">Trouver un point de vente</a>
                <span class="navbar-text">|</span>
                <a class="nav-link" href="https://twitter.com/?lang=fr">Suivi de commande</a>
                <span class="navbar-text">|</span>
                <a class="nav-link" href="https://twitter.com/?lang=fr">S'identifier</a>
                <span class="navbar-text">|</span>
                <a class="nav-link" href="https://twitter.com/?lang=fr"><img src="public/logo-1.png" width="30" height="30" alt=""/>Mon panier</a>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="nav-link" href="https://twitter.com/?lang=fr"><img src="logo-1.png" width="30" height="30" alt=""/></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="https://twitter.com/?lang=fr">Textile</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Collection</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Homme</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Femme</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Enfant</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="https://twitter.com/?lang=fr">Chaussures</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Homme</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Femme</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Enfant</a>
                            </div>
                        </li>
                        <span class="navbar-text">|</span>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="https://twitter.com/?lang=fr">Sports</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Rugby</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Football</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Cyclisme</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Tennis</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Training</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Boxe</a>
                                <a class="dropdown-item" href="https://twitter.com/?lang=fr">Renault F1 Team</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Ma recherche..." aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
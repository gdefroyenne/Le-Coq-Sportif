import React from 'react'

function Navbar() {
    return (
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
    )
}

export default Navbar
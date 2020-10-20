function aireRectangle(longueur, largeur) {
    return longueur * largeur
}

function perimetreRectangle(longueur, largeur) {
    return longueur * 2 + largeur * 2
}

function aireTriangleRectangle(base, hauteur) {
    return base * hauteur / 2
}

function perimetreTriangleRectangle(base, hauteur) {
    return base + hauteur + (Math.hypot(base, hauteur))
}

function kelvinsToCelsius(kelvins) {
    return kelvins - 273.15
}

function perimetreCercle(rayon) {
    return 2 * Math.PI * rayon
}

function aireCercle(rayon) {
    return Math.PI * rayon ** 2
}

function rendreMonnaie(price, billAmount) {
    return billAmount - price
}

function vacances(prix, budget) {
    return `Je peux partir ${(budget - (budget % prix)) / prix} jours et il me reste ${budget % prix} euros`
}

function entier(nombre) {
    return (nombre % 2) === 0
}

function retirerPremiereLettre(mot) {
    return mot.substr(1)
}

function retirerDerniereLettre(mot) {
    return mot.slice(0, -1)
}

function essence(distance, reservoir, consommation) {
    const a = distance * consommation
    const b = a / reservoir
    if (b < 1) {
        return "Un plein d'essence suffit"
    } else {
        return `Il faut faire ${b-1} pleins d'essences en plus`
    }
}

console.log(aireRectangle(12, 5));
console.log(perimetreRectangle(6, 8));
console.log(aireTriangleRectangle(15, 13));
console.log(perimetreTriangleRectangle(20, 18));
console.log(kelvinsToCelsius(50));
console.log(perimetreCercle(18));
console.log(aireCercle(14));
console.log(rendreMonnaie(88, 100));
console.log(vacances(120, 550));
console.log(entier(218));
console.log(retirerPremiereLettre("Hello"));
console.log(retirerDerniereLettre("Hello"));
console.log(essence(100, 50, 5));
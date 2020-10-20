function aireRectangle(longueur, largeur) {
    return (longueur * largeur)
}

function perimetreRectangle(longueur, largeur) {
    return ((longueur * 2) + (largeur * 2))
}

function aireTriangleRectangle(base, hauteur) {
    return ((base * hauteur) / 2)
}

function perimetreTriangleRectangle(base, hauteur, hypotenuse) {
    return (base + hauteur + hypotenuse)
}

function kelvinsToCelsius(kelvins) {
    return (kelvins - 273.15)
}

function perimetreCercle(rayon) {
    return (2 * Math.PI * rayon)
}

function aireCercle(rayon) {
    return (Math.PI * (rayon ** 2))
}

function rendreMonnaie(price, billAmount) {
    return (billAmount - price)
}

function vacances(prix, budget) {
    const a = budget % prix
    const b = budget - a
    const c = b / prix
    return `Je peux partir ${c} jours et il me reste ${a} euros`
}

function entier(nombre) {
    return ((nombre % 2) === 0)
}

function retirerPremiereLettre(mot) {
    return mot.substr(1)
}

function retirerDerniereLettre(mot) {
    return mot.slice(0, -1)
}

// function pair(nombre) {
//     return ((nombre % 2) === 0)
// }



console.log(aireRectangle(12, 5));
console.log(perimetreRectangle(6, 8));
console.log(aireTriangleRectangle(15, 13));
console.log(perimetreTriangleRectangle(7, 4, 9));
console.log(kelvinsToCelsius(50));
console.log(perimetreCercle(18));
console.log(aireCercle(14));
console.log(rendreMonnaie(88, 100));
console.log(vacances(120, 550));
console.log(entier(218));
console.log(retirerPremiereLettre("Hello"));
console.log(retirerDerniereLettre("Hello"));


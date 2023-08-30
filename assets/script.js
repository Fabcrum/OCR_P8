const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// RECUPERATION ELEMENTS DU DOM
let bannerImg = document.querySelector(".banner-img")
let bannerTagLine = document.querySelector("#banner p")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

// FONCTION AFFICHAGE DES SLIDES
function affichageElement(i) {
	bannerImg.src = slides[i].image
	bannerTagLine.innerHTML = slides[i].tagLine
}

// FONCTION AFFICHAGE DES POINTS
function affichageDots(i) {
	sectionDots = document.querySelector(".dots")
	sectionDots.innerHTML = ""
	for (let numDot=0; numDot<(slides.length); numDot++) {
		dotUnit = document.createElement("div")
		dotUnit.classList.add("dot")
		if (numDot===i) {
			dotUnit.classList.add("dot_selected")
		}
		sectionDots.appendChild(dotUnit)
	}
}
// Appel initial de la fonction
affichageDots(0)

// EVENTS FLECHES
let i=0
arrowLeft.addEventListener ("click", () => {
i > 0 ? i-- : i=(slides.length-1) 
	affichageElement(i)
	affichageDots(i)
})

arrowRight.addEventListener ("click", () => {
i < slides.length-1 ? i++ : i=0
	affichageElement(i)
	affichageDots(i)
})


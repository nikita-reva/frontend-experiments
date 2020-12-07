// Items
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const sizes = document.querySelector('.sizes')

// Movement Animation
container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25
	card.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`
})

// Animate in
container.addEventListener('mouseenter', (e) => {
	window.setTimeout(() => {
		// Pop out
		title.style.transform = 'translateZ(50px)'
		sneaker.style.transform = 'translateZ(50px) rotateZ(-30deg)'
		description.style.transform = 'translateZ(50px)'
		purchase.style.transform = 'translateZ(50px)'
		sizes.style.transform = 'translateZ(50px)'
		card.style.transition = 'none'
	}, 500)
})

// Animate out
container.addEventListener('mouseleave', (e) => {
	title.style.transform = 'translateZ(0px)'
	sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
	description.style.transform = 'translateZ(0px)'
	purchase.style.transform = 'translateZ(0px)'
	sizes.style.transform = 'translateZ(0px)'
	card.style.transition = 'all 0.2s ease'
	card.style.transform = 'rotateX(0deg) rotateY(0deg)'
})

const logo = document.getElementById('logo')
const paths = document.querySelectorAll('#logo path')
const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')

paths.forEach((path, i) => {
	console.log(`Letter ${i + 1} has ${path.getTotalLength()}`)
})

startBtn.addEventListener('click', () => {
	let delay = 0
	paths.forEach((path) => {
		path.style.animation = `line-anim 2s ease forwards ${delay}s`
		delay += 0.3
	})
	logo.classList.add('animate-logo')
})

resetBtn.addEventListener('click', () => {
	paths.forEach((path) => {
		path.style.animation = ''
		logo.classList.remove('animate-logo')
	})
})

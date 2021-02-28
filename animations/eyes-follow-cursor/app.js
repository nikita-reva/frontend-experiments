function eyeball(event) {
	var eyes = document.querySelectorAll('.eye')
	eyes.forEach((eye) => {
		let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
		let y = eye.getBoundingClientRect().top + eye.clientHeight / 2

		let deltaX = event.pageX - x
		let deltaY = event.pageY - y
		let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

		let radian = Math.atan2(deltaX, deltaY)
		let rot = -radian * (180 / Math.PI) + 270

		console.log(deltaX, deltaY, distance)
		eye.style.transform = `rotate(${rot}deg)`
		eye.style.boxShadow = `${distance / 50}px ${distance / 50}px ${
			distance / 15
		}px rgb(0, 0, 0, 0.6)`
	})
}

document.querySelector('body').addEventListener('mousemove', eyeball)

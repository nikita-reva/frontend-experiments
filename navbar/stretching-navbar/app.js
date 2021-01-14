const nav = document.querySelector('nav')
const navItems = document.querySelectorAll('nav ul li a')
const line = document.querySelector('#line')
let currentPosition
let nextPosition
let currentlyActive

navItems.forEach((item, index) => {
	if (item.parentNode.classList.contains('active')) {
		currentPosition = getItemPosition(item)
		currentlyActive = index
		if (currentPosition) {
			line.style.left = currentPosition.left + 'px'
			line.style.width = currentPosition.right + 'px'
		}
	}
})

navItems.forEach((item, index) => {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		navItems.forEach((navItem) =>
			navItem.parentNode.classList.remove('active')
		)
		listItem = item.parentNode
		listItem.classList.add('active')

		const tl = gsap.timeline({
			defaults: { duration: 0.3 },
			ease: 'power2.inOut',
		})

		nextPosition = getItemPosition(item)

		if (index > currentlyActive) {
			tl.to(line, {
				width: nextPosition.right - currentPosition.left,
			}).to(line, {
				width: nextPosition.right - nextPosition.left,
				x: nextPosition.left,
			})
			currentlyActive = index
			currentPosition = nextPosition
		} else {
			tl.to(line, {
				x: nextPosition.left,
				width: currentPosition.right - nextPosition.left,
			}).to(line, {
				width: nextPosition.right - nextPosition.left,
			})
			currentlyActive = index
			currentPosition = nextPosition
		}
	})
})

function getItemPosition(item) {
	return (position = {
		left: item.offsetLeft,
		right: item.offsetLeft + item.clientWidth,
	})
}

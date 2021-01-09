function update(e) {
	var x = e.clientX || e.touches[0].clientX
	var y = e.clientY || e.touches[0].clientY

	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
}

function onOff(e) {
	if (
		document.documentElement.style.getPropertyValue('--bg') !==
		'rgba(0, 0, 0, 0.96)'
	) {
		document.documentElement.style.setProperty(
			'--bg',
			'rgba(0, 0, 0, 0.96)'
		)
	} else {
		document.documentElement.style.setProperty(
			'--bg',
			`radial-gradient(circle 10vmax at var(--cursorX) var(--cursorY), 
            rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.95) 100%`
		)
	}
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)
document.addEventListener('click', onOff)

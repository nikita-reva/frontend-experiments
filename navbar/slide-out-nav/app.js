var card = document.getElementById('activator')

var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

var toggle = false

tl.to('.activator', {
	background: '#805ad5',
	borderRadius: '50% 0 0 50%',
})

tl.to(
	'nav',
	{
		clipPath: 'ellipse(100% 100% at 50% 50%)',
	},
	'-=0.5'
)
tl.to(
	'nav img',
	{ opacity: '1', transform: 'translateX(0)', stagger: 0.05 },
	'-=0.5'
)

tl.pause()

card.addEventListener('click', () => {
	toggle = !toggle
	toggle ? tl.play() : tl.reverse()
})

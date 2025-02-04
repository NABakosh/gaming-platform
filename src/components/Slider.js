import React, { useState } from 'react'

const images = [
	'img/featureProducts/laptop.png',
	'img/featureProducts/headset.png',
	'img/featureProducts/motherboard.png',
]

const ImageSlider = () => {
	const [current, setCurrent] = useState(0)

	const nextSlide = () => {
		setCurrent(prev => (prev + 1) % images.length)
	}

	const prevSlide = () => {
		setCurrent(prev => (prev - 1 + images.length) % images.length)
	}

	const getPositionClass = index => {
		if (index === current) return 'center'
		if (index === (current + 1) % images.length) return 'right'
		if (index === (current - 1 + images.length) % images.length) return 'left'
		return 'hidden'
	}

	return (
		<div className='slider-container'>
			<button onClick={prevSlide} className='nav-button'>
				←
			</button>
			<div className='slider'>
				{images.map((img, index) => (
					<div key={index} className={`slide ${getPositionClass(index)}`}>
						<img src={img} alt={`Slide ${index}`} />
					</div>
				))}
			</div>
			<button onClick={nextSlide} className='nav-button'>
				→
			</button>
		</div>
	)
}

export default ImageSlider
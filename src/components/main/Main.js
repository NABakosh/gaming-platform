import Card from '@components/home/Card'
import LeatestCard from '@components/home/LeatestCard'
import InfoCard from '@components/home/InfoCard'
import Blog from '@components/home/Blog'

import '@sass/home/home.scss'

function Main() {
	const featprod = [
		{ title: 'Laptops', img: 'img/featureProducts/laptop.png' },
		{ title: 'HeadPhones', img: 'img/featureProducts/headset.png' },
		{ title: 'MotherBoards', img: 'img/featureProducts/motherboard.png' },
	]
	const leatProd = [
		{
			title: 'G502 Gaming Mouse',
			img: 'img/leatestProducts/c870x524-removebg-preview 1.png',
			price: '₹2999 ',
		},
		{
			title: 'Lenovo Legion 5 Pro',
			img: 'img/leatestProducts/image 2.png',
			price: '₹1,69,990 ',
		},
		{
			title: 'Playstation 5',
			img: 'img/leatestProducts/ps5.png',
			price: '₹29999 ',
		},
		{
			title: 'Wireless HeadPhone',
			img: 'img/leatestProducts/headset.png',
			price: '₹5999 ',
		},
		{
			title: 'Oculus Quest 2',
			img: 'img/leatestProducts/31kNfifEo3S5.png',
			price: '₹9999 ',
		},
		{
			title: 'XBOX SERIES X CONTROLLER',
			img: 'img/leatestProducts/Xbox-wireless-controller-carbon-black2.png',
			price: '₹7999 ',
		},
	]
	const offer = [
		{
			title: 'Free Shiping',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
			url: '/img/goffer/1.svg',
		},
		{
			title: 'Exclusiv Deals',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
			url: '/img/goffer/2.svg',
		},
		{
			title: 'Quality Product',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
			url: '/img/goffer/3.svg',
		},
		{
			title: '24/7 Support',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
			url: '/img/goffer/4.svg',
		},
	]
	const trending = [
		{
			title: 'Wireless Headset',
			img: 'img/trendingProducts/1.png',
			price: '₹5999 ',
		},
		{
			title: 'Atari 2600 Joystick',
			img: 'img/trendingProducts/2.png',
			price: '₹5999 ',
		},
		{
			title: 'PS4 V2  DualShock 4',
			img: 'img/trendingProducts/3.png',
			price: '₹5999 ',
		},
	]
	const blog = [
		{
			name: 'Mohit Sign',
			date: '21 January,2022',
			description: 'NO STRINGS WITH WIRELESS HEADPHONE',
			url: 'img/blog/1.png',
		},
		{
			name: 'Akshay',
			date: '31 January,2022',
			description: 'Laptop Buying Guide - Everything You Need To Know',
			url: 'img/blog/2.png',
		},
		{
			name: 'SaberAli',
			date: '21 February,2022',
			description: '5 Reason To Switch To A pair of wireless Headphone',
			url: 'img/blog/3.png',
		},
	]
	return (
		<div className='App'>
			<section className='promotion' id='home'>
				<article>
					<main>
						<h1>
							PS4 V2
							<br />
							DualShock 4
						</h1>
						<p>
							wireless controller for playStation 4 <br />
							(compatibilityCentric)
						</p>
						<span>₹2999</span>
					</main>
					<button>
						BUY NOW <img src='img/arrow.svg' />
					</button>
				</article>
				<div>
					<img className='controller' src='img/controller.svg' />
					<img
						width={123}
						height={125}
						className='discount'
						src='img/discount.svg'
					/>
				</div>
			</section>
			<section className='featuredProducts'>
				<h1>Featured Products</h1>
				<main>
					{featprod.map(obj => (
						<Card title={obj.title} img={obj.img} />
					))}
				</main>
				<div className='sliderbar'>
					<div className='bar show'></div>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
			</section>
			<section className='leatestProducts'>
				<h1>Leatest Products</h1>
				<article>
					<li className='leatest-mage'>New Arrival</li>
					<li>Best Seller</li>
					<li>Featured</li>
					<li>Special Offer</li>
				</article>
				<aside>
					{leatProd.map(obj => (
						<LeatestCard title={obj.title} img={obj.img} price={obj.price} />
					))}
				</aside>
			</section>
			<section className='goffer'>
				<h1>What Gamers Offer!</h1>
				<aside>
					{offer.map(obj => (
						<InfoCard
							title={obj.title}
							description={obj.description}
							url={obj.url}
						/>
					))}
				</aside>
			</section>
			<section className='leatestProducts'>
				<h1>Trending Products</h1>

				<aside className='leatestAside'>
					{trending.map(obj => (
						<LeatestCard title={obj.title} img={obj.img} price={obj.price} />
					))}
				</aside>
				<div className='sliderbar'>
					<div className='bar show'></div>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
			</section>
			<section className='leatestblog'>
				<h1>Leatest Blog</h1>
				<nav className='block'>
					{blog.map(obj => (
						<Blog
							name={obj.name}
							description={obj.description}
							url={obj.url}
							date={obj.date}
						/>
					))}
				</nav>
			</section>
		</div>
	)
}

export default Main

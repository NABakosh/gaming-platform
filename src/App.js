import './index.scss';
import ImageSlider from './components/Slider';
function App() {
  return (
		<div className='App'>
			<header>
				<img width={180} height={44} src='img/logo.svg' />
				<nav>
					<li>Home</li>
					<li>Pages</li>
					<li>Products</li>
					<li>Blog</li>
					<li>Shop</li>
				</nav>
				<div>
					<img src='img/search.svg' />
					<input type='text' placeholder='Search..' />
				</div>
				<aside>
					<img src='img/gift.svg' />
					<img src='img/profile.svg' />
					<img src='img/cart.svg' />
				</aside>
			</header>
			<section className='promotion'>
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
				<h1>FeaturedProducts</h1>
				<main>
					<ImageSlider/>
					
				</main>
			</section>
		</div>
	)
}

export default App;

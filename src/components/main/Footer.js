const Footer = () =>{
    return (
			<footer>
				<main>
					<div className='email'>
						<img width={180} height={44} src='img/logo.svg' />
						<p>Subscribe to email alerts. We promise not to spam your inbox.</p>
						<div>
							<input />
							<button>Subscribe</button>
						</div>
					</div>
					<div className='lists'>
						<h4>SHOP</h4>
						<p>Laptops</p>
						<p>Wireless Headphones</p>
						<p>MotherBoards</p>
						<p>Controllers</p>
						<p>Wireless Headsets</p>
						<p>Jot Sticks</p>
						<p>PlayStations</p>
						<p>Gaming Mouse</p>
						<p>Oculus Quest</p>
						<p>Gift Card</p>
						<p>Rock In India</p>
						<p>Earn Rs.100</p>
					</div>
					<div className='lists'>
						<h4>HELP</h4>
						<p>Track Your Order</p>
						<p>Warranty & Support</p>
						<p>Return Policy</p>
						<p>Service eCenters</p>
						<p>Bulk Orders</p>
						<p>FAQs</p>
						<p>Why Buy Direct</p>
					</div>
					<div className='lists'>
						<h4>HELP</h4>
						<p>About Us</p>
						<p>News</p>
						<p>Read Our Blog</p>
						<p>High5heads</p>
						<p>Our Partners</p>
						<p>Terms of Service</p>
						<p>Privacy Policy</p>
						<p>Partner Offers T&Cs</p>
					</div>
				</main>
				<nav className='society'>
					<img src='img/footer/facebook.svg' />
					<img src='img/footer/instagram.svg' />
					<img src='img/footer/linkendin.svg' />
					<img src='img/footer/twitter.svg' />
					<img src='img/footer/youtube.svg' />
				</nav>
				<div className='links'>
					<img width={350} src='img/footer/cards.png' />
					<div>
						<h3>DOWNLOAD THE APP</h3>
						<img src='img/footer/googleplay.png' />
						<img src='img/footer/appstore.png' />
					</div>
				</div>
				<h4>© 2022 Imagine Marketing Private Limited. All Rights Reserved.</h4>
			</footer>
		)
}
export default Footer
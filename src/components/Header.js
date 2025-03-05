function Header(){
    return (
			<div>
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
			</div>
		)
}
export default Header
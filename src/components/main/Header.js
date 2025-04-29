import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router'
function Header() {
	const location = useLocation()
	const navigate = useNavigate()

	const handleScrollLinkClick = id => {
		if (location.pathname !== '/') {
			navigate('/') // Сначала переходим на главную
			setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
			}, 100) // Небольшая задержка, чтобы страница успела загрузиться
		}
	}
	return (
		<div>
			<header>
				<ScrollLink to='home'
				                            onClick={() => handleScrollLinkClick("home")}
>
					<a href='#home'>
						<img width={180} height={44} src='img/logo.svg' />
					</a>
				</ScrollLink>
				<nav>
					 <li>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            onClick={() => handleScrollLinkClick("home")}
                        >
                            Home
                        </ScrollLink>
                    </li>

                    <li>
                        <RouterLink to="/blog">Blog</RouterLink>
                    </li>

				</nav>
				<div>
					<img src='img/search.svg' />
					<input type='text' placeholder='Search..' />
				</div>
				<aside>
					<img src='img/gift.svg' />
					<RouterLink to='/Auth'>
						<img src='img/profile.svg' />
					</RouterLink>
					<img src='img/cart.svg' />
				</aside>
			</header>
		</div>
	)
}
export default Header

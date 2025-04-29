import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Main from '@components/main/Main'
import Auth from '@components/auth/Auth'
import Header from '@components/main/Header'
import Footer from '@components/main/Footer'
import Blog from '@components/blog/Blog'

import '@sass/index.scss'
import '@sass/main/footer.scss'
import '@sass/main/header.scss'

function App() {
	return (
			<Router>
				<Header /> 
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/Auth' element={<Auth/>}/>
					<Route path='/Blog' element={<Blog/>}/>
				</Routes>
				<Footer/>
			</Router>
	)
}

export default App

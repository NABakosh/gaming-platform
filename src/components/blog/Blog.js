import InfoCard from '@components/home/InfoCard'

import '@sass/blog/blog.scss'

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


function Blog() {
    return(
        <div className="blogPage">
            <main>
                <img src='img/blogpage/blog.png'/>
                <div>
                    <article>
                    <h2>Know About Our Ecomerce
                    Business, History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Mattis neque ultrices mattis aliquam, malesuada diam est.
                          Malesuada sem tristique amet erat vitae eget dolor lobortis.
                         Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    </article>
                    <button>Contact us</button>
                </div>
            </main>
            <section className='goffer'>
				<h1>Our Features</h1>
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
            <section className='ourClient'>
                    <h1>Our Client Say!</h1>
                    <div className='client'>
                        <div className='client-img'>
                            <img src='img/blogPage/1.png'></img>
                            <img src='img/blogPage/2.png' className='img-active'></img>
                            <img src='img/blogPage/3.png'></img>
                        </div>
                        <h4>Selina Gomez</h4>
                        <p>Ceo At Webecy Digital</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Non duis ultrices quam vel dui sollicitudin aliquet id arcu.
                          Nam vitae a enim nunc, sed sapien egestas ac nam.
                         Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                         
            </section>
        </div>
    )
}
export default Blog
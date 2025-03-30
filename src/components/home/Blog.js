const Blog = ({name,date,description,url}) =>{
    return (
        <>
			<div className='blog-card'>
				<img src={url} />
				<nav>
					<a>
						<img src='img/blog/pen.svg' /> {name}
					</a>
					<a>
						<img src='img/blog/calendar.svg' /> {date}
					</a>
				</nav>
				<h3>Top esssential Trends in 2022</h3>
				<p>{description}</p>
				<u>Read More</u>
			</div>
        </>
		)
}
export default Blog
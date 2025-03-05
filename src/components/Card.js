const Card = (props) =>{
    return (
			<>
				<div className='card'>
					<img src={props.img} />
					<nav>
					<p>{props.title}</p>
					<span>{props.price}</span>
					</nav>
				</div>
			</>
	)
}

export default Card
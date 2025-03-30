const LeatestCard = props => {
	return (
		<>
			<div className='leatest-card'>
				<img src={props.img} />
				<nav>
					<p>{props.title}</p>
					<span>{props.price}</span>
				</nav>
			</div>
		</>
	)
}

export default LeatestCard

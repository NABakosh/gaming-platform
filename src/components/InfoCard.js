const InfoCard = ({title,description,url}) =>{
    return(
        <div className='info-card'>
					<img src={url}></img>
					<h3>{title}</h3>
					<p>
						{description}
					</p>
				</div>
    )
}
export default InfoCard
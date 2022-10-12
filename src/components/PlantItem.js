import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(plantName) {
    // alert(`🌟 Vous voulez acheter 1 ${plantName} ? 🌷 Excellent choix !  🌟`)
	document.title=`${plantName}`
}


function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={`${id}`} className='lmj-plant-item' onClick={() => handleClick(name)} >
			<div className='lmj-cover-container'>
				<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
				<div className='lmj-cover_price'>{price} €</div>
			</div>
			<div className='lmj-down-card'>
				{name}
				<div>
					<CareScale careType='water' scaleValue={water} name={name} />
					<CareScale careType='light' scaleValue={light} name={name} />
				</div>
			</div>
		</li>
	)
}

export default PlantItem
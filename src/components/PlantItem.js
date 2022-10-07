import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(plantName) {
    alert(`🌟 Vous voulez acheter 1 ${plantName} ? 🌷 Excellent choix !  🌟`)
}


function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={`${id}`} className='lmj-plant-item' onClick={() => handleClick(name)} >
			<div className='lmj-cover-container'>
				<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
				<div className='lmj-cover_price'>{price} €</div>
			</div>
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
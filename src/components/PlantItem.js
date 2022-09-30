import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(e) {
    // console.group("👉 Détection d'événement")
    // console.log("🌟 Reaction au click 🌟 ")
    console.log("🌟 pour l'évent e :", e)
    // console.log(`🌟 Vous avez cliqué sur ${name}   🌟`)
}


function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={`${id}`} className='lmj-plant-item' onClick={(e) => handleClick(e)} >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
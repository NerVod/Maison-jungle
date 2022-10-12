
// import { useEffect, useState } from 'react'
import { useState } from 'react'
import '../styles/Footer.css'

function Footer({ cart }) {
	const [inputValue, setInputValue] = useState('')

	// test des differents useEffects

	// useEffect(() => {
	// 	console.log('1 alerte s\'affiche à chaque rendu')
	// });

	// useEffect(() => {
	// 	console.log("2 alerte s'affiche au premier rendu")
	// }, []);

	// useEffect(() => {
	// 	console.log("3 s'affiche au premier rendu et au refresh du cart")
	// },[cart])
	
	// useEffect(() => {
	// 	return () =>
	// 	console.log("4 s'affiche quanf footer est retiré ou ajouté au DOM")
	// })


	// fin test différents useEffects

	function handleInput (e) {
			setInputValue(e.target.value)
	}

	function checkValidEmail (value) {
		if (!value.includes('@')) {
			alert('La saisie n\'est pas un email valide ! ')
		} else {
			setInputValue(value)
		}
	}
	function validateEmail (value) {
		if (!value.includes('@')) {
			alert('L\'email n\'est pas une adresse valide 😓 et n\'est pas pris en compte ! 😡')
		} else {
			alert(`${value} enregistré comme votre email !`)
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div className='lmj-footer-input'>
				<input
					type="email"
					placeholder="Votre email"
					value={inputValue}
					onChange={handleInput}
					onBlur={() => checkValidEmail(inputValue)}
					></input>
				<button onClick={() => validateEmail(inputValue)}>Valider l'Email</button>
			</div>
		</footer>
	)
}

export default Footer

import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput (e) {
			setInputValue(e.target.value)
	}

	function checkValidEmail (value) {
		if (!value.includes('@')) {
			alert('L\'email ne contient pas "@" ! ')
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
			<input 
				type="email" 
				placeholder="votre email" 
				value={inputValue}
				onChange={handleInput}
				onBlur={() => checkValidEmail(inputValue)}
				></input>
			<button onClick={() => validateEmail(inputValue)}>Valider l'Email</button>
		</footer>
	)
}

export default Footer
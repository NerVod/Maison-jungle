
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function checkValidEmail (value) {
		if (!value.includes('@')) {
			alert('L\'email ne contient pas "@" ! ')
		} else {
			setInputValue(value)
		}
	}
	function validateEmail (value) {
		if (!value.includes('@')) {
			alert('L\'email ne contient pas "@" et n\est pas pris en compte! ')
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
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={() => checkValidEmail(inputValue)}
				></input>
			<button onClick={() => validateEmail(inputValue)}>Valider l'Email</button>
		</footer>
	)
}

export default Footer
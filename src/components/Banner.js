import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner({isOpen, setIsOpen}) {
    return  (
    <div className="lmj-banner">
        <div className='lmj-liste'>
            <ul>
                <li>Shop</li>
                <li>A propos</li>
            </ul>
        </div>
        <div className='lmg-banner-title'>
            <h1 className='lmj-title'>La maison jungle</h1>
            <img src={logo} alt="logo de feuille" className='lmj-logo' />
        </div>
        <div className='lmj-liste'>
            <ul>
                <li>Se connecter</li>
                <li onClick={() => setIsOpen(!isOpen)} >Panier</li>
            </ul>
        </div>
    </div>
    )
}

export default Banner
import { useEffect } from "react";
import "../styles/Cart.css";
import {motion} from 'framer-motion'


function Cart({cart, updateCart, list, updateList, isOpen, setIsOpen}) {
    // const monsteraPrix = 8;
    // const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )
    
    useEffect(() => {
        total !== 0 ? document.title =`LMJ total: ${total} €`: document.title= "Maison Jungle"
    }, [total])
    useEffect(() => {
        list !== '' ? document.title=`Catégorie ${list} ` : document.title="Maison Jungle"
    }, [list])

    useEffect(() => {
        document.title ='Bienvenue dans la maison Jungle !'
    }, [])


    function removeFromCart(name, amount) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)

        const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)

        if(currentPlantSaved.amount > 1) {
            currentPlantSaved.amount--
            updateCart([
                ...cartFilteredCurrentPlant, currentPlantSaved
            ])
        } else {
            updateCart([...cartFilteredCurrentPlant])
        }
      
       }

    
    return isOpen ? (
        <motion.nav
            initial={{ translateX: -100}}
            animate={{translateX: 0}}
            transition={{ ease:'easeOut', duration: 1}}
            >

        <div className="lmj-cart">

            <button 
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}>
                    Fermer mon panier
            </button>

            <h2>Mon Panier</h2>

            {cart.map(({ name, price, amount}, index) => (
                <div className="lmj-cart-item" key={`${name} - ${index}`}>
                    {name} {price} € x {amount}
                    <button className="lmj-cart-remove-button" onClick={() => removeFromCart(`${name}`, `${amount}`)}>❌</button>
                </div>
            ))}

            <h3>Total: {total} € </h3>

            <button onClick={() => updateCart([])}>
                Vider le panier 
            </button>

        </div>
        </motion.nav>
    ) : (
        <div className="lmj-cart-closed">
            {/* <button 
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
                >
                Ouvrir le panier
            </button> */}

        </div>
    )
    
};

export default Cart

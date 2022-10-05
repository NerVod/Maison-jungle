import { useState } from "react";
import "../styles/Cart.css";


function Cart({cart, updateCart}) {
    const monsteraPrix = 8;
    const [isOpen, setIsOpen] = useState(true)
    
    return isOpen ? (
        <div className="lmj-cart">

            <button 
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}>
                    fermer
            </button>

            <h2>Panier</h2>
            <h3>Total: {monsteraPrix * cart} € </h3>

            <button onClick={() => updateCart(0)}>
                Vider le panier 
            </button>

        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button 
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
                >
                    Ouvrir le panier
            </button>

        </div>
    )
    
};

export default Cart

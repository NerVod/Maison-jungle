import "../styles/Cart.css"

function Cart() {
    const monsteraPrix = 8
    const lierrePrix = 10
    const bouquetPrix = 15
    return (
        <div className="lmj-cart">
            <h1>Panier</h1>
            <ul>
                <li>Monstera : {monsteraPrix} €</li>
                <li>Lierre : {lierrePrix} €</li>
                <li>Bouquet de fleurs : {bouquetPrix} €</li>
            </ul>
            <div>Total : {monsteraPrix + lierrePrix + bouquetPrix} €</div>
        </div>
    )

}

export default Cart
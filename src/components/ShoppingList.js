import { plantList } from "../datas/plantList"


function ShoppingList() {

    const categories = plantList.reduce(
        (accumulateur, plant) => 
        accumulateur.includes(plant.category) ? accumulateur : accumulateur.concat(plant.category), 
        []
    )

    return (
        <div>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul>
                    {plantList.map((plant) =>
                    <li key={plant.id}>{plant.name} { (plant.isBestSale || plant.category === 'plante grasse') && <span>🔥</span>} </li>
                    )}
                </ul>
                

        </div>
        )
}

export default ShoppingList
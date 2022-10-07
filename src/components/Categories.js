import { plantList } from "../datas/plantList"
import "../styles/Categories.css"

function Categories ({ list, updateList}) {

    const categories = plantList.reduce(
        (accumulateur, plant) =>
        accumulateur.includes(plant.category) ? accumulateur :
        accumulateur.concat(plant.category),
        [] 
    )

    const handleCategorie = event => {
        updateList(event.target.value)
    }

    const handleReset = () => {
        updateList('')
    }


    return (
        <div className="lmj-categories">
            <select name="categorie" id="plant-type" value={list} onChange={handleCategorie} className="lmj-categories-select">
                <option value=''>Choisir un Type de plante</option>
                {categories.map((categorie) => (
                    <option key={`${categorie}`} value={categorie}>{categorie}</option>
                ))}
            </select>
            <button onClick={handleReset}>Réinitialiser</button>
        </div>
    )
}

export default Categories
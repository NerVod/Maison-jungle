import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";

function ShoppingList() {
  const categories = plantList.reduce(
    (accumulateur, plant) =>
      accumulateur.includes(plant.category)
        ? accumulateur
        : accumulateur.concat(plant.category),
    []
  );

  return (
    <div>
      <h2>Les types de plantes :</h2>
      <ul className="lmj-categories">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}{" "}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldé 💰</div>}
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

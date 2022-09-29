import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

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
        {plantList.map(({ id, cover, name, water, light}) => (
            <PlantItem 
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
            />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

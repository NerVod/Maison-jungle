import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart, list, updateList }) {

  // const categories = plantList.reduce(
  //   (accumulateur, plant) =>
  //     accumulateur.includes(plant.category)
  //       ? accumulateur
  //       : accumulateur.concat(plant.category),
  //   []
  // );

 function addToCart(name, price) {
  const currentPlantSaved= cart.find((plant) => plant.name === name) 

  if(currentPlantSaved) {
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    )
    updateCart([
      ...cartFilteredCurrentPlant,
      {name, price, amount: currentPlantSaved.amount + 1 }
    ])
  } else {
    updateCart([ ...cart, {name, price, amount: 1 }])
  }
 } 

 
let plantList2 = []
 function filerCategories(categ) {
    categ !== '' ? plantList2 = plantList.filter(plante => plante.category === categ ) : plantList2 = plantList
 }

  return (
    <div>
      {/* <h2>Les types de plantes :</h2>
      <ul className="lmj-categories">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul> */}
      <ul className="lmj-plant-list">
        {filerCategories(list)}
        {plantList2.map(({ id, cover, name, water, light, price}) => (
            <div key={id}>
              <PlantItem 
                          id={id}
                          cover={cover}
                          name={name}
                          water={water}
                          light={light}
                          price={price}
                          />
              <button onClick={() => addToCart(name,price)}>Ajouter</button>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

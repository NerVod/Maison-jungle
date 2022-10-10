import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
// import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import "../styles/Layout.css";
import { useEffect, useState } from "react";
import Categories from "./Categories";

function App() {

  const [list, updateList] = useState("");
  
  const [isFooterShown, updateIsFooterShown] = useState([]);

  
  const savedCart = localStorage.getItem("cart");

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart
          cart={cart}
          updateCart={updateCart}
          list={list}
          updateList={updateList}
        />
        <div className="backgroundZone">
          <Categories list={list} updateList={updateList} />
          <ShoppingList
            cart={cart}
            updateCart={updateCart}
            list={list}
            updateList={updateList}
          />
        </div>
      </div>
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>
        Cacher le footer
      </button>
      {isFooterShown && <Footer cart={cart} />}
      {/* <Footer cart={cart} /> */}
    </div>
  );
}

export default App;

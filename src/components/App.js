import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
// import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import "../styles/Layout.css"
import { useState } from "react";
import Categories from "./Categories";

function App() {

  const [cart, updateCart] = useState([])

  const [list, updateList] = useState('')
  
  return (
          <div>
              <Banner />
              <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <Categories list={list} updateList={updateList}/>
                <ShoppingList 
                cart={cart} updateCart={updateCart}
                list={list} updateList={updateList}
                />
              </div>
              <Footer />
        </div>
  )
}

export default App

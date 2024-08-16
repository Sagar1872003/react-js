import Product from "./Product"
import { Item } from "./Data"
import { useEffect, useState } from "react"

function App() {

  const [record, setRecord] = useState([])
  const [cart,setCart] = useState([])
  
  const filterProduct = (cat) => {
    if (cat === "all") {
      setRecord(Item)
    }
    else {
      let data = Item.filter((val) => {
        return val.category === cat
      })
      setRecord(data)
    }
  }

  
  // const AddtoCart = (id) => {
  //   let allcart = JSON.parse(localStorage.getItem("cart")) || []
  //   let item = allcart.find((val) => val.id == id);
  //   if(item){
  //     alert("product already exist")
  //     return false;
  //   }

  //   record.map((val)=>{
  //     if(val.id == id){
  //       if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
  //         cart.push(val)
  //         localStorage.setItem('cart',JSON.stringify(cart))
  //       }else{
  //         allcart.push(val);
  //         localStorage.setItem('cart',JSON.stringify(allcart))

  //       }
  //     }
  //   })
  // }

  const AddtoCart = (id) => {
    let allcart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = allcart.find((val) => val.id == id);
    if (item) {
      alert("Product already exists in the cart");
      return false;
    }
  
    record.map((val) => {
      if (val.id == id) {
        allcart.push(val);
        localStorage.setItem("cart", JSON.stringify(allcart));
        setCart(allcart); 
      }
    });
  };

   const RemoveFromCart = (id) => {
        let allcart = JSON.parse(localStorage.getItem("cart")) || [];
        let updatedCart = allcart.filter((val) => val.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart); // Update the state to re-render the component
    }

  useEffect(() => {
    setRecord(Item)
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])

  return (
    <div align="center">
      <h1>Filter App</h1>
      <Product
        product={record}
        filterProduct={filterProduct}
        AddtoCart={AddtoCart}
        cart={cart}
        RemoveFromCart={RemoveFromCart}
      />
    </div>
  )
}

export default App;

import React,{useState} from "react";
import ProductCard from "./ProductCard";
function FirstPage(){
    const [products,setProducts] = useState([
        { id: 1, name: "iPhone 16", price: 150000, manufacturer: "Apple", stocks: 40 },
        { id: 2, name: "Tesla Model S", price: 9000000, manufacturer: "Tesla", stocks: 15 },
        { id: 3, name: "Samsung S24", price: 143000, manufacturer: "Samsung", stocks: 100 },
        { id: 4, name: "OnePlus Nord CE 2", price: 50000, manufacturer: "OnePlus", stocks: 50 },
        { id: 5, name: "Bag", price: 800, manufacturer: "Fasttrack", stocks: 50 }
      ]);
    function handleDelete(id){
        setProducts((currentState) =>{
            return currentState.filter((product) => product.id!==id)
        
        })
    }
      return (
    
        <div className="App">
          
        { products && products.map((product) => {
          return(<ProductCard id={product.id} name={product.name} manu={product.manufacturer} price={product.price} stocks={product.stocks}  key={product.id} onDelete={handleDelete} />)
        })}
       
    
    
          
    
        </div>
      );
}
export default FirstPage;
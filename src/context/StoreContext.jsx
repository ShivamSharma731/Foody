import {createContext,useState} from "react";
import {food_list} from "../assets/assets"
import { useEffect } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

  const [cartitems,setCartItems]=useState({})

  const addToCart = (itemId)=>{
   if(!cartitems[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
   }
   else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
  }

  const removeFromCart = (itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
 
   const gettotal = () =>{
    let totalamount =0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        let iteminfo = food_list.find((product)=>product._id === item)
        totalamount += iteminfo.price*cartitems[item];
      }
      }
    return totalamount;  
   }  


   const charges = () =>{
    let quantity  = 0;
    for(const item in cartitems){
      if(cartitems[item]){
        quantity++;
      }
    }
    return quantity*1;
   }

    const contextvalue = {
  food_list,
  cartitems,
  setCartItems,
  addToCart,
  removeFromCart,
  gettotal,
  charges
    }
        return (
            <StoreContext.Provider value={contextvalue}>
            {props.children}
            </StoreContext.Provider>
        )
    
}

export default StoreContextProvider;
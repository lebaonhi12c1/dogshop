import { createContext,useState } from "react";
const cartConText = createContext();
function CartProvide({children}){
    const [cart,setCart] = useState([]);
    const value ={cart,setCart};
    return ( 
        <cartConText.Provider value={value}>
            {children}
        </cartConText.Provider>
     );
}
export {cartConText,CartProvide}
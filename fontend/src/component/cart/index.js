import { useContext,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { cartConText } from "../../cartcontext/cartContext";

const Cart = () => {
    const carts = useContext(cartConText);
    const {cart,setCart} = carts;
    const [isCart,setIscart] = useState(false);
    useEffect(
        ()=>{
            if(cart.length === 0){
                setIscart(false)
            }
            else{
                setIscart(true)
            }
        },[isCart]
    )
    const handleDone = function(){
        setCart([]);
        setIscart(false)
    }
    return ( 
        <div>
            <section className="cart-container">
                <div className="cart-header">YOUR CART:</div>
                {isCart?(<div className="cart-items">
                    {cart.map((cartdog,index) =>{
                        console.log(cartdog)
                        return <div className="cart-item" key={index}>
                            <img src={cartdog.imageUrl} alt={cartdog.name} className="cart-item-img" />
                            <span>
                                {cartdog.name}:{cartdog.price}$
                            </span>
                        </div>
                    })}
                    <div className="cart-total">TOTAL:
                        {cart.reduce((total,cartdogs)=>{
                            return total + Number(cartdogs.price)
                        },0)}$
                    </div>
                    <button className="cart-checkout" onClick={handleDone}>DONE</button>
                </div>):(<div className="cart-items"><img src="https://www.lytmeals.in/assets/web/img/emptycart.png" alt="" /></div>)}
                <div className="cart-link">
                    <Link to ="/dogs"><button className="cart-gohome">BACK TO DOGS</button></Link>
                    <Link to ="/"><button className="cart-gohome">GO TO HOME</button></Link>
                </div>
            </section>
        </div>
     );
}
 
export default Cart;
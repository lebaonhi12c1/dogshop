import { useContext, useState } from 'react';
import { cartConText } from '../../cartcontext/cartContext';
const Dog = (props) => {
    const cart = useContext(cartConText);
    const {setCart} = cart;
    const {name,breed,description,price,imageUrl} = props;   
    const [isAdd, setAdd] = useState(false);
    const handleAdd = function(){
        setAdd(true);
        setCart(predog =>{
            return [...predog,{
                name,
                imageUrl,
                price
            }]
        })
    }
    return ( 
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img src={imageUrl} alt={name} className="dog-img" />
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">{price}$</div>
                {!isAdd ?(<button className='dogs-btn' onClick={handleAdd}>ADD TO CART</button>)
                : (<button className='dogs-btn-disabled'>ADDED</button>)}
            </section>
        </>
     );
}
 
export default Dog;
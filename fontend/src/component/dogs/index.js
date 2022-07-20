import './dogs.css';
import Dog from "./Dogs";
const Dogs = (props) => {
    const {dogs} = props;
    console.log(dogs)
    return ( 
        <>
            <div className="dogs-container">
            {dogs.map((dog)=>{
                return(
                    <div key={dog.id}>
                        <Dog name={dog.name} breed={dog.breed} description ={dog.description} price ={dog.price} imageUrl={dog.imageUrl}></Dog>
                    </div>
                )
            })}
            </div>
        </>
     );
}
 
export default Dogs;
import DataItem from "./DataItem";

export default function ItemList({ clothes, addToCart }) {

    return (
        
        <div>
             <h1>Gentlewoman Clothes</h1>
             <div style={{border: "4px solid black", margin: "10px", padding: "20px"}}>
                <div className="row">
                        
                   {clothes.map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}>
                    <DataItem item={item} addToCart={addToCart} />
                    </div>
                    ))} 
                </div>
                </div>
        </div>
    );
}
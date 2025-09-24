import DataItem from "./DataItem";

// ItemList-component modtager to props
// clothes: en liste, addToCart: en funktion
export default function ItemList({ clothes, addToCart }) {

    return (
        
        <div>
             <h1>Gentlewoman Clothes</h1>
             <div style={{border: "4px solid black", margin: "10px", padding: "20px"}}>
                <div className="row">
                
                {/* Map looper igennem alle produkter i clothes-listen */}
                   {clothes.map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}>
                    {/* Viser selve produktet med DataItem-component */}
                    {/* Sender item-objektet og addToCart-funktionen videre som props */}
                    <DataItem item={item} addToCart={addToCart} />
                    </div>
                    ))} 
                </div>
                </div>
        </div>
    );
}
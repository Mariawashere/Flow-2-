import DataItem from "./DataItem";

export default function ItemList({ clothes, addToCart }) {

    return (
        
        <div>
             <h1>Gentlewoman Clothes</h1>
             <div style={{border: "4px solid black", margin: "10px", padding: "20px"}}>
                <div className="row">
                        
                   {clothes.map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}
                    
                    style={{  //layout styling/
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "12px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    width: "250px",
                    backgroundColor: "#fff",
                    display:"flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                    }}>
                    <DataItem item={item} addToCart={addToCart} />
                    </div>
                    ))} 
                </div>
                </div>
        </div>
    );
}
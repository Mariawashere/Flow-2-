import DataItem from "./DataItem.jsx";
export default function ItemList(props) {
    
    return (
    <div style={{border: "4px solid black", margin: "10px", padding: "20px"}}>
        <h1>Gentlewoman Clothes</h1>
        
        {props.dataItems.map((data) => {
            return (
                <DataItem data={data} />
            )
        })}
    </div>

  )

  function DataItem({ data}) {  //  her laver vi inline styling ift vores product-cards/ 
    //denne komponent modtager en liste af data (dataItems) og viser dem ved at loope igennem og gengive DataItem komponenten for hver enkelt data objekt.
  return ( 

    <div style={{  //layout styling/
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
    
      <h2 style={{ marginBottom: "8px" }}>{data.marke}</h2>  
      <p><strong>Model:</strong> {data.model}</p>
      <p><strong>Size:</strong> {data.size}</p>
      <p><strong>Price:</strong> {data.price} DKK</p>
      <p><strong>Color:</strong> {data.color}</p>
      <p><strong>Description:</strong> {data.desc}</p>
    </div>
  );
}

}
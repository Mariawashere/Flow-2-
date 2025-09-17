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
}
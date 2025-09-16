import DataItem from "./DataItem.jsx";



export default function ItemList(props) {
    
    return (
    <div style={{border: "4px solid white", margin: "10px", padding: "20px"}}>
        <h1>Gentlewoman Clothes</h1>
        
        {props.dataItems.map((data) => {
            return (
                <DataItem data={data} />
            )
        })}

{/* Brug props til at sætte indholdet i child-komponenten fra denne (parent) komponent */}
        {/* <TodoItem title="Køb ind"/>
        <TodoItem title="Persian kan næsten ikke blive sejere"/>
        <TodoItem title="Kat"/>
        <TodoItem title="Hund"/> */}
    </div>
  )
}
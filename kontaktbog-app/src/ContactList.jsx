import ContactItem from "./ContactItem"



export default function ContactList(props) {
    console.log(props);
    
    return (
    <div style={{border: "2px solid red"}}>
        <h1>Dette er vores todo list. Og Persian er sej.</h1>
        
        {props.OurContacts.map((contact) => {
            return (
                <ContactItem contact={contact} />
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
export default function ContactItem(props) {
    console.log(props);
    
    return (
        <div>
            <h2>{props.contact.firstname}</h2>
            <h2>{props.contact.lastname}</h2>
            <h2>{props.contact.email}</h2>
            <h2>{props.contact.phone}</h2>
            <h2>{props.contact.company}</h2>
            <h2>{props.contact.position}</h2>
        </div>
        
    )
}
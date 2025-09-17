export default function ContactItem(props) {
    console.log(props);
    
    return (
        <h2>{props.contact.firstname} {props.contact.lastname}</h2>
    )
}
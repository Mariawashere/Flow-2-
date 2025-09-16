export default function DataItem(props) {
    return (
            <h2>{props.data.brand}{props.data.model}{props.data.size}{props.data.price}{props.data.color}{props.data.description}</h2>
    )
}
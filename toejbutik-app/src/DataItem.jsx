export default function DataItem(props) {
      return (
        <div>
            <ul>
                <li>{props.data.brand} - {props.data.model} - {props.data.size} - {props.data.price} DKK - {props.data.color} - {props.data.description}</li>
            </ul>
        </div>
        // <h2>{props.data.brand} - {props.data.model} - {props.data.size} - {props.data.price} DKK - {props.data.color} - {props.data.description}</h2>
      );
    }

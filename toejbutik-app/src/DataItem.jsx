export default function DataItem(props) {
// dataItem er en komponent der modtager et produkt (et data-objekt)

     const DataItem = [  // her er vores data som vi 'henter' fra databasen/serveren
  {
    brand: "Gentlewoman",
    model: "Model1",
    size: "XS",
    price: 150,
    color: "Red",
    description: "Elegant and minimalistic"
  },
  {
    brand: "Gentlewoman",
    model: "Model2",
    size: "S",
    price: 175,
    color: "Pink",
    description: "Soft and feminine"
  }
];
      return (
        <div>
            <ul>
                <li>{props.data.brand} - {props.data.model} - {props.data.size} - {props.data.price} DKK - {props.data.color} - {props.data.description}</li>
            </ul>
        </div>
      );
    }

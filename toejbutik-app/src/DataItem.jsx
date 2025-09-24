import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DataItem({ item, addToCart }) {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{item.brand} - {item.model}</Card.Title>
                        <Card.Text>
                            <p className="card-text">Size: {item.size}</p>
                            <p className="card-text">Color: {item.color}</p>
                            <p className="card-text">{item.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted">{item.price} kr.</h6>
                        </Card.Text>
                        <Button variant="primary" onClick={() => addToCart(item.id)}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
            
        //   <div className="card h-100">
        //     <div className="card-body">
        //       <h5 className="card-title">{item.brand} - {item.model}</h5>
        //       <p className="card-text">Size: {item.size}</p>
        //       <p className="card-text">Color: {item.color}</p>
        //       <p className="card-text">{item.description}</p>
        //       <h6 className="card-subtitle mb-2 text-muted">{item.price} kr.</h6>
        //       <button
        //         className="btn btn-primary"
        //         onClick={() => addToCart(item.id)}>

        //         Add to cart

        //       </button>
        //     </div>
        //   </div>
        );
      }
      
export default DataItem;
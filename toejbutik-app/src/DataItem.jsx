function DataItem({ item, addToCart }) {
        // Simple image mapping based on item ID
        const getImageForItem = (id) => {
          const imageMap = {
            1: '/img/bukser.jpg',
            2: '/img/kjole.jpg'
          };
          return imageMap[id];
        };

        const imageSrc = getImageForItem(item.id);
        
        return (
          <div className="card h-100">
            <img 
              src={imageSrc || `https://via.placeholder.com/200x200/ff69b4/ffffff?text=Item+${item.id}`} 
              className="card-img-top" 
              alt={`${item.brand} ${item.model}`}
              style={{height: '200px', objectFit: 'cover'}}
              onError={(e) => {
                console.log('Local image failed, using fallback:', e.target.src);
                e.target.src = `https://via.placeholder.com/200x200/ff69b4/ffffff?text=Item+${item.id}`;
              }}
              onLoad={(e) => console.log('Image loaded successfully:', e.target.src)}
            />
            <div className="card-body">
              <h5 className="card-title">{item.brand} - {item.model}</h5>
              <p className="card-text">Size: {item.size}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">{item.description}</p>
              <h6 className="card-subtitle mb-2 text-muted">{item.price} kr.</h6>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(item.id)}>

                Add to cart

              </button>
            </div>
          </div>
        );
      }
      
export default DataItem;
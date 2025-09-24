// DataItem-component viser ét produkt (item) og giver mulighed for at lægge det i cart
function DataItem({ item, addToCart }) {
        // Simple image mapping based on item ID (hver id får et bestemt billede)
        const getImageForItem = (id) => {
          const imageMap = {
            1: '/img/bukser.jpg',
            2: '/img/kjole.jpg',
            3: '/img/open-back-top.jpg',
            4: '/img/jakkesæt.jpg',
            5: '/img/hvidt-sæt.jpg',
            6: '/img/creme-sæt.jpg'
          };
          return imageMap[id]; // returnerer stien til billedet hvis id findes
        };

        // Finder det rigtige billede til produktet ud fra id
        const imageSrc = getImageForItem(item.id);
        
        return (
          <div className="card h-100">
            <img 
              // Bruger produktets billede eller et placeholder hvis billedet mangler
              src={imageSrc || `https://via.placeholder.com/200x200/ff69b4/ffffff?text=Item+${item.id}`} 
              className="card-img-top img-fluid"
              alt={`${item.brand} ${item.model}`}
              style={{height: '450px', objectFit: 'cover'}}
              
              // Hvis billedet ikke kan indlæses
              onError={(e) => {
                console.log('Local image failed, using fallback:', e.target.src);
                e.target.src = `https://via.placeholder.com/200x200/ff69b4/ffffff?text=Item+${item.id}`;
              }}
              onLoad={(e) => console.log('Image loaded successfully:', e.target.src)}
            />


            <div className="card-body">
              {/* Product info */}
              <h5 className="card-title">{item.brand} - {item.model}</h5>
              <p className="card-text">Size: {item.size}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">{item.description}</p>
              <h6 className="card-subtitle mb-2 text-muted">{item.price} kr.</h6>
              {/* Add to cart knap */}
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
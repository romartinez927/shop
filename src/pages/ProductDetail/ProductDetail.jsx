import { useContext } from "react"
import { cartContext } from "../../storage/context"
import "./ProductDetail.css"

export default function ProductDetail({producto}) {
    const { 
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart 
          } = useContext(cartContext)

    const quantity = getItemQuantity(producto.id)

    return (
        <div className='d-flex row justify-content-center align-items-center'>
          <img src={`.${producto.img}`} className='tarjetita col-4' alt={producto.nombre}/>
          <div className='d-flex flex-column col-4'>
            <p>RAMMORSMERCH</p>
            <h2 className="fw-bold">{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <div>
              <p className="mb-1">Size</p>
              <div className="d-flex gap-2">
                <button className="detail-btn">S</button>
                <button className="detail-btn active">M</button>
                <button className="detail-btn">L</button>
                <button className="detail-btn">XL</button>
                <button className="detail-btn">2XL</button>
              </div>
            </div>
            { quantity === 0 ? (
              <button className="add-cart-btn mt-4 mb-1 py-2" onClick={() => increaseCartQuantity(producto.id)}>Add to Cart</button>
            ) :
              <div>
                <p className="pt-3 mb-1">Quantity</p>
                <div className="d-flex align-items-center justify-content-center gap-4 quantity-container mb-3 mt-0">
                  <button className="quantity-btn fs-4" onClick={() => decreaseCartQuantity(producto.id)}>-</button>
                  <span>{quantity}</span>
                  <button className="quantity-btn fs-4" onClick={() => increaseCartQuantity(producto.id)}>+</button>
                </div>
                <button className="remove-btn py-2" onClick={() => removeFromCart(producto.id)}>Remove from Cart</button>
              </div>

              }
            <p>{producto.description}</p>
            <p>🌄Do you ever feel nostalgic about summer? Let everybody know you're all about that sweet summervibes with this sweatshirt🌴🌞</p>
            <p>Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.</p>
            <p>Sweatshirt tends to be smaller than expected, its recommended to take a size bigger!</p>
          </div>
        </div>
    )
}
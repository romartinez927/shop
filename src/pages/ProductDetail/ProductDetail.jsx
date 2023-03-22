import { useContext } from "react"
import { cartContext } from "../../storage/context"


export default function ProductDetail({producto}) {
    const { 
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart 
          } = useContext(cartContext)

    const quantity = getItemQuantity(producto.id)

    return (
        <div className='d-flex row justify-content-center'>
          <img src={`.${producto.img}`} className='tarjetita col-4' alt={producto.nombre}/>
          <div className='d-flex flex-column col-4 gap-2'>
            <h1>{producto.nombre}</h1>
            <p>${producto.precio}</p>
            { quantity === 0 ? (
              <button className="btn-light" onClick={() => increaseCartQuantity(producto.id)}>Add to Cart</button>
            ) :
              <div>
                <div className="d-flex gap-3">
                  <button className="btn-light" onClick={() => decreaseCartQuantity(producto.id)}>-</button>
                  <span>{quantity}</span>
                  <button className="btn-light" onClick={() => increaseCartQuantity(producto.id)}>+</button>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(producto.id)}>Remove</button>
              </div>

              }
            <p>{producto.description}</p>
          </div>
        </div>
    )
}
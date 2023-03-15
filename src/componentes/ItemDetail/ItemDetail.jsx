import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../storage/context"


export default function ItemDetail({producto}) {
    const { addToCart } = useContext(cartContext)

    function handleAddToCart(cantidad) {
        const productoAndCantidad = { ...producto, cantidad: cantidad}
        addToCart(productoAndCantidad)
    }

    return (
        <div className='d-flex row justify-content-center'>
          <img src={`.${producto.img}`} className='tarjetita col-4' alt={producto.nombre}/>
          <div className='d-flex flex-column col-4 gap-2'>
            <p>RAMMORSMERCH</p>
            <h1>{producto.nombre}</h1>
            <p>${producto.precio}</p>
            <p>Size guide</p>
            <div>
              <label for="size">Size</label>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <ItemCount onAddToCart={handleAddToCart}/>
            <p>{producto.description}</p>
          </div>
        </div>
    )
}
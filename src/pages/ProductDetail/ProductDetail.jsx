import ItemCount from "../../componentes/ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../storage/context"


export default function ProductDetail({producto}) {
    const { addToCart, cart } = useContext(cartContext)

    function handleAddToCart(cantidad) {
        const productoAndCantidad = { ...producto, cantidad: cantidad}
        // aca deberia hacer una funcion en la que me fije si está en el carrito
        //de no estar en el carrito, hacer esto
        addToCart(productoAndCantidad)
        //de estar en el carrito, hacer otra
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
            <ItemCount cant={producto.cantidad} onAddToCart={handleAddToCart}/>
            <p>{producto.description}</p>
          </div>
        </div>
    )
}
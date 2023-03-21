import { useState, useContext } from 'react'
import { cartContext } from '../../storage/context'

function ItemCount({onAddToCart, cant}) {
    const { cart } = useContext(cartContext)
    const [cantidad, setCantidad] = useState(Number(cant) || 1)

    console.log(cant)
    // function isInCart(producto) {
    //     let product = cart.filter(item => item.id === producto.id)
    //     setCantidad(product[0].cantidad)
    //     return product
    // }

    function handleAdd() {
        setCantidad(cantidad + 1)
    }

    function handleSubstract() {
        setCantidad(cantidad - 1)
    }

  return (
      <div className="d-flex justify-content-evenly pt-4">
          <div className="col-3 p-1 d-flex justify-content-center my-auto btn-contador-container">
              <button className="btn-contador" disabled={cantidad === 0} onClick={handleSubstract}>-</button>
              <p className="px-3 my-auto">{cantidad}</p>
              <button className="btn-contador" onClick={handleAdd}>+</button>
          </div>
          <div className="col-7">
              <button className="btn-agregar-carrito p-2 col-12" disabled={cantidad === 0} onClick={() => onAddToCart(cantidad)}>
                  Agregar al carrito
              </button>
          </div>
      </div>
  )
}

export default ItemCount
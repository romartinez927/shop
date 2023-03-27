import React, { useContext } from 'react'
import { cartContext } from '../../storage/context'
import storeItems from "../../database/products.json"

function CartItem({ id, quantity }) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useContext(cartContext)
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="col-12 py-3" key={item.id}>
            <div className="d-flex justify-content-around align-items-center">
                <img src={item.img} className="tarjetita-img" alt={item.nombre} />
                <div className="d-flex flex-column">
                    <h5 className="tarjetita-nombre">{item.nombre}</h5>
                    <p className="tarjetita-text price">${item.precio}</p>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-4 quantity-container mb-3'>
                    <button className="quantity-btn fs-4" onClick={() => decreaseCartQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button className="quantity-btn fs-4" onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(id)}>X</button>
                <p>${item.precio * quantity}</p>
            </div>
        </div>
    )
}

export default CartItem
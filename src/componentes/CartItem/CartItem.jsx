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
                <div className='d-flex gap-2'>
                    <button className="btn-light" onClick={() => decreaseCartQuantity(id)}>-</button>
                    <p>{quantity}</p>
                    <button className="btn-light" onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <div>
                    <button onClick={() => removeFromCart(id)}>X</button>
                </div>
                <div>
                    <p>${item.precio * quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
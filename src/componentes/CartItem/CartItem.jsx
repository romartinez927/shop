import React, { useContext } from 'react'
import { cartContext } from '../../storage/context'
import storeItems from "../../database/products.json"

function CartItem({ id, quantity }) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useContext(cartContext)
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="col-12 py-3" key={item.id}>
            <div className="d-flex row align-items-center justify-content-evenly mx-1">
                <div className="col-5 d-flex">
                    <img src={item.img} className="tarjetita-img" alt={item.nombre} />
                    <div className='d-flex flex-column justify-content-center px-3'>
                        <h5 className="tarjetita-nombre">{item.nombre}</h5>
                        <p className="tarjetita-text price">${item.precio}</p>
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center gap-3 mb-3'>
                    <div className='d-flex gap-4 quantity-container align-items-center justify-content-center'>
                        <button className="quantity-btn fs-4" onClick={() => decreaseCartQuantity(id)}>-</button>
                        <span>{quantity}</span>
                        <button className="quantity-btn fs-4" onClick={() => increaseCartQuantity(id)}>+</button>
                    </div> 
                    <i className="fa-regular fa-trash-can px-3" onClick={() => removeFromCart(id)}></i>
                </div>
                <p className="col-1 text-center px-4">${item.precio * quantity}</p>
            </div>
        </div>
    )
}

export default CartItem
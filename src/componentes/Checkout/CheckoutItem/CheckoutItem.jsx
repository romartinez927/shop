import React from 'react'
import storeItems from "../../../database/products.json"

function CheckoutItem({ id, quantity  }) {
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="col-12 py-3 d-flex" key={item.id}>
            <div className="d-flex px-5">
                <img src={item.img} style={{maxWidth: "4em"}} alt={item.nombre} />
                <div className='d-flex flex-column justify-content-center px-3'>
                    <p className="my-0 fw-medium">{item.nombre}</p>
                    <p className="my-0">{quantity} u.</p>
                </div>
                <p className="my-auto px-5 fw-medium">${item.precio * quantity}</p>
            </div>
        </div>
    )
}

export default CheckoutItem
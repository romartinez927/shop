import React from 'react'
import { cartContext } from '../../storage/context'
import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import "./Cart.css"
import CartItem from '../../componentes/CartItem/CartItem'
import storeItems from "../../database/products.json"

function Cart() {
    const { cart, setCart } = useContext(cartContext)

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("productosCarrito"))
        if (carrito) {
            setCart(carrito)
        }
    }, [])

    return (
        <>
            <div className='d-flex align-items-center justify-content-between px-5 pt-5'>
                <h2 className='fw-bold'>Your Cart</h2>
                <Link to="/collection/all">
                    <p>Continue shopping</p>
                </Link>
            </div>
            <div className='row px-5 pt-4 border-bottom mx-5'>
                <p className='col-7'>Product</p>
                <p className='col-3 px-5'>Quantity</p>
                <p className='col-2 text-end'>Total</p>
            </div>
            {cart.length > 0 ? (cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))) :
                (
                <div className="p-3">
                    <h5>Tu carrito se encuentra vacío :c</h5>
                    <div>
                        <Link className="btn btn-light" to="/">Ir al inicio</Link>
                    </div>
                </div>
                )}
            <div className='text-end p-5'>
                <p>Total: ${cart.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.precio || 0) * cartItem.quantity
                }, 0)}</p>
                <Link to="/checkout" className='item-list-btn text-light'>Check out</Link>
            </div>
        </>
    )
}

export default Cart
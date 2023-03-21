import React from 'react'
import { cartContext } from '../../storage/context'
import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import "./Cart.css"

function Cart() {
    const {cart, setCart, getTotalPriceInCart, removeItem} = useContext(cartContext)

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("productosCarrito"))
        if (carrito) {
            setCart(carrito)
            console.log(carrito)
        }
    }, [])

  return (
        <>
            <div className='d-flex align-items-center justify-content-between px-5 pt-5'>
                <h1>Your Cart</h1>
                <Link to="/collection/all">
                    <p>Continue shopping</p>
                </Link>
            </div>
            <div className='d-flex justify-content-between px-5 pt-4 border-bottom'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className="container-fluid g-4 justify-content-around text-center py-3">
                {cart.length > 0 ? (
                    cart.map((producto) => {
                        return (
                                <div className="col-12 py-3" key={producto.id}>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <img src={producto.img} className="tarjetita-img" alt={producto.nombre}/> 
                                        <div className="d-flex flex-column">
                                            <h5 className="tarjetita-nombre">{producto.nombre}</h5>
                                            <p className="tarjetita-text price">${producto.precio}</p>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <p>-</p>
                                            <p>{producto.cantidad}</p>
                                            <p>+</p>
                                        </div>
                                        <div>
                                            <button onClick={() => removeItem(producto)}>X</button>
                                        </div>
                                        <div>
                                            <p>${producto.precio * producto.cantidad}</p>
                                        </div>
                                    </div>
                                </div>
                    )
                }
                )) 
                : ( 
                    <div className="p-3">
                        <h5>Tu carrito se encuentra vacío :c</h5>
                        <div>
                            <Link className="btn btn-light" to="/">Ir al inicio</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className='text-end p-5'>
                <p>Total: ${getTotalPriceInCart()}</p>
                <button>Check out</button>
            </div>
        </>
  )
}

export default Cart
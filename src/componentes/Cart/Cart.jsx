import React from 'react'
import { cartContext } from '../../storage/context'
import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom'

function Cart() {
    const {cart, setCart} = useContext(cartContext)

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("productosEnCarrito"))
        if (carrito) {
            setCart(carrito)
        }
    }, [])

  return (
        <>
            <div className="container-fluid g-4 justify-content-around text-center py-3">
                {cart.length > 0 ? (
                    cart.map((producto) => {
                        return (
                                <div className="col-12 py-3" key={producto.id}>
                                    <div className="tarjetita d-flex justify-content-evenly align-items-center">
                                        <img src={producto.img} className="tarjetita-img" alt={producto.nombre}/> 
                                        <div className="d-flex flex-column">
                                            <p>Título</p>
                                            <h5 className="tarjetita-nombre">{producto.nombre}</h5>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p>Precio</p>
                                            <h5 className="tarjetita-text price">${producto.precio}</h5>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p>Cantidad</p>
                                            <p>{producto.cantidad}</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p>Subtotal</p>
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
        </>
  )
}

export default Cart
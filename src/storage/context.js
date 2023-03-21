import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({ cart: [] })

function CartProvider(props) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("productosCarrito")
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })

    useEffect(() => {
        localStorage.setItem("productosCarrito", JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id)
        let newCart = cart.map((item) => item)
        console.log(item)

        if (index !== -1) {
            console.log("producto agregado al carrito")
        } else {
            newCart.push(item)
            setCart(newCart)
        }
    }

    // function actualizarCantidad(producto) {
    //     let item = cart.filter(item => item.id == producto.id)
    //     return item.cantidad
    // }

    function removeItem(producto) {
        const results = cart.filter(item => item.id !== producto.id)
        setCart(results)
    }

    function getTotalPriceInCart() {
        const total = cart.reduce ((acc,el) => acc + el.precio * el.cantidad, 0)
        return total
    }

    return (
        <cartContext.Provider value={{cart, addToCart, setCart, getTotalPriceInCart, removeItem}}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({ cart: [] })

function CartProvider(props) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("productosEnCarrito")
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })

    useEffect(() => {
        localStorage.setItem("productosEnCarrito", JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id)
        let newCart = cart.map((item) => item)

        if (index == -1) {
            newCart.push(item)
            setCart(newCart)
        }
    }

    return (
        <cartContext.Provider value={{cart, addToCart, setCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }
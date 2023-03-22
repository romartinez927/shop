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

    function getItemQuantity(id) {
        return cart.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id) {
        setCart(currentItems => {
            if (currentItems.find(items => items.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        setCart(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCart(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cart.reduce((quantity, item) => item.quantity + quantity, 0)

    return (
        <cartContext.Provider 
            value={{
                cart, 
                setCart, 
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart, 
                getItemQuantity,
                cartQuantity
                }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }
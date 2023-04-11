import CheckoutLabel from '../../componentes/Checkout/FloatingLabel/CheckoutLabel';
import "./CheckOut.css"
import Form from 'react-bootstrap/Form';
import { useContext, useEffect } from 'react';
import { cartContext } from '../../storage/context';
import CartItem from '../../componentes/CartItem/CartItem';
import storeItems from "../../database/products.json"
import CheckoutItem from '../../componentes/Checkout/CheckoutItem/CheckoutItem';
import CheckoutShipping from '../../componentes/Checkout/CheckoutShipping/CheckoutShipping';
import CheckoutInformation from '../../componentes/Checkout/CheckoutInformation/CheckoutInformation';

function CheckOut() {
  const { cart, setCart } = useContext(cartContext)

  useEffect(() => {
      const carrito = JSON.parse(localStorage.getItem("productosCarrito"))
      if (carrito) {
          setCart(carrito)
      }
  }, [])

  return (
    <div>
      <div className="bg-light pt-5 pb-3 px-5" style={{backgroundImage: "url(https://cdn.shopify.com/s/files/1/0554/4325/9479/files/pexels-no-name-66997_2000x.png?v=1642599128)", backgroundPosition:"50% 50%", backgroundSize: "cover"}}>
        <p className="pt-3 text-white fs-4">rammorsmerch</p>
      </div>
      <div className='row'>
        {/* <CheckoutInformation /> */}
        <CheckoutShipping />
        <div className='col-5'>
          {cart.length > 0 && (cart.map((item) => (
              <CheckoutItem key={item.id} {...item}/>
            ))) 
          }
          <div className='px-5'>
            <p>Subtotal ${cart.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.precio || 0) * cartItem.quantity
                }, 0)}</p>
            <p>Shipping: $1000</p>
            <h5>Total: </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
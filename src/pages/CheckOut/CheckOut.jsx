import CheckoutLabel from '../../componentes/FloatingLabel/CheckoutLabel';
import "./CheckOut.css"
import Form from 'react-bootstrap/Form';

function CheckOut() {
  return (
    <div>
      <div className="bg-light pt-5 pb-3 px-5" style={{backgroundImage: "url(https://cdn.shopify.com/s/files/1/0554/4325/9479/files/pexels-no-name-66997_2000x.png?v=1642599128)", backgroundPosition:"50% 50%", backgroundSize: "cover"}}>
        <p className="pt-3 text-white fs-4">rammorsmerch</p>
      </div>
      <div className='row'>
        <div className='col-7 bg-light checkout-container'>
            <p className='text-black mb-0'>Contact information</p>
            <CheckoutLabel id="email" type="text" label="Email or mobile phone number" />
            <Form.Check 
              type="checkbox"
              className="checkout-checkbox px-4"
              id="checkout-checkbox"
              label="Email me with news and offers"
            />
            <p className='text-black mb-0 pt-4'>Shipping address</p>
            <div className='row'>
              <CheckoutLabel id="firstName" type="text" label="First Name" className="col-6"/>
              <CheckoutLabel id="lastName" type="text" label="Last Name" className="col-6"/>
            </div>
              <CheckoutLabel id="adress" type="text" label="Adress" />
            <div className='row'>
              <CheckoutLabel id="postal" type="text" label="Postal code" className="col-4"/>
              <CheckoutLabel id="email"  type="text" label="City" className="col-4"/>
              <CheckoutLabel id="email"  type="text" label="Province" className="col-4"/>
            </div>
            <CheckoutLabel id="phone"  type="text" label="Phone" />
          <div className='d-flex justify-content-between pt-2'>
            <button className='btn btn-light'>Return to cart</button>
            <button className='btn btn-dark checkout-btn'>Continue to shipping</button>
          </div>
        </div>
        <div className='col-6'></div>
      </div>

    </div>
  )
}

export default CheckOut
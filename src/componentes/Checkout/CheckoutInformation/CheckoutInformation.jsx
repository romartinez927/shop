import React from 'react'
import { Form } from 'react-bootstrap'
import CheckoutLabel from '../FloatingLabel/CheckoutLabel'

function CheckoutInformation() {
    return (
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
                <CheckoutLabel id="firstName" type="text" label="First Name" className="col-6" />
                <CheckoutLabel id="lastName" type="text" label="Last Name" className="col-6" />
            </div>
            <CheckoutLabel id="adress" type="text" label="Adress" />
            <div className='row'>
                <CheckoutLabel id="postal" type="text" label="Postal code" className="col-4" />
                <CheckoutLabel id="email" type="text" label="City" className="col-4" />
                <CheckoutLabel id="email" type="text" label="Province" className="col-4" />
            </div>
            <CheckoutLabel id="phone" type="text" label="Phone" />
            <div className='d-flex justify-content-between pt-2'>
                <button className='btn btn-light'>Return to cart</button>
                <button className='btn btn-dark checkout-btn'>Continue to shipping</button>
            </div>
            /para pasar a la siguiente parte, puedo hacer una funcion que me muestre un componente u otro
        </div>
    )
}

export default CheckoutInformation
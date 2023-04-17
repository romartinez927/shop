import React from 'react'

function CheckoutShipping() {
  return (
    <div className='col-7 bg-light checkout-container'>
        <div className='d-flex flex-column'>
            <div className="d-flex justify-content-between">
                <p>Contact</p>
                <p>@gmail.com</p>
                <p>Change</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Ship to</p>
                <p>Calle 1234</p>
                <p>Change</p>
            </div>
        </div>
        <h5>Shipping method</h5>
        <div className="d-flex justify-content-between align-items-center px-3 py-4 bg-success">
            <p>Worldwide Flat Rate</p>
            <p>€15.57</p>
        </div>
        <div className='d-flex justify-content-between pt-5'>
            <button className='btn btn-light checkout-btn'>Return to information</button>
            <button className='btn btn-dark checkout-btn'>Continue to payment</button>
        </div>
    </div>
  )
}

export default CheckoutShipping
import React from 'react'

function CheckoutShipping() {
  return (
    <div className='col-7 bg-light checkout-container'>
        <div>
            <div className="d-flex">
                <p>Contact</p>
                <p>@gmail.com</p>
                <p>Change</p>
            </div>
            <div className="d-flex">
                <p>Ship to</p>
                <p>Calle 1234</p>
                <p>Change</p>
            </div>
        </div>
        <h5>Shipping method</h5>
        <div className="d-flex">
            <p>Worldwide Flat Rate</p>
            <p>€15.57</p>
        </div>
        <div>
            <button>Return to information</button>
            <button>Continue to payment</button>
        </div>
    </div>
  )
}

export default CheckoutShipping
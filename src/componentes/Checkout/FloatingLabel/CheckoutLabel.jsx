import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./CheckoutLabel.css"

function CheckoutLabel(props) {
  return (
    <div className={`py-2 ${props.className}`} >
        <FloatingLabel controlId={props.id} label={props.label} className='text-secondary checkout-label'>
            <Form.Control type={props.type} placeholder={props.id} className="checkout-formcontrol" />
        </FloatingLabel>
    </div>
  )
}

export default CheckoutLabel
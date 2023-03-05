export default function ItemDetail(props) {
    return (
        <div>
          <h1>Featured.</h1>
          <div className='d-flex'>
            <img src="./card.jpeg" className='tarjetita'/>
            <div className='d-flex flex-column'>
              <p>RAMMORSMERCH</p>
              <h1>Summer Nostalgia Eco Sweatshirt White</h1>
              <p>€45,99 EUR</p>
              <p>size</p>
              <div>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>2XL</button>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
    )
}
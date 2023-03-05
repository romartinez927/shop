import ItemDetail from '../ItemDetail/ItemDetail';
import { useFetch } from '../../useFetch';
import { Link } from 'react-router-dom';

export default function ItemListContainer() {
  const { data, loading } = useFetch("../../productos.json")

    return (
      <main>
        <div className='row'>
          <img src="./hands.png" alt="hands"/>
        </div>
        <section>
          <div className='text-center py-5'>
            <h1>Featured.</h1>
          </div>
          {data && <ItemDetail producto={data[0]}/> }
        </section>
        <section>
          <div className='text-center pt-5'>
            <h1>All collections.</h1>
            <p>summer memories and warm nostalgia</p>
          </div>
          <div>
            <h4>summer nostalgia collection.</h4>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data.filter(producto => producto.collection === "nostalgia").map((producto) => {
                      return (
                          <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                              <Link to={`../products/${producto.id}`} className='d-flex flex-column card'>
                                  <img src={`.${producto.img}`} alt={producto.nombre}/>
                                  <h5>{producto.nombre}</h5>
                                  <p>${producto.precio}</p>
                              </Link>
                          </div>
                      )
                  })
                }
            </div>
            <Link to="/collection/nostalgia" className='text-center py-5'>
              <button className='btn btn-light'>View all</button>
            </Link>
          </div>
          <div>
            <h4>basic collection.</h4>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data.filter(producto => producto.collection === "basic").map((producto) => {
                      return (
                          <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                              <Link to={`../products/${producto.id}`} className='d-flex flex-column card'>
                                  <img src={`.${producto.img}`} alt={producto.nombre}/>
                                  <h5>{producto.nombre}</h5>
                                  <p>${producto.precio}</p>
                              </Link>
                          </div>
                      )
                  })
                }
            </div>
            <Link to="/collection/basic" className='text-center py-5'>
              <button className='btn btn-light'>View all</button>
            </Link>
          </div>
          <div>
            <h4>summer vibes collection.</h4>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data.filter(producto => producto.collection === "summer").map((producto) => {
                      return (
                          <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                              <Link to={`../products/${producto.id}`} className='d-flex flex-column card'>
                                  <img src={`.${producto.img}`} alt={producto.nombre}/>
                                  <h5>{producto.nombre}</h5>
                                  <p>${producto.precio}</p>
                              </Link>
                          </div>
                      )
                  })
                }
            </div>
            <Link to="/collection/summer" className='text-center py-5'>
              <button className='btn btn-light'>View all</button>
            </Link>
          </div>
        </section>
      </main> 
    )
}
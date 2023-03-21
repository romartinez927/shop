import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../functions/useFetch'

function ItemList(props) {
    const { nombre, collection } = props
    const { data, loading } = useFetch("../../productos.json")

  return (
        <div>
            <h4 className='px-5 py-3'>{nombre} collection.</h4>
            <div className='d-flex flex-wrap gap-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data
                  .filter(producto => producto.collection === `${collection}`)
                  .filter(producto => producto.id < 13)
                  .map((producto) => {
                      return (
                          <div key={producto.id} id={producto.id}>
                              <Link to={`../products/${producto.id}`} className='d-flex flex-column card card-collection'>
                                  <img src={`.${producto.img}`} alt={producto.nombre}/>
                                  <h5>{producto.nombre}</h5>
                                  <p>${producto.precio}</p>
                              </Link>
                          </div>
                      )
                  })
                }
            </div>
            <Link to={`/collection/${collection}`} className='d-flex justify-content-center py-3'>
              <button className='btn btn-light'>View all</button>
            </Link>
          </div>
  )
}

export default ItemList
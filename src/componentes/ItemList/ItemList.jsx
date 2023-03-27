import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../functions/useFetch'
import "./ItemList.css"

function ItemList(props) {
    const { nombre, collection } = props
    const { data, loading } = useFetch("../../productos.json")

  return (
        <div>
            <h5 className='px-5 py-3 fw-bold'>{nombre} collection.</h5>
            <div className='d-flex flex-wrap gap-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data
                  .filter(producto => producto.collection === `${collection}`)
                  .filter(producto => producto.id < 13)
                  .map((producto) => {
                      return (
                          <div key={producto.id} id={producto.id}>
                              <Link to={`../products/${producto.id}`} className='d-flex flex-column card-collection item-list-card'>
                                  <img className="item-list-img" src={`.${producto.img}`} alt={producto.nombre}/>
                                  <h5 className='px-3 pt-2 fw-bold'>{producto.nombre}</h5>
                                  <p className='px-3'>${producto.precio}</p>
                              </Link>
                          </div>
                      )
                  })
                }
            </div>
            <Link to={`/collection/${collection}`} className='d-flex justify-content-center item-list-link my-2'>
              <p className='item-list-btn'>View all</p>
            </Link>
          </div>
  )
}

export default ItemList
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../useFetch';

export default function ItemListContainer() {
  const { data, loading } = useFetch("../../productos.json")

    return (
      <main>
        <div className='row'>
          <img src="./hands.png" alt="hands"/>
        </div>
        <ItemDetail />
        <section>
          <div className='text-center'>
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
                          <img src={producto.img}/>
                          <h5>{producto.nombre}</h5>
                          <p>${producto.precio}</p>
                      </div>
                      )
                  })
                }
            </div>
            <button>View all</button>
          </div>
          <div>
            <h4>basic collection.</h4>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data.filter(producto => producto.collection === "basic").map((producto) => {
                      return (
                          <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                          <img src={producto.img}/>
                          <h5>{producto.nombre}</h5>
                          <p>${producto.precio}</p>
                      </div>
                      )
                  })
                }
            </div>
            <button>View all</button>
          </div>
          <div>
            <h4>summer vibes collection.</h4>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                  data && data.filter(producto => producto.collection === "summer").map((producto) => {
                      return (
                          <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                          <img src={producto.img}/>
                          <h5>{producto.nombre}</h5>
                          <p>${producto.precio}</p>
                      </div>
                      )
                  })
                }
            </div>
            <button>View all</button>
          </div>
        </section>
      </main> 
    )
}
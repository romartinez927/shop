import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemCollection.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFetch } from "../../useFetch";

export default function ItemsCollection() {
    const { data, loading } = useFetch("../../productos.json")
    const { collectionId } = useParams()

    return (
        <div>
            <div className="bg-light d-flex p-5 justify-content-between align-items-center">
                <div>
                    <h4>{collectionId} collection</h4>
                </div>
                <div>
                    <img className="item-collection-img" alt="florecitas" src="../imagenes/aesthetic-spring-14.jpg"/>
                </div>

            </div>
            <div className="d-flex gap-3">
                <p>Filter:</p>
                <p>Product type</p>
                <form>
                    <select name="size" id="size">
                        <option value="size">Size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <select name="sortBy" id="sortBy">
                        <option value="featured">Featured</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option>
                        <option value="price-low">Price: low to high</option>
                        <option value="price-high">Price: high to low</option>
                    </select>
                    <label for="sortBy">Sort by</label>
                    <select name="sortBy" id="sortBy">
                        <option value="featured">Featured</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option>
                        <option value="price-low">Price: low to high</option>
                        <option value="price-high">Price: high to low</option>
                    </select>
                </form>
                <p>
                    {data && data.filter(producto => producto.collection === collectionId).length + " products"}
                </p>
            </div>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                    data && data.filter(producto => producto.collection === collectionId).map((producto) => {
                        return (
                            <div className='d-flex flex-column card' key={producto.id} id={producto.id}>
                            <img src={`.${producto.img}`}/>
                            <h5>{producto.nombre}</h5>
                            <p>${producto.precio}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
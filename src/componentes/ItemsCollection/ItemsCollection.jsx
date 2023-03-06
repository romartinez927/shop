import { useParams, Link } from "react-router-dom"
import "./ItemCollection.css"
import { useFetch } from "../../functions/useFetch";
import { useEffect, useState } from "react";
import { filterByLowerPrice, filterByHigherPrice, sortByAZ, sortByZA } from "../../functions/functions";

export default function ItemsCollection() {
    let { data, loading } = useFetch("../../productos.json")
    const { collectionId } = useParams()
    const [ filterParam, setFilterParam ] = useState("")
    const [ available, setAvailable ] = useState("")
    const [ color, setColor ] = useState("")

    let colleccion = collectionId.charAt(0).toUpperCase().concat(collectionId.substring(1, collectionId.length))

    if (data) {
        available === "out-stock" && (data = data.filter((producto) => producto.disponible === false))
        available === "stock" && (data = data.filter((producto) => producto.disponible === true))
    }

    if (data) {
        color === "black" && (data = data.filter((producto) => producto.color === "black"))
        color === "white" && (data = data.filter((producto) => producto.color === "white"))
        color === "blue" && (data = data.filter((producto) => producto.color === "blue"))
        color === "grey" && (data = data.filter((producto) => producto.color === "grey"))
    }
    

    if (filterParam === "price-low") {
        filterByLowerPrice(data)
    } else if (filterParam === "price-high") {
        filterByHigherPrice(data)
    } else if (filterParam === "az") {
        sortByAZ(data)
    } else if (filterParam === "za") {
        sortByZA(data)
    }

    return (
        <div>
            <div className="bg-light d-flex justify-content-around py-4 align-items-center">
                <div>
                    <h1>{colleccion} Collection</h1>
                </div>
                <div>
                    <img className="item-collection-img" alt="florecitas" src="../hanekawa.png"/>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center justify-content-center py-4">
                <p className="my-auto">Filter:</p>
                <div className="d-flex gap-5">
                    <select name="productType" id="productType">
                        <option value="type">Product Type</option>
                        <option value="t-shirt">Remera</option>
                        <option value="short">Short</option>
                        <option value="jean">Jean</option>
                    </select>
                    <select name="colorType" id="colorType" onChange={(e) => setColor(e.target.value)}>
                        <option value="color">All Colors</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="grey">Grey</option>
                        <option value="blue">Blue</option>
                    </select>
                    <select name="avaliabity" id="avaliabity" onChange={(e) => setAvailable(e.target.value)}>
                        <option value="availability">Availability</option>
                        <option value="stock">In stock</option>
                        <option value="out-stock">Out of stock</option>
                    </select>
                    <label htmlFor="sortBy">Sort by:</label>
                    <select name="sortBy" id="sortBy" onChange={(e) => setFilterParam(e.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option> 
                        <option value="price-low">Price: low to high</option>
                        <option value="price-high">Price: high to low</option>
                    </select>
                </div>
                <p className="my-auto">
                    {data && data.filter(producto => producto.collection === collectionId).length + " products"}
                </p>
            </div>
            <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center'>
                {loading && <li>Loading</li>}
                {
                    data && data.filter(producto => producto.collection === collectionId).map((producto) => {
                        return (
                            <div key={producto.id} id={producto.id}>
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
        </div>
    )
}
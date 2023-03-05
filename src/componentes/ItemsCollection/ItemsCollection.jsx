import { useParams } from "react-router-dom"
import "./ItemCollection.css"
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";
import FilterButton from "../FilterButton/FilterButton";
import { filterByLowerPrice, filterByHigherPrice } from "../../functions";

export default function ItemsCollection() {
    const { data, loading } = useFetch("../../productos.json")
    const { collectionId } = useParams()

    let colleccion = collectionId.charAt(0).toUpperCase().concat(collectionId.substring(1, collectionId.length))


    //SORT BY A-Z
    // const az = () => {
    // if (data) {
    //         data.sort(function (a, b) {
    //             if (a.nombre > b.nombre) {
    //             return 1;
    //             }
    //             if (a.nombre < b.nombre) {
    //             return -1;
    //             }
    //             // a must be equal to b
    //             return 0;
    //         });
    //     }
    // }
    

    // SORT BY Z-A
        // const za = () => {
        //     if (data) {
        //         data.sort(function (a, b) {
        //             if (a.nombre < b.nombre) {
        //               return 1;
        //             }
        //             if (a.nombre > b.nombre) {
        //               return -1;
        //             }
        //             // a must be equal to b
        //             return 0;
        //           });
        //     }
        // }


    // SORT BY LOW TO HIGH
    //     if (data) {
    //     data.sort(function (a, b) {
    //         if (a.precio > b.precio) {
    //           return 1;
    //         }
    //         if (a.precio < b.precio) {
    //           return -1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //       });
    // }

        // SORT BY HIGH TO LOW
        // if (data) {
        //     data.sort(function (a, b) {
        //         if (a.precio < b.precio) {
        //           return 1;
        //         }
        //         if (a.precio > b.precio) {
        //           return -1;
        //         }
        //         // a must be equal to b
        //         return 0;
        //       });
        // }

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
                        <option value="t-shirt">T-shirt</option>
                        <option value="short">Short</option>
                        <option value="jean">Jean</option>
                    </select>
                    <select name="size" id="size">
                        <option value="size">Size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <select name="avaliabity" id="avaliabity">
                        <option value="availability">Availability</option>
                        <option value="stock">In stock</option>
                        <option value="out-stock">Out of stock</option>
                    </select>
                    <label htmlFor="sortBy">Sort by:</label>
                    <select name="sortBy" id="sortBy">
                        <option value="featured">Featured</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option> 
                        <option value="price-low">Price: low to high</option>
                        <option value="price-high" onClick={() => filterByHigherPrice(data)}>Price: high to low</option>
                    </select>
                </div>
                <div>
                    <FilterButton name="in" value="In stock"/>
                    <FilterButton name="out" value="Out of stock"/>
                </div>
                <div>
                    <FilterButton name="black" onClick={() => filterByHigherPrice(data)} value="Black"/>
                    <FilterButton name="white" value="White"/>
                    <FilterButton name="grey" value="Grey"/>
                    <FilterButton name="blue" value="Blue"/>
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
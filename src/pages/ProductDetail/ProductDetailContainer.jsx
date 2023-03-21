import { useParams } from "react-router-dom"
import { useFetch } from "../../functions/useFetch"
import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"


function ProductDetailContainer() {
    const { data, loading } = useFetch("../../productos.json")
    const { productId } = useParams()
    const [producto, setProducto] = useState("")

    useEffect(() => {
        if(data) {
            setProducto(data.find((data) => data.id === Number(productId)))
        }
        console.log("esperando data")
    }, [loading])

    return (
        <div className="pt-5">
            {loading && <p>Loading</p>}
            <ProductDetail producto={producto}/>
        </div>
    )
}

export default ProductDetailContainer
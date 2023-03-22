import { useParams } from "react-router-dom"
import { useFetch } from "../../functions/useFetch"
import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import storeItems from "../../database/products.json"

function ProductDetailContainer() {
    const { productId } = useParams()
    const [producto, setProducto] = useState("")

    useEffect(() => {
        storeItems && setProducto(storeItems.find((data) => data.id === Number(productId)))
    }, [])

    return (
        <div className="pt-5">
            <ProductDetail producto={producto}/>
        </div>
    )
}

export default ProductDetailContainer
import { useParams } from "react-router-dom"
import { useFetch } from "../../useFetch"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer() {
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
            <ItemDetail producto={producto}/>
        </div>
    )
}
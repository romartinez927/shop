import ItemList from '../../componentes/ItemList/ItemList';
import ProductDetail  from '../ProductDetail/ProductDetail';
import storeItems from "../../database/products.json"

function Home() {
    return (
        <main>
            <div className='row'>
                <img src="./inicio.png" alt="inicio" />
            </div>
            <section>
                <div className='text-center py-5'>
                    <h2 className='fw-bold'>Featured.</h2>
                </div>
                {storeItems && <ProductDetail producto={storeItems[8]} />}
            </section>
            <section>
                <div className='text-center pt-5'>
                    <h2 className='fw-bold'>All collections.</h2>
                    <p>summer memories and warm nostalgia</p>
                </div>
                <ItemList collection="nostalgia" nombre="summer nostalgia" />
                <ItemList collection="basic" nombre="basic" />
                <ItemList collection="summer" nombre="summer vibes" />
            </section>
        </main>
    )
}

export default Home
import { useFetch } from '../../functions/useFetch';
import ItemList from '../../componentes/ItemList/ItemList';
import ProductDetail from '../ProductDetail/ProductDetail';

function Home() {
    const { data, loading } = useFetch("../../productos.json")

    return (
        <main>
            <div className='row'>
                <img src="./hands.png" alt="hands" />
            </div>
            <section>
                <div className='text-center py-5'>
                    <h1>Featured.</h1>
                </div>
                {data && <ProductDetail producto={data[0]} />}
            </section>
            <section>
                <div className='text-center pt-5'>
                    <h1>All collections.</h1>
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
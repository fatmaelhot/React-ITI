import { useEffect, useState } from 'react';
import ProductsList from '../productsList/productsList'
import Loader from '../../components/loader/loader';

function Home(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setProducts([res])
            setLoading(false)
        })
    }, [])

    if (loading) {
        return(
        <div>
            <Loader></Loader>
        </div>);
    }

    
    return(
        <div>
            <ProductsList products={products}></ProductsList>
        </div>
    )
}

export default Home;
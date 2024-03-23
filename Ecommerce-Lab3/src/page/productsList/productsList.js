import ProductCard from '../../components/productCard/productCard';


function ProductsList(props){
    const products = props.products[0].products;
    return(
        <div className="d-flex flex-wrap">
            {products.map((product, index) => {
                return(
                    <ProductCard product = {product} key={index} id={index+1}/>
                );
            })}
        </div>
    );
}

export default ProductsList;
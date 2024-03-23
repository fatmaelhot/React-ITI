import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../../components/loader/loader';


function ProductDetails(props){
    const productID = useParams().productID;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setProduct(res);
            setLoading(false);
        });
    }, [productID]); 

    if (loading) {
        return(
            <div>
                <Loader />
            </div>
        );
    }

    return(
        <div className="container main m-5">
            <div className="row h-100">
                <div className="col border d-flex flex-column h-100 p-0">
                    <div className="h-75 img">
                        <img className="h-100 w-100" src={product.thumbnail} alt=""/>
                    </div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col img">
                                <img className="h-100 w-100" src={product.images[0]} alt=""/>
                            </div>
                            <div className="col img">
                                <img className="h-100 w-100" src={product.images[1]} alt=""/>
                            </div>
                            <div className="col img">
                                <img className="h-100 w-100" src={product.images[2]} alt=""/>
                            </div>
                            <div className="col img">
                                <img className="h-100 w-100" src={product.images[3]} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="py-4 border-top border-bottom">
                        <h2>{product.price.toFixed(2)}$</h2>
                    </div>
                    {
                        product.stock > 0 ?
                        <span id="instock" className="text-white">In Stock</span> : 
                        <span id="outstock" className="text-danger">Out Of Stock</span> 
                    }
                    <br/><br/>
                    <p>More Information</p>
                    <div className="container w-50 ms-2 p-0">
                        <div className="row mx-auto">
                            <div className="col w-50 ">
                                {product.category}
                            </div>
                            <div className="col w-50 ms-3 ">
                                {product.brand}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                        <div className="d-flex align-items-center plusminusbtncntnr graybg">
                            <div className="border-0 graybg h-100 flex-fill d-flex justify-content-center plusminusbtn">
                                <button className="border-0 graybg" ><i className="fas fa-minus"></i></button> 
                            </div>
                            <div className="graybg h-100 d-flex justify-content-center flex-fill">
                                <span className="graybg" id="number">1</span>
                            </div>
                            <div className="border-0 graybg h-100 flex-fill d-flex justify-content-center plusminusbtn">
                                <button className="border-0 graybg" ><i className="fas fa-plus"></i></button> 
                            </div>
                        </div>
                        {
                            product.stock > 0 ?
                            <div className="d-flex flex-column mx-auto">
                                <span>Only <span className=''>{product.stock} Items</span> Left!</span>
                                <span>Don't miss it</span>
                            </div> : null 
                        }
                    </div>
                    <div className="container w-75 ms-2 p-0 mt-3">
                        <div className="row d-flex justify-content-between ">
                            <button className='me-2 bg-success text-white border-0 w-25 mx-auto rounded-3'>Buy Now</button>
                            <button className='bg-success text-white border-0 w-25 mx-auto rounded-3'>Add to Cart</button>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

import './index.css';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function MainPage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios
        .get("https://e8d48d37-0276-4af5-a2eb-672bb44eb1d7.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.log("ERROR : ", error);
        });
    }, []);
    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                            <div className="product-card">
                                <Link className='product-link' to={`/products/${product.id}`}>
                                    <div>
                                        <img className="product-img" src={product.imageUrl} />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                             <span className="product-price">{product.price}원</span>
                                                <div className="product-seller">
                                                    <img className="product-avatar" src="images/icons/avatar.png" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>    
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage;
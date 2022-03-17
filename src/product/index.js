import './index.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
        axios
        .get(`https://e8d48d37-0276-4af5-a2eb-672bb44eb1d7.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data);
        }).catch(function(error){
        console.error(error);
        });
    }, []);

    if (product === null){
        return <h1>Request product information...</h1>;
    }
    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="description">{product.description}</div>
                <div id="createdAt">2022년 3월 17일</div>
            </div>
        </div>
    )
}
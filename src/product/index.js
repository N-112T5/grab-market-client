import { useParams } from "react-router-dom";

export default function ProductPage(){
    const {id} = useParams();
    
    return <h1>{id} 상품 상세 페이지</h1>;
}
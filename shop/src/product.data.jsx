import { Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
let productData = [
    {
        id : 1,
        title : "pink",
        content : "Born in France",
        price : 120000
    },

    {
        id : 2,
        title : "rose",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 3,
        title : "lemon",
        content : "Born in the States",
        price : 130000
    }
];

// {
//     productData.map(function (a, i){
//         return(
//             <Product className="list" key={i} title={productData[i].title} content={productData[i].content} price={productData[i].price}></Product>
//         )
//     })
// }

function  ProductList({data}){
    return (
        <>
            {
                data.map(function (a, i){
                    return(
                        <Product className="list" key={i} id={a.id} title={a.title} content={a.content} price={a.price}></Product>
                    )
                })
            }
        </>
    )
}

function Product(props){
    return (
        <Col>
            <Link to={"/detail"}>
                <img src={`/image/product${props.id}.png`} width="80%" alt={props.title}/>
            </Link>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}$</p>
        </Col>
    )
}

function ProductDetail(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`/image/product${props.id}.png`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <p>{props.price}$</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export {ProductList, productData, ProductDetail};
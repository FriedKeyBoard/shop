import { Col } from 'react-bootstrap';
let productData = [
    {
        id : 0,
        title : "pink",
        content : "Born in France",
        price : 120000
    },

    {
        id : 1,
        title : "rose",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 2,
        title : "lemon",
        content : "Born in the States",
        price : 130000
    }
];

{
    productData.map(function (a, i){
        return(
            <Product className="list" key={i} title={productData[i].title} content={productData[i].content} price={productData[i].price}></Product>
        )
    })
}

function  ProductList({data}){
    return (
        <>
            {
                data.map(function (a, i){
                    return(
                        <Product className="list" key={i} index={i+1} title={a.title} content={a.content} price={a.price}></Product>
                    )
                })
            }
        </>
    )
}

function Product(props){
    return (
        <Col>
            <img src={`/image/product${props.index}.png`} width="80%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}$</p>
        </Col>
    )
}

export {ProductList, productData};
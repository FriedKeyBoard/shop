import { Col, Nav } from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";

let YellowBtn = styled.button`
  background: ${ props => props.bg};
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};;
  padding: 10px;
`

// let NewBtn = styled.button(YellowBtn)`
// `

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
            <Link to={`/detail/${props.id}`}>
                <img src={`/image/product${props.id}.png`} width="80%" alt={props.title}/>
            </Link>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}$</p>
        </Col>
    )
}

function ProductDetail(props){


    let {id} = useParams();
    let [count , setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    // let productContent = props.tumbler.find(x => x.id === id);
    let [tab, setTab] = useState(0);

    useEffect(()=>{
        setTimeout(function(){
            // if (alert === true){
                setAlert(false);
            // }else {
            //     setAlert(true);
            // }
        }, 2000)
    })

    return(
        <div className="container">
            {/*<YellowBtn bg={"blue"}>button</YellowBtn>*/}
            {/*{count}*/}
            {/*<button onClick={()=>{setCount(count + 1)}}>button</button>*/}
            {
                alert === true
                ? <div className={"alert alert-warning"}>
                    2초내 구매시 할인
                </div>
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`/image/product${props.tumbler[id].id}.png`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4>{props.tumbler[id].title}</h4>
                    <p>{props.tumbler[id].content}</p>
                    <p>{props.tumbler[id].price}$</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}/>
        </div>
    )
}
function TabContent(props){

    if(props.tab === 0){
        return <div>내용0</div>
    } else if (props.tab === 1){
        return <div>내용1</div>
    } else if(props.tab === 2){
        return <div>내용2</div>
    }
}

export {ProductList, productData, ProductDetail};
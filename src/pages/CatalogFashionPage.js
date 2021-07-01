import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap'

import {getProductCosmeticAction} from '../redux/actions/productCosmetic.actions';

import Ribbon from '../components/molecules/Ribbon'
import ProductsArea from '../components/templates/ProductsArea'

function CatalogFashionPage(props) {

    const dispatch = useDispatch()
    const [dataProduct, setDataProduct] = useState([]);

    // Filter state
    const [searchText, setSearchText] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [triggerSortLowestPrice, setTriggerSortLowestPrice] = useState(false)
    const [triggerSortHighestPrice, setTriggerSortHighestPrice] = useState(false)
    const [triggerSortProductName, setTriggerSortProductName] = useState(false)

    let dataProductNew = dataProduct.filter((item)=>item.name.includes(searchText) && item.category.includes(searchCategory))

    function sortLowestPrice(){
        dataProductNew.sort((a,b)=>(a.price - b.price))
    }

    function sortHighestPrice(){
        dataProductNew.sort((a,b)=>(a.price - b.price)).reverse()
    }

    function sortProductName(){
        dataProductNew.sort((a,b)=>{
            if(a.name.toUpperCase() < b.name.toUpperCase()){
                return -1
            } else if (a.name.toUpperCase() > b.name.toUpperCase()){
                return 1
            } else {
                return 0
            }
        })
    }

    if(triggerSortLowestPrice){
        sortLowestPrice()
    } else if(triggerSortHighestPrice){
        sortHighestPrice()
    } else if(triggerSortProductName){
        sortProductName()
    }

    useEffect(() => {
        dispatch(getProductCosmeticAction(setDataProduct))
    }, [dispatch])
    
    return (
        <Container fluid>
            <Ribbon text={"fashion"}/>
            <ProductsArea
                fashion={true} 
                dataProduct={dataProductNew} 
                setItemDetailCosmetic={props.setItemDetailCosmetic}
                setSearchText={setSearchText}
                setSearchCategory={setSearchCategory}
                setTriggerSortLowestPrice={setTriggerSortLowestPrice}
                setTriggerSortHighestPrice={setTriggerSortHighestPrice}
                setTriggerSortProductName={setTriggerSortProductName}
            />
        </Container>
    )
}

export default CatalogFashionPage

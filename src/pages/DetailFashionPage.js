import {React , useState , useEffect} from 'react'
import {Container, Row , Col, Button} from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux';
import {useParams} from "react-router-dom"

import imgNotFoundPotrait from '../assets/images/imgNotFoundPotrait.jpg'
import {getProductFashionAction} from '../redux/actions/productFashion.actions';
import {addCartAction} from '../redux/actions/cart.actions';

import Counter from '../components/molecules/Counter';
import SizeSelection from '../components/molecules/SizeSelection';
import SizeChart from '../components/molecules/SizeChart';
import SkeletonDetailPage from '../skeletons/SkeletonDetailPage';
import PageNotFound from './PageNotFound';

function DetailFashionPage(props) {
    
    let {id} = useParams()
    const dispatch = useDispatch()
    const status = useSelector(state => state.productFashion)
    const [allDataProduct, setAllDataProduct] = useState([]); /* Storing all product data to state */
    let viewProduct = allDataProduct.find((item)=> item.id.toLocaleString() === id) /* Selecting target data for display */
    const [triggerSuccess, setTriggerSuccess] = useState(false) /* Triggering Purchase Message */
    const [size, setSize] = useState("[]")
    const [quantity, setQuantity] = useState(1)

    const [sizeChart, setSizeChart] = useState(false)

    function addToCart (){
        let itemData = {
            itemID : viewProduct.id,
            itemImage : viewProduct.image,
            itemName: viewProduct.name,
            itemSize: size,
            itemPriceInd: viewProduct.priceInd,
            itemPriceTwn: viewProduct.priceTwn,
            itemQuantity: quantity ,
            priceInd : quantity * viewProduct.priceInd ,
            priceTwn : quantity * viewProduct.priceTwn
        }
        dispatch(addCartAction(itemData))
        setTriggerSuccess(true)
        props.modalcart.current.click()
    }

    useEffect(() => {
       dispatch(getProductFashionAction(setAllDataProduct))
    }, [dispatch])

    return (
        <Container fluid className="myProductDetailContainer">
            {status.isInitial && <SkeletonDetailPage/>}
            {!status.isInitial && viewProduct && 
                <Row>
                    <Col className="d-flex flex-row justify-content-center justify-content-lg-end pe-lg-5" xs={12} lg={6}>
                        <div className="myProductDetailFrame">
                            <img 
                                alt="product_image"
                                src={viewProduct.image ? viewProduct.image : imgNotFoundPotrait}
                                className="myProductDetailImage"
                                onError={(e)=>{e.target.src=imgNotFoundPotrait}}
                            />
                        </div>
                    </Col>
                    <Col className="pl-lg-5" xs={12} lg={6}>
                        <Col className="d-flex flex-column text-center text-lg-start mt-4 mt-lg-0 " xs={12} lg={10}>
                            <h1 className="text-capitalize mb-3">{viewProduct.name}</h1>    
                            <h3 className="text-secondary">Rp{viewProduct.priceInd.toLocaleString().replaceAll("," , ".")} </h3>  
                            <p className="text-secondary fw-light mb-4">(NT$ {viewProduct.priceTwn})</p>
                            <p className="pl-3 pe-3 pl-lg-0 pe-lg-0 mb-4 mb-lg-5" style={{whiteSpace: "pre-line"}}> {viewProduct.description}</p> 
                            {viewProduct.size && 
                            <>
                                <SizeSelection size={viewProduct.size} setSize={setSize}/>
                                <Row>
                                    <Col>
                                        <SizeChart
                                            show={sizeChart}
                                            onHide={() => setSizeChart(false)}
                                        />
                                        <Button variant="none" className="myClickStyleNone text-primary my-2 p-0" onClick={()=>setSizeChart(true)}>
                                            View Size Chart
                                        </Button>
                                    </Col>
                                </Row>
                            </>
                            }
                            <Counter quantity={quantity} setQuantity={setQuantity}/>
                            <Col className="p-0 align-self-center align-self-lg-start" xs={10} lg={6}>
                                <Button variant="dark" className="d-flex flex-row mt-4 py-3 rounded-5 w-100" onClick={addToCart} disabled={viewProduct.status} >
                                    {viewProduct.status === 0 ? <>
                                                <Col xs={3} lg={1}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                    </svg>
                                                </Col>
                                                <Col xs={9} lg={11}> 
                                                    Buy Now 
                                                </Col>
                                            </>
                                        :   <Col>Sold Out</Col>
                                    }
                                </Button>
                                <div className={triggerSuccess ? "d-block p-0 text-success mt-3" : "d-none"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle"  viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                    </svg>
                                    <span> Item successfully added</span>
                                </div>
                            </Col>
                            <Col className="px-0 pt-3 justify-content-center justify-content-lg-start" xs={12} lg={10}>
                                <h5>Important</h5>
                                <p className="mt-3 text-start" style={{whiteSpace: "pre-line"}}>{viewProduct.info}</p>
                            </Col>
                        </Col>
                    </Col>
                    
                </Row>
            }
            {allDataProduct.length>0 && viewProduct === undefined && <PageNotFound/>}
 
        </Container>
    )
}

export default DetailFashionPage

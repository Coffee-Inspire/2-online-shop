import {React , useState , useEffect} from 'react'
import {Container, Row , Col, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"

// import {imgNotFoundPotrait} from '../assets/images/imgNotFoundPotrait.jpg'
import {getProductCosmeticAction} from '../redux/actions/productCosmetic.actions';
import Counter from '../components/molecules/Counter';

function DetailCosmeticsPage() {

    let {id} = useParams()
    const dispatch = useDispatch()
    const [allDataProduct, setAllDataProduct] = useState([]); /* Storing all product data to state */
    let viewProduct = allDataProduct.find((item)=> item.id === id) /* Selecting target data for display */

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getProductCosmeticAction(setAllDataProduct))
    }, [dispatch])

    return (
        <Container fluid className="myProductDetailContainer">

            {viewProduct && 
                <Row className="">
                    <Col className="d-flex flex-row justify-content-center justify-content-lg-end pe-lg-5" xs={12} lg={6}>
                        <div className="myProductDetailFrame">
                            <img 
                                alt="product_image"
                                src={viewProduct.image}
                                className="myProductDetailImage"
                            />
                        </div>
                    </Col>
                    <Col className="pl-lg-5" xs={12} lg={6}>
                        <Col className="d-flex flex-column text-center text-lg-start mt-4 mt-lg-0 " xs={12} lg={10}>
                            <h1 className="text-capitalize mb-3">{viewProduct.name}</h1>    
                            <h3 className="text-secondary mb-4">Rp. {viewProduct.price}</h3>  
                            <p className="pl-3 pe-3 pl-lg-0 pe-lg-0 mb-4 mb-lg-5"> {viewProduct.description}</p>  
                            <Counter quantity={quantity} setQuantity={setQuantity}/>
                            <Col className="p-0 align-self-center align-self-lg-start" xs={11} lg={6}>
                                <Button variant="dark" className="d-flex flex-row mt-4 py-2 rounded-5 w-100">
                                    <Col xs={3} lg={1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    </Col>
                                    <Col xs={9} lg={11}> 
                                        Buy Now 
                                    </Col>
                                </Button>
                            </Col>
                        </Col>
                    </Col>
                    
                </Row>
            }
           
        </Container>
    )
}

export default DetailCosmeticsPage

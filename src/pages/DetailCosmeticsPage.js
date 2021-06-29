import {React , useState , useEffect} from 'react'
import {Container, Row , Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"

import {getProductCosmeticAction} from '../redux/actions/productCosmetic.actions';
// import {imgNotFoundPotrait} from '../assets/images/imgNotFoundPotrait.jpg'

function DetailCosmeticsPage() {

    let {id} = useParams()
    const dispatch = useDispatch()
    const [allDataProduct, setAllDataProduct] = useState([]); /* Storing all product data to state */
    let viewProduct = allDataProduct.find((item)=> item.id === id) /* Selecting target data for display */

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
                        <Col className="text-center text-lg-start mt-4 mt-lg-0  " xs={12} lg={10}>
                            <h1 className="text-capitalize mb-3">{viewProduct.name}</h1>    
                            <h3 className="text-secondary mb-4">Rp. {viewProduct.price}</h3>  
                            <p className="pl-3 pe-3 pl-lg-0 pe-lg-0"> {viewProduct.description}</p>  
                        </Col>
                    </Col>
                    
                </Row>
            }
           
        </Container>
    )
}

export default DetailCosmeticsPage

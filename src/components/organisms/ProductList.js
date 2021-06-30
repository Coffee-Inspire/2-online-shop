import React from 'react'
import { useHistory } from "react-router-dom";
import {Row , Col} from 'react-bootstrap'

function ProductList(props) {

    let history = useHistory();

    return (
        <Row className="d-flex justify-content-center d-lg-grid myProductListRow">
            {props.data && props.data.map((item,index)=>(
                <Col key={index} className="myCardFrame p-0 mb-5" xs={12} lg={4}>
                    <div className="myCardImageFrame">
                        <img
                            alt=""
                            src={item.image}
                            className="myCardImage"
                            onClick={(e)=>history.push(`/cosmetic/${item.id}`)}
                        />
                    </div>
                    <div className="my-3 pl-3">
                        <h5 className="fw-bold text-uppercase">{item.name}</h5>
                        <h5>Rp. {item.price},-</h5>
                    </div>
                    
                </Col>
            ))}
        </Row>
    )
}

export default ProductList

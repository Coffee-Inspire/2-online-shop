import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function ProductTypeModal(props) {
    return (
        <Modal size="lg" show={props.show} onHide={()=>props.setShow(false)} centered>
            <Modal.Header className="border-0 pb-0" closeButton>
            {/* <Modal.Title className="text-center w-100">Choose the type of product</Modal.Title> */}
            </Modal.Header>
            <Modal.Body className="pb-3">
                <h4 className="text-center">Choose the type of product</h4>
            </Modal.Body>
            <Modal.Footer className="border-0 pb-4 d-flex justify-content-around">
            <Button className="btnBrown shadow-brown px-4" onClick={()=>props.setShow(false)}>
                Add Product Cosmetic
            </Button>
            <Button className="btnBrown shadow-brown px-4" onClick={()=>props.setShow(false)}>
                Add Product Fashion
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductTypeModal

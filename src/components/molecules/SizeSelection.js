import {React , useState, useEffect} from 'react'
import {Dropdown , Row , Col} from 'react-bootstrap'

function SizeSelection(props) {

    const [selected, setSelected] = useState(props.size[0])

    useEffect(() => {
        props.setSize(selected);
    }, [props.setSize])

    return (
        <Row className="d-flex flex-row justify-content-center justify-content-lg-start">
            <Col xs={7} lg={3}>
                <Dropdown className="d-flex flex-row border border-secondary rounded-3">
                    <div className="text-center d-flex px-4 border-right border-secondary"><span className="fw-bold align-self-center px-1">Size</span></div>
                    <div className="w-100 text-center">
                        <span className="text-uppercase" >{selected}</span>  
                        <Dropdown.Toggle variant="none" id="dropdown-basic" className="myClickStyleNone">
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu>
                            {props.size && props.size.map((item,index)=>(
                                 <Dropdown.Item key={index} onClick={()=>{
                                        props.setSize(item);
                                        setSelected(item);
                                    }}
                                 >
                                        <span className="text-uppercase fw-bold">
                                            {item}
                                        </span>
                                </Dropdown.Item>
                            ))}
                            
                        </Dropdown.Menu>

                    </div>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default SizeSelection

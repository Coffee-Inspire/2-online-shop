import {React , useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

function FilterBox(props) {

    // Temporary storage for search text
    const [searchTextHold, setSearchTextHold] = useState("")

    // Search function triggered by button
    function searchTrigger (e){
        e.preventDefault()
        props.setSearchText(searchTextHold)
        
    }

    return (
        <Row className="px-4">
            <div className="myFilterBoxInline px-0 pt-4 pb-2">
                <Col className="d-block d-lg-none p-0 mb-4 text-end" xs={12}>
                    <Button variant="none" className="myClickStyleNone"  onClick={()=>props.setTriggerFilter(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                    </Button>
                </Col>
                <Form onSubmit={(e)=>searchTrigger(e)} className="p-0 mb-3 d-flex flex-row" lg={12}>
                    <Form.Control name="search" placeholder="Search Products..." type="text" className="myClickStyleNone rounded-0 border-0 bg-light" onChange={(e)=>setSearchTextHold(e.target.value)}/> 
                    <Button type="submit" variant="light" className="myClickStyleNone rounded-0 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Button>
                </Form>
                <Col className="p-0" lg={12}>
                    <Button
                        variant="none" 
                        className="my-2 p-0" 
                        onClick={(e)=>{
                                e.preventDefault(); 
                                props.setSearchText(""); 
                                props.setSearchCategory(""); 
                                }
                            }
                    >
                        All Products
                    </Button>
                </Col>
            </div>
            <div className="myFilterBoxInline px-0 pt-3 pb-2">
                <Col className="p-0" lg={12}>
                    <h3 className="fw-bold">Categories</h3>
                </Col>
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0" 
                        onClick={(e)=>{ 
                                e.preventDefault(); 
                                if(props.fashion){
                                    props.setSearchCategory("top");
                                } else props.setSearchCategory("face");
                                }}
                    >   
                        {props.fashion ? <span>Top</span> : <span>Face</span>}
                    </Button>
                </Col>
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0" 
                        onClick={(e)=>{ 
                                e.preventDefault(); 
                                if(props.fashion){
                                    props.setSearchCategory("bottom");
                                } else props.setSearchCategory("body");
                                }}
                    >
                        {props.fashion ? <span>Bottom</span> : <span>Body</span>}
                    </Button>
                </Col>
                {props.fashion &&
                    <>
                        <Col className="p-0" lg={12}>
                            <Button 
                                variant="none" 
                                className="my-2 p-0" 
                                onClick={(e)=>{ 
                                        e.preventDefault(); 
                                        props.setSearchCategory("headwear");
                                        }}
                            >
                                Headwear
                            </Button>
                        </Col>
                        <Col className="p-0" lg={12}>
                            <Button 
                                variant="none" 
                                className="my-2 p-0" 
                                onClick={(e)=>{ 
                                        e.preventDefault(); 
                                        props.setSearchCategory("merchandise");
                                        }}
                            >
                                Merchandise
                            </Button>
                        </Col>
                    </>
                }
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0" 
                        onClick={(e)=>{
                            e.preventDefault(); 
                            props.setSearchCategory("package");
                        }}
                    >
                        Package
                    </Button>
                </Col>
            </div>
            <div className="px-0 pt-3 pb-5">
                <Col className="p-0" lg={12}>
                    <h3 className="fw-bold">Sort by</h3>
                </Col>
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0"
                        onClick={(e)=>{
                            e.preventDefault(); 
                            props.setTriggerSortLowestPrice(true);
                            props.setTriggerSortHighestPrice(false);
                            props.setTriggerSortProductName(false);
                        }}
                    >
                        Lowest Price
                    </Button>
                </Col>
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0"
                        onClick={(e)=>{
                            e.preventDefault(); 
                            props.setTriggerSortLowestPrice(false);
                            props.setTriggerSortHighestPrice(true);
                            props.setTriggerSortProductName(false);
                        }}
                    >
                        Highest Price
                    </Button>
                </Col>
                <Col className="p-0" lg={12}>
                    <Button 
                        variant="none" 
                        className="my-2 p-0"
                        onClick={(e)=>{
                            e.preventDefault(); 
                            props.setTriggerSortLowestPrice(false);
                            props.setTriggerSortHighestPrice(false);
                            props.setTriggerSortProductName(true);
                        }}
                    >
                        Product Name (A-Z)
                    </Button>
                </Col>
                <Col className="d-block d-lg-none p-0 mt-4 text-start" onClick={()=>props.setTriggerFilter(false)} xs={12}>
                    <Button variant="secondary" className="w-100" >
                        Apply
                    </Button>
                </Col>
            </div>
        

        </Row>
    )
}

export default FilterBox

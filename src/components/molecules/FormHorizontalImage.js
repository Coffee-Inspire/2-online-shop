import React, { useRef, useState } from 'react'
import { Row, Col, Form, Image, Button, ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import imageNotFound from '../../assets/images/imgNotFound.jpg'
import imageNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

function FormHorizontalImage(props) {
    const uploadImage = useSelector(state => state.upload);
    const uploadBtn = useRef(null);
    const uploadDrag = useRef(null);

    const [imagePreview, setImagePreview] = useState(props.value);
    const [status, setStatus] = useState("");

    const checkFile = (image, dataDragDrop = "false") =>{
        const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/bmp'];

        if(!image){
            setImagePreview("");
            props.setImagePreview("");
        } 
        else{
            if(image && acceptedImageTypes.includes(image.type)){
                setStatus("is-valid");
                changeImagePreview(image);
                if(dataDragDrop !== "false"){
                    uploadBtn.current.files = dataDragDrop;
                }
            }
            else{
                setStatus("is-invalid");
            }
        }
    }

    const changeImagePreview = (image) => {
        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onloadend = () => {
            setImagePreview([reader.result]);
            if(props.setImagePreview){
                props.setImagePreview([reader.result]);
            }
        }
    }

    return (
        <Row className="mb-3">
            {!props.style2 ?
            <>
            <Form.Label className={(!props.noTextEnd && "text-md-end " ) + " text-nowrap"} column lg={3}>{props.label} </Form.Label>
            <Col>    
                <div className="border-image position-relative">
                    <Image ref={props.reff} className="hoverImage " src={imagePreview} onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFound}} fluid />
                    <div ref={uploadDrag} 
                        onDragOver={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                        }} 
                        onDragEnter={(e)=>{
                            e.preventDefault();
                            e.stopPropagation()
                            uploadDrag.current.style.opacity = "1";
                        }}
                        onDragLeave={(e)=>{
                            e.preventDefault();
                            e.stopPropagation()
                            if(e.relatedTarget !== uploadDrag.current.children[0] && e.relatedTarget !== uploadDrag.current){
                                uploadDrag.current.style.opacity = "";
                            }
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            e.stopPropagation()
                            // console.log(e.dataTransfer.files[0]);
                            uploadDrag.current.style.opacity = "";
                            checkFile(e.dataTransfer.files[0], e.dataTransfer.files);
                        }} 
                        className={(uploadImage.isLoading && "opacity-1") + " position-absolute imageUploadOverlay d-flex justify-content-center align-items-center align-content-center"}>
                        {!uploadImage.isLoading ? 
                            <Button onClick={() => uploadBtn.current.click()} className="btnWhiteTrans px-4 py-2" >Change Image</Button>
                            :
                            <ProgressBar animated striped variant="primary" className="w-75" now={props.progressBar} />
                        }
                    </div>
                    {props.value !== "" ?   
                        <Form.Control 
                            ref={uploadBtn} 

                            type="file" 
                            name="image"
                            onChange={(e) => checkFile(e.target.files[0])}
                            disabled={props.disabled}
                            className="d-none"
                            accept="image/jpeg, image/png, image/bmp"
                        />
                        :
                        <Form.Control 
                            ref={uploadBtn} 
                            
                            required
                            type="file" 
                            name="image"
                            onChange={(e) => checkFile(e.target.files[0])}
                            disabled={props.disabled}
                            className="position-absolute bottom-0 opacity-0"
                            accept="image/jpeg, image/png, image/bmp"
                        />
                    }
                </div>
                <Form.Control className={status+" d-none"}/>
                {/* <Form.Control.Feedback type="valid">Ready for upload!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">Must be image .jpg, .png, .bmp!</Form.Control.Feedback>
            </Col>
            </>
            :
            <>
                {/* JADI */}
                <div className="border-image2">
                    <svg className="border-svg">
                    <rect x="3" y="3" width="99%" height="98%" className="border-image-dashed" />
                    <foreignObject x="3" y="3" height="98%" width="99%">
                        <div className="border-image-inside d-flex align-items-center justify-content-center position-relative">
                            {/* <div>tes</div> */}
                            <div className="imageFrame2 ">
                                <Image ref={props.reff} className="hoverImage imageForm img-fluid" src={imagePreview} onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFoundPotrait}} fluid />
                            </div>
                            <div ref={uploadDrag} 
                                onDragOver={(e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                }} 
                                onDragEnter={(e)=>{
                                    e.preventDefault();
                                    e.stopPropagation()
                                    uploadDrag.current.style.opacity = "1";
                                }}
                                onDragLeave={(e)=>{
                                    e.preventDefault();
                                    e.stopPropagation()
                                    if(e.relatedTarget !== uploadDrag.current.children[0] && e.relatedTarget !== uploadDrag.current){
                                        uploadDrag.current.style.opacity = "";
                                    }
                                }}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation()
                                    // console.log(e.dataTransfer.files[0]);
                                    uploadDrag.current.style.opacity = "";
                                    checkFile(e.dataTransfer.files[0], e.dataTransfer.files);
                                }} 
                                className={(uploadImage.isLoading && "opacity-1") + " position-absolute imageUploadOverlay d-flex justify-content-center align-items-center align-content-center"}>
                                {!uploadImage.isLoading ? 
                                    <Button onClick={() => uploadBtn.current.click()} className="btnWhiteTrans px-4 py-2" >Change Image</Button>
                                    :
                                    <ProgressBar animated striped variant="primary" className="w-75" now={props.progressBar} />
                                }
                            </div>
                            {props.value !== "" ?   
                                <Form.Control 
                                    ref={uploadBtn} 
                                    
                                    type="file" 
                                    name="image"
                                    onChange={(e) => checkFile(e.target.files[0])}
                                    disabled={props.disabled}
                                    className="d-none"
                                    accept="image/jpeg, image/png, image/bmp"
                                />
                                :
                                <Form.Control 
                                    ref={uploadBtn} 
                                    
                                    required
                                    type="file" 
                                    name="image"
                                    onChange={(e) => checkFile(e.target.files[0])}
                                    disabled={props.disabled}
                                    className="position-absolute bottom-0 opacity-0"
                                    accept="image/jpeg, image/png, image/bmp"
                                />
                            }
                                
                        </div>
                    </foreignObject>
                    </svg>
                </div>
                
                <Form.Control className={status+" d-none"}/>
                <Form.Control.Feedback className="text-center" type="invalid">Must be image .jpg, .png, .bmp!</Form.Control.Feedback>


                {/* TEST ONLY */}
                {/* <svg className="border-svg" viewBox="0 0 120 120">
                <circle cx="55" cy="55" r="50" class="border-image-dashed" />
                <path d="M150 0 L75 200 L225 200 Z" />
                <rect x="50" y="20" width="150" height="150" class="border-image-dashed" />
                <foreignObject x="5" y="5" height="100px" width="100px">
                    <div className="border-image-inside">100</div>
                </foreignObject>
                </svg> */}
            </>
            }
        </Row>
    )
}

export default FormHorizontalImage

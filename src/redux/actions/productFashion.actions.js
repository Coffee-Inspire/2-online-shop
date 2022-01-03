import axios from 'axios';
// import productImage from '../../assets/images/image-example-3.jpg'
import { uploadImageAction } from '../actions/upload.actions';

export const INITIAL = "INITIAL_FASHION";
export const REQUEST = "REQUEST_FASHION";
export const FAILED = "FAILED_FASHION";
export const GET_SUCCESS = "GET_SUCCESS_FASHION";
export const POST_SUCCESS = "POST_SUCCESS_FASHION";
export const SAVE_SUCCESS = "SAVE_SUCCESS_FASHION";
export const DELETE_SUCCESS = "DELETE_SUCCESS_FASHION";

export const initial = () => {
    return {
        type: INITIAL,
    };
};

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const get_success = (data) => {
    return {
        type: GET_SUCCESS,
        data: data
    };
};

export const post_success = (data) => {
    return {
        type: POST_SUCCESS,
        data: data
    };
};

export const save_success = (data) => {
    return {
        type: SAVE_SUCCESS,
        data: data
    };
};

export const delete_success = (id) => {
    return {
        type: DELETE_SUCCESS,
        id: id
    };
};

export const getProductFashionAction = (setData) => (dispatch) => {
    // setFormEdit(DUMMY_PRODUCT_FASHION);
    dispatch(initial());
    
    return axios
        .get(process.env.REACT_APP_URL_PFASHION)
        .then(result => {
            if(result.data.length !== 0){
                setData([...result.data]);
            }
            dispatch(get_success(result.data));
        })
        .catch(err => {
            // console.log(err);
            dispatch(failed(err));
        });
};

export const postProductFashionAction = (form, image, setProgressBar, setForm, setImagePreview, imagePreviewTop, imageInput, setShow) => (dispatch) => {
    dispatch(request());

    let uploadImage = dispatch(uploadImageAction(image, setProgressBar));
    uploadImage.then(result => {
        
        let data = {
            ...form,
            [result !== "" && "image"] : result,
        }

        return axios
            .post(process.env.REACT_APP_URL_PFASHION, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                setImagePreview("");
                imagePreviewTop.current.src="";
                imageInput.value="";
                setForm({
                    name: "",
                    image: "",
                    priceInd: "",
                    priceTwn: "",
                    size: '[]',
                    info: "",
                    description: "",
                    category: "",
                    status: 0,
                });
                setShow(true);
                dispatch(post_success(result.data));
            })
            .catch(err => {
                console.log(err);
                setShow(true);
                dispatch(failed(err));
            })

    })
    .catch(err => dispatch(failed(err)))
}

export const editProductFashionAction = (form, image, setProgressBar, formList, setFormList, setEditSuccess, setShow) => (dispatch) => {
    dispatch(request());

    let edit = (form, imagePath) => {
        let data = {
            ...form,
            [imagePath !== "" && "image"] : imagePath,
        }

        return axios
            .put(process.env.REACT_APP_URL_PFASHION +'/'+ form.id, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                let newData = formList.map((item) => {
                    if(item.id === result.data.id){
                        return result.data;
                    }
                    else{
                        return item;
                    }
                });
                setFormList([...newData]);
                setEditSuccess(true);
                setShow(true);
                dispatch(save_success(result.data));
            })
            .catch(err => {
                console.log(err);
                setShow(true);
                dispatch(failed(err));
            })
    }

    if(image){
        let uploadImage = dispatch(uploadImageAction(image, setProgressBar));
        uploadImage.then(result => {
            edit(form, result);
        })
        .catch(err => {
            setShow(true);
            dispatch(failed(err));
        })
    } else{
        edit(form, "");
    }
}

export const deleteProductFashionAction = (id, formList, setFormList, setEditStatus, setShow, setShowMain) => (dispatch) => {
    dispatch(request());

    return axios
        .delete(process.env.REACT_APP_URL_PFASHION +'/'+ id,{
            headers: {
                Authorization: localStorage[process.env.REACT_APP_TOKEN]
            }
        })
        .then(result => {
            let newData = formList;
            newData.forEach((item, index) => {
                if(item.id === id){
                    newData.splice(index, 1);
                }
            })
            setFormList([...newData]);
            setShowMain(true);
            setEditStatus({
                active : false,
                type : "",
                data : {},
            });
            dispatch(delete_success(id));
        })
        .catch(err => {
            console.log(err);
            setShow(true);
            dispatch(failed(err));
        })
}
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";
export const FINISH = "FINISH";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data) => {
    return {
        type: SUCCESS,
        data: data
    };
};

export const finish = (data,totalPriceInd,totalPriceTwn) => {
    return {
        type: FINISH,
        data: data,
        totalPriceInd: totalPriceInd ,
        totalPriceTwn : totalPriceTwn
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getCounterAction = () => (dispatch) => { 
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    if(myCartItem)
        dispatch(success(myCartItem.length))
};

export const addCartAction = (itemData) => (dispatch) => { 
    let items = []
    let localItemData = JSON.parse(localStorage.getItem("items")) 
    if (localItemData) items.push(...localItemData)
    items.push(itemData)
    localStorage.setItem("items" , JSON.stringify(items))
    dispatch(getCounterAction())
    dispatch(getCartAction())
};

export const getCartAction = () => (dispatch) => {
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    if(myCartItem){
        dispatch(finish(myCartItem))
        dispatch(sumPriceAction())
    } 
};

export const sumPriceAction = () => (dispatch) => {    
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    let totalPriceInd =  myCartItem.reduce(function(a,b){return a + b.priceInd},0)
    let totalPriceTwn =  myCartItem.reduce(function(a,b){return a + b.priceTwn},0)
    dispatch(finish(myCartItem,totalPriceInd,totalPriceTwn))
};

export const editQuantityAction = (targetIndex , newQuantity) => (dispatch) => { 
    let data = JSON.parse(localStorage.getItem("items"))    
    data[targetIndex].itemQuantity = newQuantity
    data[targetIndex].priceInd = data[targetIndex].itemPriceInd * newQuantity
    localStorage.setItem("items" , JSON.stringify(data))
    dispatch(sumPriceAction())    
};

export const deleteItemAction = (targetIndex) => (dispatch) => {    
    let AllData = JSON.parse(localStorage.getItem("items")) 
    let FilteredData = AllData.filter((item,index)=> index !== targetIndex)
    localStorage.setItem("items" , JSON.stringify(FilteredData))  
    dispatch(getCartAction()) 
    dispatch(getCounterAction())
};

export const clearCartAction = () => (dispatch) => { 
    localStorage.removeItem("items")
    window.location.reload()
};
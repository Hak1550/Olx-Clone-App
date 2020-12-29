const ActiveProduct = ()=>{
    activeProduct= {

    }
}

export default 
export default (ActiveProduct, action) => {
    console.log("action==>", action)
    switch (action.type){
      case "ACTIVE_PRODUCT":
        return ({
          ...activeProduct,
          activeProduct: {...state.activeProduct, action.payload}
        })
    } 
    return state;
  };
  
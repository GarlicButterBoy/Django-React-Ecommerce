const productListReducers (state = {products:[]}, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true, products: [] }
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: falsFAILSUCCESS':
            return {loading:false, products: action.payload}
    }
}
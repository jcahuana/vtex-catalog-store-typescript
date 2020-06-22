// Endpoint
const ENDPOINT = `/api/catalog_system/pub/products/search/?fq=productClusterIds:382&O=OrderByReleaseDateDESC&_from=0&_to=49`;

// INITIAL STATE
const initialState = {
  products: [],
};

// ACTION TYPES
export const GET_PRODUCTS = 'GET_PRODUCTS';


// REDUCERS (funciones puras)

// Action interface
interface actionInterface {
  type: string,
  payload: any
}

function productsReducer(state = initialState, action: actionInterface){
  switch (action.type) {
    case GET_PRODUCTS:
      return  {...state, products: action.payload}
    default:
      return state;
  }
}


// ACTIONS
export const getProductsAction = () => async (dispatch: any) => {

  try {
    const response  = await fetch(`${ENDPOINT}`).then(res => res.json())
    dispatch({
      type: GET_PRODUCTS,
      payload: response
    });

  } catch (error) {
    console.log('error', error);
  }

}



// REDUCER EXPORT
// This reducer will be combine with others reducers in store object
export default productsReducer;
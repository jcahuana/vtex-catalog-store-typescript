// Endpoint
const ENDPOINT = `/api/catalog_system/pub/products/search/?fq=productClusterIds:382&O=OrderByReleaseDateDESC&_from=0&_to=49`;

// INITIAL STATE
const initialState = {
  planes: [],
};

// Actions
export const GET_PLANS = 'store/GET_PLANS';


// Types
interface actionInterface {
  type: string,
  payload: any
}

// Reducers
function productsReducer(state = initialState, action: actionInterface){
  switch (action.type) {
    case GET_PLANS:
      const response = action.payload
      console.log(response)
      return  response;
    default:
      return state;
  }
}


// Action creators
export const getProductsAction = () => async (dispatch: any) => {

  try {
    const response  = await fetch(`${ENDPOINT}`).then(res => res.json())
    dispatch({
      type: GET_PLANS,
      payload: response
    });

  } catch (error) {
    console.log('error', error);
  }

}



// REDUCER EXPORT
// This reducer will be combine with others reducers in store object
export default productsReducer;
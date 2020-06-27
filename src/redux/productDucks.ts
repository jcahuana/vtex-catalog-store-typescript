// ACTION TYPES
export const Types = {
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS"
}

// Endpoint
const ENDPOINT = `/api/catalog_system/pub/products/search/?fq=productClusterIds:382&O=OrderByReleaseDateDESC&_from=0&_to=49`;


const INITIAL_STATE:any[] = [];

// Action interface
interface actionInterface {
  type: string,
  payload: any
}

export default function productsReducer(state = INITIAL_STATE, action: actionInterface){
  switch (action.type) {
    case Types.GET_PRODUCTS_SUCCESS:
      const response = action.payload
      return  response;
    default:
      return state;
  }
}

export const Creators = {
  getProductsAction: () => async (dispatch: any) => {
    try {
      const response  = await fetch(`${ENDPOINT}`).then(res => res.json())
      dispatch({
        type: Types.GET_PRODUCTS_SUCCESS,
        payload: response
      });

    } catch (error) {
      console.log('error', error);
    }
  }
}

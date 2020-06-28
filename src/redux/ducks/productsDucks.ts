import searchAPI from "api/search";
import { createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  data: []
  status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: ProductsState = {
  data: [],
  status: 'idle'
}

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state)=> {
      state.status = 'loading'
    },
    fetchProductsSuccess: (state, action)=> {
      state.status = 'success';
      state.data = action.payload;
    },
    fetchProductsError: (state)=> {
      state.status = 'error';
    }
  },
});

// Acciones
const { fetchProductsStart, fetchProductsSuccess, fetchProductsError } = products.actions;

// Exporta acciones asíncronas
export const fetchProducts = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(fetchProductsStart())
    const products = await searchAPI('?fq=productClusterIds:382&O=OrderByReleaseDateDESC&_from=0&_to=49');

    // BEGIN
    const kitItemIds = products.map((product: any)=>product.items[0].kitItems[0].itemId);
    const query = kitItemIds.map((id: string)=>`skuId:${id}`).join(',');
    const plans = await searchAPI(`?fq=${query}`);
    // END

    dispatch(fetchProductsSuccess(plans))
  } catch (e) {
    console.log('Error: ' + e)
    dispatch(fetchProductsError())
  }
}

// Exporta por default el reducer
export default products.reducer;
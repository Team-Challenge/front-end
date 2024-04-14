import { ShortProductData, ShortStoreData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoreProfileState {
  storeInfo: ShortStoreData;
  productList: ShortProductData[];
}

const initialState: StoreProfileState = {
  storeInfo: {
    id: 0,
    owner_id: 0,
    name: '',
    photo_shop: null,
    banner_shop: null,
    description: '',
    phone_number: '',
    link: '',
  },
  productList: [],
};

const storePageSlice = createSlice({
  name: 'storePage',
  initialState,
  reducers: {
    setStoreInfo: (state, action: PayloadAction<ShortStoreData>) => {
      state.storeInfo = action.payload;
    },
    setStoreProducts: (state, action: PayloadAction<ShortProductData[]>) => {
      state.productList = action.payload;
    },
  },
});

export const { setStoreInfo, setStoreProducts } = storePageSlice.actions;

export default storePageSlice.reducer;

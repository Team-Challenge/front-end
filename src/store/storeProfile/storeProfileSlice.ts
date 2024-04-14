import { ProductData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoreProfileState {
  name: string;
  description: string;
  storePhoto: string;
  banner: string;
  phoneNumber: string;
  instagramLink: string;
  linkToStore: number;
  productList: ProductData[];
}

const initialState: StoreProfileState = {
  name: '',
  description: '',
  storePhoto: '',
  banner: '',
  phoneNumber: '',
  instagramLink: '',
  linkToStore: 0,
  productList: [],
};

const storeProfileSlice = createSlice({
  name: 'storeSettings',
  initialState,
  reducers: {
    setLinkToStore: (state, action: PayloadAction<number>) => {
      state.linkToStore = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setStorePhoto: (state, action: PayloadAction<string>) => {
      state.storePhoto = action.payload;
    },
    setBannerPhoto: (state, action: PayloadAction<string>) => {
      state.banner = action.payload;
    },
    setStorePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setInstagramLink: (state, action: PayloadAction<string>) => {
      state.instagramLink = action.payload;
    },
    setProductList: (state, action: PayloadAction<ProductData[]>) => {
      state.productList = action.payload;
    },
  },
});

export const {
  setLinkToStore,
  setName,
  setDescription,
  setStorePhoto,
  setBannerPhoto,
  setStorePhoneNumber,
  setInstagramLink,
  setProductList,
} = storeProfileSlice.actions;

export default storeProfileSlice.reducer;

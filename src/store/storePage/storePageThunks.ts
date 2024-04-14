import $api from '@/http';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setStoreInfo, setStoreProducts } from './storePageSlice';

export const getStoreInfoById = createAsyncThunk(
  'storePage/info',
  async (shopId: number, { dispatch }) => {
    try {
      const response = await $api.get(`/shops/shop_info/${shopId}`);
      if (response.status === 200) {
        dispatch(setStoreInfo(response.data.shop));
        dispatch(setStoreProducts(response.data.products.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

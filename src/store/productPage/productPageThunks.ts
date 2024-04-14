import $api from '@/http';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductCharacteristic } from '@/types';
import { setProductData, setStoreData } from './productPageSlice';

export const getProductInfoById = createAsyncThunk(
  'productPage/info',
  async (product_id: number, { dispatch }) => {
    try {
      const productResponse = await $api.get(
        `/products/product_info/${product_id}`,
      );
      if (productResponse.status === 200) {
        dispatch(setProductData(productResponse.data));
      }

      const shopResponse = await $api.get(
        `/shops/shop_info/${productResponse.data.shop_id}`,
      );
      if (shopResponse.status === 200) {
        dispatch(setStoreData(shopResponse.data.shop));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const addNewProduct = createAsyncThunk(
  'productPage/addNewProduct',
  async (
    data: {
      product_name: string;
      product_description?: string;
      category_id: number;
      sub_category_id: number;
      product_status: string;
      is_unique?: boolean;
      price: string;
      product_characteristic: ProductCharacteristic;
      method_of_payment: {
        cardPayment: boolean;
        cashPayment: boolean;
        securePayment: boolean;
      };
      delivery_post: {
        novaPost: boolean;
        ukrPost: boolean;
      };
      is_return?: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await $api.post('/products/product', {
        product_name: data.product_name,
        product_description: data.product_description,
        category_id: data.category_id,
        sub_category_id: data.sub_category_id,
        product_status: data.product_status,
        is_unique: data.is_unique,
        price: data.price,
        product_characteristic: data.product_characteristic,
        delivery_post: data.delivery_post,
        method_of_payment: data.method_of_payment,
        is_active: true,
        is_return: data.is_return,
      });
      if (response.status === 201) {
        return response.data;
      }
    } catch (e: any) {
      const errorMessage =
        e.response?.data?.message || 'Помилка додавання товару';
      return rejectWithValue(errorMessage);
    }
  },
);

export const uploadProductPhoto = createAsyncThunk(
  'productPage/uploadProductPhoto',
  async (data: { product_id: string; form_data: FormData }) => {
    const response = await $api.post(
      `/products/product_photo/${data.product_id}`,
      data.form_data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  },
);

export const changeProductInfo = createAsyncThunk(
  'productPage/changeProductInfo',
  async ({
    data,
    product_id,
  }: {
    data: {
      product_name?: string;
      product_description?: string;
      product_status?: string;
      is_unique?: boolean;
      price?: string;
      product_characteristic?: ProductCharacteristic;
      method_of_payment?: {
        cardPayment: boolean;
        cashPayment: boolean;
        securePayment: boolean;
      };
      delivery_post?: {
        novaPost: boolean;
        ukrPost: boolean;
      };
      is_return?: boolean;
    };
    product_id: number;
  }) => {
    try {
      const response = await $api.put(`/products/update/${product_id}`, {
        product_name: data.product_name,
        product_description: data.product_description,
        product_status: data.product_status,
        is_unique: data.is_unique,
        price: data.price,
        product_characteristic: data.product_characteristic,
        delivery_post: data.delivery_post,
        method_of_payment: data.method_of_payment,
        is_active: true,
        is_return: data.is_return,
      });
      if (response.status === 201) {
        return response.data;
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

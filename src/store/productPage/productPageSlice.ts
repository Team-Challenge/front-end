import { ShortStoreData, ProductData } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductState {
  products: ProductData[];
  product: ProductData;
  store: ShortStoreData;
}

const initialState: ProductState = {
  products: [],
  product: {
    product_name: '',
    category_id: 0,
    sub_category_id: 0,
    product_status: '',
    price: '',
    photos: [],
    product_characteristic: {
      parameters: undefined,
      coating: undefined,
      colors: undefined,
      deadline: undefined,
      decorative_elements: undefined,
      metals: undefined,
      other: undefined,
      stones: undefined,
      textiles: undefined,
      care_instructions: undefined,
    },
    method_of_payment: {
      cardPayment: false,
      cashPayment: false,
      securePayment: false,
    },
    delivery_post: {
      novaPost: false,
      ukrPost: false,
    },
    id: 0,
    time_added: '',
    time_modifeid: '',
  },
  store: {
    id: 0,
    owner_id: 0,
    name: '',
    photo_shop: null,
    banner_shop: null,
    description: '',
    phone_number: '',
    link: '',
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = action.payload;
    },
    setProductData: (state, action: PayloadAction<ProductData>) => {
      state.product = action.payload;
    },
    setProductStatus: (
      state,
      action: PayloadAction<{ productId: number; productStatus: string }>,
    ) => {
      const { productId, productStatus } = action.payload;
      const product = state.products.find((item) => item.id === productId);

      if (product) {
        product.product_status = productStatus;
      }
    },
    setStoreData: (state, action: PayloadAction<ShortStoreData>) => {
      state.store = action.payload;
    },
  },
});

export const {
  setAllProducts,
  setProductData,
  setProductStatus,
  setStoreData,
} = productSlice.actions;

export default productSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '@src/entities/category';

interface CategoryState {
  loadingCategories: boolean;
  categories: Category[];
}

const initialState = {
  loadingCategories: false,
  categories: [],
} as CategoryState;

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories(state) {
      state.loadingCategories = true;
    },
    fetchCategoriesSuccess(state, { payload }: PayloadAction<Category[]>) {
      state.loadingCategories = false;
      state.categories = payload;
    },
    fetchCategoriesFailure(state) {
      state.loadingCategories = false;
    },
  },
});

export const { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } =
  categorySlice.actions;

export default categorySlice.reducer;

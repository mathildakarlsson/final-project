import { createSlice } from '@reduxjs/toolkit'

export const wishlist = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },

    reducers: {

        addItem: (state, action) => {
            const existingProduct = state.items.find((item) => item._id === action.payload._id)
            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },

        removeItem: (state, action) => {
            const existingProduct = state.items.find((item) => item._id === action.payload._id)
            if (existingProduct && existingProduct.quantity === 1) {
                state.items = state.items.filter((item) => item._id !== action.payload._id)
            } else if (existingProduct) {
                existingProduct.quantity -= 1
            }
        }

    }
});

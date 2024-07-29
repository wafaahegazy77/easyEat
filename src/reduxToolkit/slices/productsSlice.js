import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const initialState = {
    data : [] ,
    isLoading : false ,
    error : null ,
};


export const getAllProducts =  createAsyncThunk("posts-actions" , async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data
    
})


const ProductsSlice = createSlice({
    name: "ProductsSlice" ,
    initialState ,
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.fulfilled , (state , action) => {
            toast.success('Successfully ProductsSlice working!')
            state.data = action.payload;
            state.isLoading = false
        })
        builder.addCase(getAllProducts.pending , (state ) => {
            state.isLoading = true
        })
    }
})

export const productsReducer = ProductsSlice.reducer
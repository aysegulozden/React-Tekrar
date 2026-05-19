import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
 

const initialState={
    value :  [],
    loading: false
}

// callback fonk http isteği attığımız için  async await yapısını kullanmamız lazım 
export const getAllUsers = createAsyncThunk('users',async()=>{
 const response = await axios.get("https://jsonplaceholder.typicode.com/users")
 console.log(response.data)
 return response.data
})

export const userSlice= createSlice ({
    name: "user",
    initialState,
    reducers:{
         //HTTP isteği OLMAZSA kullanırı !
    },
    extraReducers: (builder)=>{
        //HTTP istekleri OLURSA kullanılır!

        // getAllUsers fonksiyonu bağarılı (fullfilled) bir şekilde çağrıldığında 
        // benim stateim (initialState) , action da benim getAllUsers dan dönen değerim (response.data) olarak bir fonksiyon oluyor
        builder.addCase(getAllUsers.fulfilled , (state , action)=>{
            //stateim de users'larım vardı ona erişmiş olduğumuz actionın içindeki data (payload) 'yı ata
            state.users = action.payload;
        })

        

    }
})

export const { } = userSlice.actions
export default userSlice.reducer
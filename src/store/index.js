import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {TMBD_BASE_URL} from "../utils/constants"
import {API_KEY} from "../utils/constants"

const initialState = {
    movies:[],
    genresdLoaded:false,
    genres:[]
}

export const getGenres = createAsyncThunk("netflix/genres",async()=>{
    const {data:{genres}} = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    console.log(genres);
    return genres
}) 


export const NetflixSlice = createSlice(
    {
        name:"netflix",
        initialState,
        extraReducers:(builder)=>{
            builder.addCase(getGenres.fulfilled,(state,action)=>{
                state.genres=action.payload
                state.genresdLoaded=true
            })
        }
    })

export const store=configureStore(
    {
        reducer:{
            netflix:NetflixSlice.reducer
        }
    }
)

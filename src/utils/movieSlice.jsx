import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers:{
        addNowplayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowplayingMovies, addTrailerVideo} =movieSlice.actions
export default movieSlice.reducer;
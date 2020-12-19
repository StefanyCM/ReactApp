import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    comics: [],
    loading: false,
    error: null,
    idBuscado: null,
    selected: null
};

const ComicSlice = createSlice({
    name: 'comic',
    initialState,
    reducers: {
        getComics(state) {
            state.loading = true
        },
        getComicsSuccess(state, { payload }) {
            state.comics = payload
            state.loading = false
        },
        getComicsFail(state, { payload }) {
            state.error = payload
            state.loading = false
        },
        getSelectedComic(state, { payload }) {
            state.selected = payload
        },
        addComic(state, { payload }) {
            state.comics = [payload, ...state.comics]
        }
    }
});

const comicsActions = ComicSlice.actions;
const ComicsReducer = ComicSlice.reducer;

export { comicsActions, ComicsReducer };

export default ComicsReducer;
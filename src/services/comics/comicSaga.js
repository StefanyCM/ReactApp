import { takeLatest, all, put } from 'redux-saga/effects';
import * as ComicTypes from './comicTypes';
import { Api } from '../../Common/api'

const fetchComics = async () => await Api();


function* getComics(action) {
    console.log('Llega');
    const response = yield fetchComics();
    console.log('*****************', response);
    if (response) {
        yield put({
            type: ComicTypes.GET_COMICS_SUCCESS,
            payload: {comics: response.data.results},
        });
    } else {
        yield put({
            type: ComicTypes.GET_COMICS_FAIL,
            error: {
                codigo: '',
                message: ''
            }
        });
    }
}

function* actionWatcher() {
    yield takeLatest(ComicTypes.GET_COMICS, getComics);
}

export default function* comicSaga() {
    yield all([ actionWatcher() ]);
}
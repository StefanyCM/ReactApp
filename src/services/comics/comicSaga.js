import { takeLatest, all, put } from 'redux-saga/effects';
import { comicsActions } from './comicsSlice';
import { Api } from '../../Common/api';

const fetchComics = async () => await Api();


function* getComics(action) {
    const response = yield fetchComics();

    if (response) {
        yield put( comicsActions.getComicsSuccess(response.data.results) );
    } else {
        yield put( comicsActions.getComicsFail({
            codigo: '',
            message: ''
        }));
    }
}

function* actionWatcher() {
    yield takeLatest(comicsActions.getComics, getComics)
}

export default function* comicSaga() {
    yield all([ actionWatcher() ])
}
import { fork, all } from 'redux-saga/effects';
import ComicsSaga from '../services/comics/comicSaga'

export default function* rootSaga() {
    yield all ([
        fork(ComicsSaga)
    ]);
}
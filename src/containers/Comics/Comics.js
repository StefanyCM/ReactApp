import { comicsActions } from '../../services/comics/comicsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ComicCard } from '../../components';
import React, { useEffect } from 'react';
import { Spin } from 'antd';
import './Comics.css';

const Comics = () => {

  const { comics, loading, selected } = useSelector(state => state.comics);

  const dispatch = useDispatch();
  const handleSelect = (comics) => dispatch(comicsActions.getSelectedComic(comics));

  console.log('State: ', comics);

  useEffect(() => {
    dispatch(
      comicsActions.getComics()
    );
  }, []);
  return (
    <>
      <div>{ loading && <Spin size="large" /> }</div>
      <div className="comics-container">
        <div className="comics">
          <h1>COMICS</h1>
          {[...comics].map((comic) => {
            const { id } = comic;
            return (
              <ComicCard key={id} comic={comic} />
            );
          })}
        </div>
        {<div className="comics-details">
            <h1>COMIC SELECCIONADO</h1>
            <div className="selected-comics">
              <div>{selected && <ComicCard comic={comics} onSelect={handleSelect} />}</div>
            </div>
          </div>}
      </div>
    </>
  );
};

export default Comics;

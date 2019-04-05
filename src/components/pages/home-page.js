import React from 'react';
import FilmList from '../film-list';
import Paginator from "../paginator";

const HomePage = () => {
  return (
    <>
      <FilmList />
      <Paginator/>
    </>
  );
};

export default HomePage;

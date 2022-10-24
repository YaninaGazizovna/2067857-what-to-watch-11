import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  FilmsCount: 9,
  FilmRelease:2015,
  FilmName:'The Grand Budapest Hotel',
  FilmGenre:'Drama'
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
   <App
      filmsCount = {Setting.FilmsCount}
      filmRelease = {Setting.FilmRelease}
      filmName = {Setting.FilmName}
      filmGenre = {Setting.FilmGenre}
    />
  </React.StrictMode>,
);

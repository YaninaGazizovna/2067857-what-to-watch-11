import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import ListScreen from '../../pages/list-screen/list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in';
import NoScreenFound from '../../pages/no-screen-found/no-screen-found';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  filmsCount: number;
  filmRelease:number;
  filmName:string;
  filmGenre:string;
}

function App({filmsCount,filmRelease,filmName,filmGenre}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Home}
            element={
              <WelcomeScreen filmsCount={filmsCount} filmRelease={filmRelease} filmName={filmName}
                filmGenre={filmGenre}
              />
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <ListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Movie}
            element={<MoviePageScreen/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen/>}
          />
          <Route
            path="*"
            element={<NoScreenFound/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

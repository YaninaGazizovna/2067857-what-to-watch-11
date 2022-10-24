import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  filmsCount: number;
  filmRelease:number;
  filmName:string;
  filmGenre:string;
}

function App({filmsCount,filmRelease,filmName,filmGenre}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen filmsCount={filmsCount} filmRelease={filmRelease} filmName={filmName}
    filmGenre={filmGenre}/>
  );
}

export default App;

import FullScreenLoading from './components/Loading/FullScreenLoading.Component';
import useAuthAndThemeCheck from './hooks/useAuthAndThemeCheck';
import MainRoute from './route/routes';

const App = () => {
  const authChecked = useAuthAndThemeCheck();

  return !authChecked ? <FullScreenLoading /> : <MainRoute />;
};

export default App;

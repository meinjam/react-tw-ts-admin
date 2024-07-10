import FullScreenLoading from './components/Loading/FullScreenLoading.Component';
import useAuthCheck from './hooks/useAuthCheck';
import MainRoute from './route/routes';

const App = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? <FullScreenLoading /> : <MainRoute />;
};

export default App;

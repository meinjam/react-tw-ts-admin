import useAuthCheck from './hooks/useAuthCheck';

const App = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    'Loading.....'
  ) : (
    <div className='bg-slate-500 container'>
      <h1>This is App</h1>
    </div>
  );
};

export default App;

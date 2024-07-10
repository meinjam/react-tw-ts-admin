import { ImSpinner5 } from 'react-icons/im';

const FullScreenLoading = () => {
  return (
    <div className='w-screen h-dvh grid place-items-center'>
      <div className='flex items-center gap-2'>
        <ImSpinner5 className='animate-spin w-5 h-5' />
        <h6 className='text-2xl'>Loading...</h6>
      </div>
    </div>
  );
};

export default FullScreenLoading;

const Home = () => {
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-3 gap-5'>
        <div className='h-60 w-full bg-white shadow rounded'></div>
        <div className='h-60 w-full bg-white shadow rounded'></div>
        <div className='h-60 w-full bg-white shadow rounded'></div>
      </div>

      <div className='grid grid-cols-5 gap-5'>
        <div className='h-72 w-full bg-white shadow rounded col-span-3'></div>
        <div className='h-72 w-full bg-white shadow rounded col-span-2'></div>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        <div className='h-72 w-full bg-white shadow rounded'></div>
        <div className='h-72 w-full bg-white shadow rounded'></div>
      </div>

      <div className='grid grid-cols-5 gap-5'>
        <div className='h-72 w-full bg-white shadow rounded col-span-2'></div>
        <div className='h-72 w-full bg-white shadow rounded col-span-3'></div>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        <div className='h-72 w-full bg-white shadow rounded'></div>
        <div className='h-72 w-full bg-white shadow rounded'></div>
      </div>
    </div>
  );
};

export default Home;

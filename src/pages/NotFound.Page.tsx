import NotFoundComponent from '@/components/not-found/NotFound.Component';

const NotFound = () => {
  return (
    <>
      <section className='bg-gray-100 w-full h-screen flex items-center justify-center'>
        <div className='container'>
          <NotFoundComponent inputClasses='max-w-2xl' />
        </div>
      </section>
    </>
  );
};

export default NotFound;

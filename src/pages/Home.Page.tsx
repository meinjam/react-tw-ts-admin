import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className='space-y-5'>
      <div className='grid md:grid-cols-3 gap-5'>
        <Card className='h-60 w-full'></Card>
        <Card className='h-60 w-full'></Card>
        <Card className='h-60 w-full'></Card>
      </div>

      <div className='grid md:grid-cols-5 gap-5'>
        <Card className='h-72 w-full md:col-span-3'></Card>
        <Card className='h-72 w-full md:col-span-2'></Card>
      </div>

      <div className='grid md:grid-cols-2 gap-5'>
        <Card className='h-72 w-ful'></Card>
        <Card className='h-72 w-ful'></Card>
      </div>

      <div className='grid md:grid-cols-5 gap-5'>
        <Card className='h-72 w-full md:col-span-3'></Card>
        <Card className='h-72 w-full md:col-span-2'></Card>
      </div>

      <div className='grid md:grid-cols-2 gap-5'>
        <Card className='h-72 w-ful'></Card>
        <Card className='h-72 w-ful'></Card>
      </div>
    </div>
  );
};

export default Home;

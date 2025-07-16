import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Dynamic imports for better performance
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="py-20 bg-gray-50 animate-pulse"><div className="container mx-auto px-4"><div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div><div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div></div></div>
});

const Courses = dynamic(() => import('@/components/Courses'), {
  loading: () => <div className="py-20 bg-white animate-pulse"><div className="container mx-auto px-4"><div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div><div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div></div></div>
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Courses />
    </>
  );
}

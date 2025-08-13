import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/common/Card';

export default function Home() {
  const user = {
    image: "https://placehold.co/100x100/A0AEC0/FFFFFF?text=Shyaka",
    name: "Shyaka Ndamukunda",
    email: "shyaka.ndamukunda@alustudent.com",
  };

  return (
    <div>
      <Head>
        <title>ALX Project 0x02</title>
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to ALX Project 0x02!</h1>
        <p className="mt-4 text-lg text-gray-600">Your journey into Next.js, TypeScript, and Tailwind CSS begins here.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/home" className="text-blue-500 hover:text-blue-700">
            Go to the Home Page
          </Link>
          <Link href="/about" className="text-blue-500 hover:text-blue-700">
            Go to the About Page
          </Link>
        </div>
        <div className="mt-8">
          <Card image={user.image} name={user.name} email={user.email} />
        </div>
      </main>
    </div>
  );
}

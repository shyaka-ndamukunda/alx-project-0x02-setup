// alx-project-0x02/pages/index.tsx
import Head from 'next/head';
import Link from 'next/link'; // New import

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 0x02</title>
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to ALX Project 0x02!</h1>
        <p className="mt-4 text-lg text-gray-600">Your journey into Next.js, TypeScript, and Tailwind CSS begins here.</p>
        <div className="mt-8">
          <Link href="/about" className="text-blue-500 hover:text-blue-700">
            Go to the About Page
          </Link>
        </div>
      </main>
    </div>
  );
}
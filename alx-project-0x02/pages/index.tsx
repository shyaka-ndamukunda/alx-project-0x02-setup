    // pages/index.tsx

    import Head from 'next/head';

    export default function Home() {
      return (
        <>
          <Head>
            <title>Welcome to ALX Project 0x02</title>
            <meta name="description" content="Initial setup for ALX Project 0x02" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <h1 className="text-5xl font-bold text-gray-800">
              Welcome to ALX Project 0x02!
            </h1>
            <p className="mt-3 text-2xl text-gray-600">
              Your journey into Next.js, TypeScript, and Tailwind CSS begins here.
            </p>
          </div>
        </>
      );
    }
    
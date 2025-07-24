    // pages/home.tsx

    import Head from 'next/head';

    const HomePage: React.FC = () => {
      return (
        <>
          <Head>
            <title>Home Page</title>
            <meta name="description" content="This is the Home page of ALX Project 0x02" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-100">
            <h1 className="text-5xl font-bold text-blue-800">
              Welcome to the Home Page!
            </h1>
            <p className="mt-3 text-xl text-blue-600">
              You've successfully navigated here.
            </p>
          </div>
        </>
      );
    };

    export default HomePage;
    
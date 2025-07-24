    // pages/about.tsx

    import Head from 'next/head';

    const AboutPage: React.FC = () => {
      return (
        <>
          <Head>
            <title>About Us</title>
            <meta name="description" content="Learn more about ALX Project 0x02" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-100">
            <h1 className="text-5xl font-bold text-green-800">
              About Our Project
            </h1>
            <p className="mt-3 text-xl text-green-600">
              This project is designed to help you master Next.js fundamentals.
            </p>
          </div>
        </>
      );
    };

    export default AboutPage;
    
    // pages/home.tsx

    import Head from 'next/head';
    import Card from '@/components/common/Card'; // Import the Card component

    const HomePage: React.FC = () => {
      return (
        <>
          <Head>
            <title>Home Page</title>
            <meta name="description" content="This is the Home page of ALX Project 0x02" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-blue-100 px-4">
            <h1 className="text-5xl font-bold text-blue-800 mb-8">
              Welcome to the Home Page!
            </h1>
            <p className="mt-3 text-xl text-blue-600 mb-12">
              Explore some of our features below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              <Card
                title="Dynamic Content 1"
                content="This is the content for the first card. It demonstrates how reusable components work with different data."
              />
              <Card
                title="Feature Highlight"
                content="Our application offers a variety of features designed to simplify your daily tasks and enhance your experience."
              />
              <Card
                title="Easy to Use"
                content="The intuitive interface ensures a smooth and enjoyable user journey from start to finish."
              />
              <Card
                title="Scalable Architecture"
                content="Built with Next.js, this application is designed to scale efficiently as your needs grow."
              />
              <Card
                title="Community Support"
                content="Join our growing community and get support from fellow developers and users."
              />
              <Card
                title="Secure and Reliable"
                content="We prioritize the security and reliability of our platform to protect your data."
              />
            </div>
          </div>
        </>
      );
    };

    export default HomePage;
    
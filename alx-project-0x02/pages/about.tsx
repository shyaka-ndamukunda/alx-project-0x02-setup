    // pages/about.tsx

    import Head from 'next/head';
    import Button from '@/components/common/Button'; // Import the Button component

    const AboutPage: React.FC = () => {
      return (
        <>
          <Head>
            <title>About Us</title>
            <meta name="description" content="Learn more about ALX Project 0x02" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-green-100 px-4">
            <h1 className="text-5xl font-bold text-green-800 mb-8">
              About Our Project
            </h1>
            <p className="mt-3 text-xl text-green-600 mb-12 text-center max-w-2xl">
              This project is designed to help you master Next.js fundamentals,
              including routing, component creation, and state management.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Button
                buttonLabel="Small Rounded"
                size="small" // Changed from buttonSize to size
                shape="rounded-sm" // Changed from buttonShape to shape
                buttonBackgroundColor="blue"
                action={() => alert('Small button clicked!')}
              />
              <Button
                buttonLabel="Medium Default"
                size="medium" // Changed from buttonSize to size
                shape="rounded-md" // Changed from buttonShape to shape
                buttonBackgroundColor="orange"
                action={() => alert('Medium button clicked!')}
              />
              <Button
                buttonLabel="Large Full"
                size="large" // Changed from buttonSize to size
                shape="rounded-full" // Changed from buttonShape to shape
                buttonBackgroundColor="green"
                action={() => alert('Large button clicked!')}
              />
              <Button
                buttonLabel="Another Medium"
                size="medium" // Changed from buttonSize to size
                shape="rounded-md" // Changed from buttonShape to shape
                buttonBackgroundColor="red"
                action={() => alert('Another medium button clicked!')}
              />
            </div>

            <p className="text-lg text-gray-700 text-center max-w-xl">
              We aim to provide a solid foundation for building modern web applications
              with a focus on reusability and best practices.
            </p>
          </div>
        </>
      );
    };

    export default AboutPage;
    
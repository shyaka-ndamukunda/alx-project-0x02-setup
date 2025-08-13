import Header from '@/components/layout/Header';
import Head from 'next/head';
import Button from '@/components/common/Button';

const AboutPage = () => {
  const handleButtonClick = () => {
    alert('You clicked the button!');
  };

  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header
        title="About Page"
        description="Learn more about our project."
      />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>About Page</h1>
        <p>This is the About page of our Next.js project.</p>
        <div className="mt-8">
          <Button onClick={handleButtonClick} size="medium" shape="rounded-lg">
            Click Me!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

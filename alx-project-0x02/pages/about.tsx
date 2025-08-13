import Header from '@/components/layout/Header';
import Head from 'next/head';

const AboutPage = () => {
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
      </div>
    </div>
  );
};

export default AboutPage;

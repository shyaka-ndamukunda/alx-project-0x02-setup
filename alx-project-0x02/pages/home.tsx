import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">This is the Home Page</h1>
        <Card
          title="Welcome to My Project!"
          content="This is an example of a reusable Card component."
        />
      </div>
    </div>
  );
};

export default HomePage;

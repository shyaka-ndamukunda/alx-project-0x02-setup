import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostSubmit = (title: string, content: string) => {
    console.log('New post submitted:', { title, content });
    // In a future task, you will integrate this with a database
  };

  return (
    <div>
      <Header
        title="Home Page"
        description="This is the main page of our application."
      />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">This is the Home Page</h1>
        <Card
          title="Welcome to My Project!"
          content="This is an example of a reusable Card component."
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
        >
          Create New Post
        </button>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handlePostSubmit}
        />
      </div>
    </div>
  );
};

export default HomePage;

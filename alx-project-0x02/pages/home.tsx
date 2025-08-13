import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import { type Post } from '@/interfaces';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

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
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8">This is the Home Page</h1>
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
        <div className="mt-8 flex flex-wrap justify-center">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

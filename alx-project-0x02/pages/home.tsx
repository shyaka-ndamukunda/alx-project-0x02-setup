    // pages/home.tsx

    import Head from 'next/head';
    import React, { useState } from 'react'; // Import useState
    import Card from '@/components/common/Card';
    import PostModal from '@/components/common/PostModal'; // Import PostModal
    import { type Post } from '@/interfaces'; // Import Post interface

    const HomePage: React.FC = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [posts, setPosts] = useState<Post[]>([
        // Initial static posts (can be removed later if all posts come from API)
        { id: 1, title: 'Dynamic Content 1', content: 'This is the content for the first card. It demonstrates how reusable components work with different data.' },
        { id: 2, title: 'Feature Highlight', content: 'Our application offers a variety of features designed to simplify your daily tasks and enhance your experience.' },
        { id: 3, title: 'Easy to Use', content: 'The intuitive interface ensures a smooth and enjoyable user journey from start to finish.' },
        { id: 4, title: 'Scalable Architecture', content: 'Built with Next.js, this application is designed to scale efficiently as your needs grow.' },
        { id: 5, title: 'Community Support', content: 'Join our growing community and get support from fellow developers and users.' },
        { id: 6, title: 'Secure and Reliable', content: 'We prioritize the security and reliability of our platform to protect your data.' },
      ]);

      const handleAddPost = (newPostData: { title: string; content: string }) => {
        const newPost: Post = {
          id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1, // Simple ID generation
          ...newPostData,
        };
        setPosts((prevPosts) => [...prevPosts, newPost]);
      };

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

            {/* Button to open the modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 mb-12"
            >
              Add New Post
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {posts.map((post) => (
                <Card key={post.id} title={post.title} content={post.content} />
              ))}
            </div>
          </div>

          {/* Post Modal */}
          <PostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />
        </>
      );
    };

    export default HomePage;
    
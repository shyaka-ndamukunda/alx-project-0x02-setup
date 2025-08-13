import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import { type Post } from '@/interfaces';

const PostsPage = () => {
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

  return (
    <div>
      <Header
        title="Posts"
        description="A list of all posts fetched from a public API."
      />
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8">All Posts</h1>
        <div className="mt-8 flex flex-wrap justify-center">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;

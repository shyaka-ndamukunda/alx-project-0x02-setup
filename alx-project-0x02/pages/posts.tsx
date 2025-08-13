import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type Post } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;

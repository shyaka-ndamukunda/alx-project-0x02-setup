import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import { type Post } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <Header title={`Post #${post.id}`} description={post.title} />
      <div className="min-h-screen flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 max-w-4xl">{post.body}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (context) => {
  const { id } = context.params as { id: string };
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await response.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;

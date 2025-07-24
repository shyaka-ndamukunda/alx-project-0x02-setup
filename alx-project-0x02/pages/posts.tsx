    // pages/posts.tsx

    import Head from 'next/head';

    const PostsPage: React.FC = () => {
      return (
        <>
          <Head>
            <title>Posts Page</title>
            <meta name="description" content="This is the Posts page of ALX Project 0x02" />
          </Head>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-yellow-100">
            <h1 className="text-5xl font-bold text-yellow-800">
              Our Latest Posts
            </h1>
            <p className="mt-3 text-xl text-yellow-600">
              Content for posts will be displayed here.
            </p>
          </div>
        </>
      );
    };

    export default PostsPage;
    
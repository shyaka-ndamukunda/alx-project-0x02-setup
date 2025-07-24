    // pages/_app.tsx

    import '@/styles/globals.css';
    import type { AppProps } from 'next/app';
    import Layout from '../components/layout/Layout'; // Import your Layout component

    export default function App({ Component, pageProps }: AppProps) {
      return (
        <Layout> {/* Wrap your Component with the Layout */}
          <Component {...pageProps} />
        </Layout>
      );
    }
    
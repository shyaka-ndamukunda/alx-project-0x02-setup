    // components/layout/Layout.tsx

    import { ReactNode } from "react";
    import Footer from "./Footer"; // Assuming Footer.tsx exists in the same directory
    import Header from "./Header"; // Assuming Header.tsx exists in the same directory

    interface LayoutProps {
      children: ReactNode;
    }

    const Layout: React.FC<LayoutProps> = ({ children }) => {
      return (
        <>
          <Header />
          <main className="pt-[100px] min-h-screen"> {/* Added padding-top to account for fixed header */}
            {children}
          </main>
          <Footer />
        </>
      );
    };

    export default Layout;
    
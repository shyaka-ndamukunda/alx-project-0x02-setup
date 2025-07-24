    // components/layout/Header.tsx

    import Link from "next/link";
    import Button from "@/components/common/Button"; // Make sure Button.tsx exists in common folder

    const Header: React.FC = () => {
      return (
        <header className="fixed w-full bg-white shadow-md z-40">
          <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
            <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Splash App
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex flex-grow justify-center space-x-8">
              <Link href="/home" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About
              </Link>
              <Link href="/posts" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Posts
              </Link>
            </nav>

            {/* Button Group */}
            <div className="flex gap-4">
              <Button
                buttonLabel="Sign In"
                buttonBackgroundColor="red"
                size="medium"
              />
              <Button
                buttonLabel="Sign Up"
                buttonBackgroundColor="blue"
                size="medium"
              />
            </div>
          </div>
        </header>
      );
    };

    export default Header;
    
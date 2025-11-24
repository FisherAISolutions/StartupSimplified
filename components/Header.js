import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-indigo-600">
            StartupsSimplified
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features">
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
              Features
            </span>
          </Link>
          <Link href="#pricing">
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="#how-it-works">
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
              How It Works
            </span>
          </Link>
          <Link href="#contact">
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>
        <Link
          href="/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

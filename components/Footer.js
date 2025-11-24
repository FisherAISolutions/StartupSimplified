export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {year} StartupsSimplified. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

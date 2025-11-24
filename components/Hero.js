export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          StartupsSimplified
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Your complete AI‑guided startup creator. From idea to launch and beyond.
        </p>
        <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

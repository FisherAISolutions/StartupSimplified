export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-indigo-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build your startup?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join StartupsSimplified today and transform your idea into a thriving
          business.
        </p>
        <a
          href="/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition"
        >
          Get Started for Free
        </a>
      </div>
    </section>
  );
}

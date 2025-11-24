const features = [
  {
    title: 'Personalized Idea Generator',
    description:
      'Take a short quiz to discover startup ideas that match your interests, skills and budget.',
    icon: '💡',
  },
  {
    title: 'Legal & Formation',
    description:
      'Step-by-step guidance through LLC formation, EIN registration, licenses and permits.',
    icon: '📑',
  },
  {
    title: 'Landing Page Builder',
    description:
      'Generate a professional, high‑converting landing page with AI — no coding required.',
    icon: '🌐',
  },
  {
    title: 'Marketing & Growth',
    description:
      'Get tailored marketing plans, scripts and growth tactics to reach your ideal customers.',
    icon: '📈',
  },
  {
    title: 'Execution Dashboard',
    description:
      'Stay on track with interactive checklists and workflows that guide you from idea to launch.',
    icon: '✅',
  },
  {
    title: 'Scale & Automate',
    description:
      'Discover tools and automations to help you run and scale your business efficiently.',
    icon: '🚀',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

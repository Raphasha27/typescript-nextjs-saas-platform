import { Shield, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Built on Next.js for optimal performance and SEO.',
    icon: Zap,
  },
  {
    name: 'Secure Authentication',
    description: 'JWT-based authentication with role-based access control.',
    icon: Shield,
  },
  {
    name: 'Real-time Analytics',
    description: 'Track user behavior and business metrics in real-time.',
    icon: BarChart3,
  },
  {
    name: 'Team Management',
    description: 'Manage teams, roles, and permissions effortlessly.',
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Powerful features to help you build and scale your SaaS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

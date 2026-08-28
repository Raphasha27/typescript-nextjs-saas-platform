import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Free',
    price: 'R0',
    description: 'Perfect for getting started',
    features: ['1 Project', '1,000 API calls', 'Community support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'R299',
    description: 'For growing businesses',
    features: ['10 Projects', '100,000 API calls', 'Priority support', 'Advanced analytics'],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: ['Unlimited projects', 'Unlimited API calls', '24/7 support', 'Custom integrations'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="text-sm font-semibold text-blue-600">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                {plan.name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{plan.description}</p>
              <p className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                {plan.price}
                {plan.price !== 'Custom' && <span className="text-lg">/mo</span>}
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8" variant={plan.popular ? 'default' : 'outline'}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

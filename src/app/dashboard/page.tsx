import { StatsCard } from '@/components/dashboard/StatsCard';
import { BarChart3, Users, FolderOpen, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Projects"
          value="12"
          change="+2 this month"
          icon={FolderOpen}
        />
        <StatsCard
          title="Active Users"
          value="1,234"
          change="+15% from last month"
          icon={Users}
        />
        <StatsCard
          title="Revenue"
          value="R45,230"
          change="+12% from last month"
          icon={TrendingUp}
        />
        <StatsCard
          title="API Calls"
          value="45.2K"
          change="+8% from last month"
          icon={BarChart3}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Project {i} updated</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

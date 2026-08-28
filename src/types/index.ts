export interface User {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN' | 'MANAGER';
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalProjects: number;
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export type Theme = 'light' | 'dark' | 'system';

export interface AppConfig {
  theme: Theme;
  language: string;
  notifications: boolean;
} 
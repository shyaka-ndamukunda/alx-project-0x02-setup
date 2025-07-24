// interfaces/index.ts
import { ReactNode } from 'react';

export interface ButtonProps {
  buttonLabel: string;
  size?: 'small' | 'medium' | 'large'; // Changed to 'size'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Changed to 'shape'
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newPost: { title: string; content: string }) => void;
}

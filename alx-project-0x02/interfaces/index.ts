export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-lg';
  onClick: () => void;
  className?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

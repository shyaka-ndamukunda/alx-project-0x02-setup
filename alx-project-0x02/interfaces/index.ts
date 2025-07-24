    // interfaces/index.ts
    // This file will contain shared TypeScript interfaces.
        // interfaces/index.ts
    import { ReactNode } from 'react';

    export interface ButtonProps {
      buttonLabel: string
      buttonSize?: string
      buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
      action?: () => void
    }

    export interface LayoutProps {
      children: ReactNode;
    }

    export interface PageRouteProps {
      pageRoute: string
    }

    export interface CardProps {
      title: string;
      content: string;
    }
    
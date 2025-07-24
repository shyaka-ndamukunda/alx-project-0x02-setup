    // components/common/Button.tsx

    import React from 'react';
    import { type ButtonProps } from '@/interfaces'; // Ensure this import is correct

    const Button: React.FC<ButtonProps> = ({
      buttonLabel,
      size = 'medium', // Changed from buttonSize to size
      shape = 'rounded-md', // Changed from buttonShape to shape
      buttonBackgroundColor,
      action
    }) => {

      const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
      };

      const backgroundColorClass = buttonBackgroundColor ? {
        red: 'bg-red-500 hover:bg-red-600',
        blue: 'bg-blue-500 hover:bg-blue-600',
        orange: 'bg-orange-500 hover:bg-orange-600',
        green: 'bg-green-500 hover:bg-green-600',
      }[buttonBackgroundColor] : 'bg-gray-500 hover:bg-gray-600'; // Default gray

      return (
        <button
          onClick={action}
          className={`
            ${backgroundColorClass}
            ${sizeClasses[size]} {/* Using 'size' here */}
            ${shape} {/* Using 'shape' here */}
            font-semibold text-white
            transition duration-300 ease-in-out
            shadow-md hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-offset-2
            focus:ring-blue-500
          `}
        >
          {buttonLabel}
        </button>
      );
    };

    export default Button;
    
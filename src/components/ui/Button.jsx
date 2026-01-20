import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-gray-800 focus:ring-gray-900',
        secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
        accent: 'bg-accent text-white hover:bg-yellow-700 focus:ring-yellow-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50'
    };

    const sizes = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-2'
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'app':
                    '#fff1ea',
                'app-dark':
                    '#ffe7e7',
                'app-gray':
                    '#777777',
                'app-light':
                    '#f1f1f1',
                'app-primary':
                    '#f8ad81',
                'app-secondary':
                    '#cc4e24',
                'app-accent':
                    '#f1a163',

            },
            animation: {
                'slide-up': 'slide-up .7s ease-in-out',
                'slide-up-slow': 'slide-up 1.35s ease-in-out',
                'slide-down': 'slide-down .5s ease-in-out',
                'slide-left': 'slide-left 1s ease-in-out',
                'slide-right': 'slide-right 1s ease-in-out',
                'wave': 'wave 1.2s linear infinite',
                'slow-fade': 'slow-fade 2.2s ease-in-out',
                'scale-pulse': 'scale-pulse infinite 1.2s ease-in-out',
            },
            keyframes: {
                'slow-fade': {
                    from: {opacity: '0'},
                    to: {opacity: '1'},
                },
                'slide-up': {
                    from: {opacity: '0', transform: 'translateY(15%)'},
                    to: {opacity: '1', transform: 'none'},
                },
                'slide-down': {
                    from: {opacity: '0', transform: 'translateY(-15%)'},
                    to: {opacity: '1', transform: 'none'},
                },
                'slide-left': {
                    from: {opacity: '0', transform: 'translateX(-20px)'},
                    to: {opacity: '1', transform: 'translateX(0)'},
                },
                'slide-right': {
                    from: {opacity: '0', transform: 'translateX(20px)'},
                    to: {opacity: '1', transform: 'translateX(0)'},
                },
                'wave': {
                    '0%': {transform: 'scale(0)'},
                    '50%': {transform: 'scale(1)'},
                    '100%': {transform: 'scale(0)'},
                },
                'scale-pulse': {
                    '0%': {transform: 'scale(1)'},
                    '50%': {transform: 'scale(1.13)'},
                    '100%': {transform: 'scale(1)'},
                },
            },
            screens: {
                'xs': '560px'
            },

            boxShadow: {
                'mobile-bottom-menu-1': "4.1px -5px 0 0 rgb(17,24,39)",
                'mobile-bottom-menu-2': "-4.1px -5px 0 0 rgb(17,24,39)",
            },
        },
    },
    future: {
        // Disable hover effect on mobile
        hoverOnlyWhenSupported: true,
    },

    plugins: [],
};
export default config;

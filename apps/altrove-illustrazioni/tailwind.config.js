const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(
            __dirname,
            '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
        ),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                customPalette: {
                    lightGreen: '#BAD8B6',
                    lightYellow: '#E1EACD',
                    offWhite: '#F9F6E6',
                    pastelPurple: '#8D77AB',
                },
            },
        },
    },
    plugins: [],
};

import nx from '@nx/eslint-plugin';

export default [
    ...nx.configs['flat/base'],
    ...nx.configs['flat/typescript'],
    ...nx.configs['flat/javascript'],
    {
        ignores: [
            '**/dist',
            'package.json',
            'package-lock.json',
            'dist',
            'e2e/**',
            'karma.conf.js',
            'commitlint.config.js',
        ],
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                        {
                            sourceTag: 'type:e2e',
                            onlyDependOnLibsWithTags: ['type:app'],
                        },
                        {
                            sourceTag: 'type:app',
                            onlyDependOnLibsWithTags: [
                                'type:feature',
                                'type:util',
                            ],
                        },
                        {
                            sourceTag: 'type:feature',
                            onlyDependOnLibsWithTags: [
                                'type:sub-feature',
                                'type:data-access',
                                'type:ui',
                                'type:util',
                            ],
                        },
                        {
                            sourceTag: 'type:sub-feature',
                            onlyDependOnLibsWithTags: [
                                'type:sub-feature',
                                'type:data-access',
                                'type:ui',
                                'type:util',
                            ],
                        },
                        {
                            sourceTag: 'type:ui',
                            onlyDependOnLibsWithTags: ['type:ui', 'type:util'],
                        },
                        {
                            sourceTag: 'type:data-access',
                            onlyDependOnLibsWithTags: [
                                'type:util',
                                'type:data-access',
                            ],
                        },

                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    {
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.js',
            '**/*.jsx',
            '**/*.cjs',
            '**/*.mjs',
        ],
        // Override or add rules here
        rules: {},
    },
];

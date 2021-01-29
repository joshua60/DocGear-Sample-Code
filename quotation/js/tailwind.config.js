module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            screens: {
                'print': { 'raw': 'print' },
                'portrait': { 'raw': '(orientation:portrait' },
            }
        },
    },
    variants: {},
    plugins: [],
}
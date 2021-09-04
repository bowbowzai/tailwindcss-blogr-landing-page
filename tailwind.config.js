module.exports = {
    purge: [
        '*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'overpass': 'Overpass',
                'ubuntu': 'Ubuntu'
            },
            colors: {
                'light-red': 'hsl(356, 100%, 66%)',
                'very-light-red': 'hsl(355, 100%, 74%)',
                'very-dark-blue': 'hsl(208, 49%, 24%)',
                'grayish-blue': 'hsl(240, 2%, 79%)',
                'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
                'very-dark-black-blue': 'hsl(240, 10%, 16%)'

            }
        },
    },
    variants: {
        extend: {},
        display: ['responsive', 'group-hover', 'group-focus'],
    },
    plugins: [],
}
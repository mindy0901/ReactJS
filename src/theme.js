import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#109CF1',
            light: '#B4E1FC',
        },
        secondary: {
            main: '#19857b',
        },
        info: {
            main: '#000',
            light: '#90A0B7',
        },
        background: {
            default: '#f0f2f5',
        },
    },

    typography: {
        fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    },
});

theme = responsiveFontSizes(theme);

export default theme;

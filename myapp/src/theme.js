// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: '#ffffff', // Set paper background to white
            default: '#f9fafb', // Use gray-50 for default background (light gray)
        },
        text: {
            primary: '#000', // Set primary text color to black for contrast
            secondary: '#555', // Set secondary text color to a darker gray
        },
    },
});

export default theme;

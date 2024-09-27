// src/App.jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Ensure you import your theme
import DataTable from './components/DataTable';
import Header from './components/Header';
import tableData from './data/tableData';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Header />
        <DataTable data={tableData} />
      </div>
    </ThemeProvider>
  );
};

export default App;

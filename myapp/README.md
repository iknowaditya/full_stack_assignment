
# Data Table Component

## Overview

The Data Table Component is a React-based UI element designed to display data in a structured format. It includes features for sorting, filtering, grouping, and date range selection. The component utilizes Material UI for design consistency and responsiveness.

## Features

- **Sorting**: Sort by ascending or descending order for each column.
- **Filtering**: Filter data by specific columns with custom values.
- **Grouping**: Group data by selected columns.
- **Date Range Picker**: Filter data based on a selected date range.
- **Price Range Slider**: Filter data by price ranges.
- **Toggle Columns**: Show or hide specific columns in the data table.

## Installation

To use the Data Table Component, you need to install the following dependencies:

```bash
npm install @mui/material @mui/icons-material
```

## Usage

Import the `DataTable` component and use it in your application as follows:

```jsx
import React from 'react';
import DataTable from './DataTable';

const App = () => {
    const columns = [
        { accessorKey: 'id', header: 'ID', isVisible: true },
        { accessorKey: 'name', header: 'Name', isVisible: true },
        // Add other columns as needed
    ];

    const data = [
        { id: 1, name: 'Nutrition Attachment' },
        { id: 2, name: 'Mens Gadget' },
        // Add other data entries as needed
    ];

    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default App;
```

## Props

The `DataTable` component accepts the following props:

- `columns`: Array of column definitions, where each column should have `accessorKey`, `header`, and `isVisible`.
- `data`: Array of data entries to be displayed in the table.
- `onSort`: Function to handle sorting logic.
- `onFilter`: Function to handle filtering logic.
- `onGroup`: Function to handle grouping logic.

## Example Code

Here’s a sample code for the `DataTable` component with all its functionalities:

```jsx
import React, { useState } from 'react';
import { Drawer, Button, Typography, TextField, MenuItem } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import DateRangePicker from './DateRangePicker';
import PriceRangeSlider from './PriceRangeSlider';

const DataTable = ({ columns, data }) => {
    // Component logic
    // ...

    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <div style={{ width: '250px', padding: '16px' }}>
                <Button onClick={onClose}>Close</Button>
                {renderContent()}
            </div>
        </Drawer>
    );
};

export default DataTable;
```

## Styling

The component uses Tailwind CSS classes for styling. Ensure Tailwind CSS is set up in your project for the best appearance.

## License

This project is licensed under the MIT License.

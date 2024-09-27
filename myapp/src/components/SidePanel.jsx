import React, { useState } from 'react';
import { Drawer, Button, Typography, TextField, MenuItem } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined'; // Importing the icons
import DateRangePicker from './DateRangePicker';
import PriceRangeSlider from './PriceRangeSlider';

const SidePanel = ({ isOpen, onClose, actionType, columns, onSort, onFilter, onGroup }) => {
    const [filterField, setFilterField] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [groupField, setGroupField] = useState('');
    const [sortDirection, setSortDirection] = useState({});

    const clearSort = () => {
        setSortDirection({}); // Clear the sort direction state for all columns
        columns.forEach((column) => onSort(column.accessorKey, null)); // Reset sorting for all columns
        onClose(); // Optionally close the panel after clearing
    };

    const handleSort = (accessorKey) => {
        const currentDirection = sortDirection[accessorKey] === 'asc' ? 'desc' : 'asc';
        setSortDirection({ [accessorKey]: currentDirection });
        onSort(accessorKey, currentDirection);
    };

    const renderContent = () => {
        switch (actionType) {
            case 'search':
                return <Typography>Search Options Here</Typography>;

            case 'sort':
                return (
                    <>
                        <Typography variant="h6" className="mb-14">Sorting Options</Typography>
                        <div className="space-y-4">
                            {columns.map((column) => (
                                <div key={column.accessorKey} className="flex justify-between items-center text-sm space-x-2 border rounded-lg p-2">
                                    <span>{column.header}</span>
                                    <div className="">
                                        <SwapVertOutlinedIcon
                                            className={`cursor-pointer text-gray-300 hover:text-gray-500 transform transition-transform 
                                                ${sortDirection[column.accessorKey] === 'asc' ? 'rotate-180' : ''}
                                                ${sortDirection[column.accessorKey] ? 'text-gray-800' : 'text-gray-300'}`}
                                            onClick={() => handleSort(column.accessorKey)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 border border-blue-500 rounded">
                            <Button
                                className="w-full border text-gray-700 hover:bg-gray-100 p-2"
                                onClick={clearSort}
                            >
                                Clear Sort
                            </Button>
                        </div>
                    </>
                );

            case 'filter':
                return (
                    <>
                        <Typography variant="h6">Filter By</Typography>
                        <TextField
                            select
                            label="Select Column"
                            value={filterField}
                            onChange={(e) => setFilterField(e.target.value)}
                            fullWidth
                        >
                            {columns.map((column) => (
                                <MenuItem key={column.accessorKey} value={column.accessorKey}>
                                    {column.header}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Filter Value"
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                            fullWidth
                        />
                        <Button
                            onClick={() => {
                                onFilter(filterField, filterValue);
                                onClose();
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Apply Filter
                        </Button>
                        <PriceRangeSlider />
                        <DateRangePicker />
                    </>
                );

            case 'toggleColumns':
                return (
                    <>
                        <Typography variant="h6">Toggle Columns</Typography>
                        {columns.map((column) => (
                            <div key={column.accessorKey}>
                                <input type="checkbox" checked={column.isVisible} onChange={() => {/* Handle toggle visibility */ }} />
                                <label>{column.header}</label>
                            </div>
                        ))}
                    </>
                );

            case 'group':
                return (
                    <>
                        <Typography variant="h6">Group By</Typography>
                        <TextField
                            select
                            label="Select Group Field"
                            value={groupField}
                            onChange={(e) => setGroupField(e.target.value)}
                            fullWidth
                        >
                            {columns.map((column) => (
                                <MenuItem key={column.accessorKey} value={column.accessorKey}>
                                    {column.header}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            onClick={() => {
                                onGroup(groupField);
                                onClose();
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Apply Grouping
                        </Button>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <div style={{ width: '250px', padding: '16px' }}>
                <Button onClick={onClose}>Close</Button>
                {renderContent()}
            </div>
        </Drawer>
    );
};

export default SidePanel;

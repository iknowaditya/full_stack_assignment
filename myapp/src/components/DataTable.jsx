import React, { useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { IconButton } from '@mui/material';
import {
    Search as SearchIcon,
    SwapVert as SwapVertIcon,
    FilterList as FilterListIcon,
    Visibility as VisibilityIcon,
    GroupWork as GroupWorkIcon,
} from '@mui/icons-material';
import SidePanel from './SidePanel';
import moment from 'moment';

const columns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'category', header: 'Category' },
    { accessorKey: 'subcategory', header: 'Subcategory' },
    {
        accessorKey: 'createdAt', header: 'Created At', Cell: ({ cell }) => {
            const date = new Date(cell.getValue());
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        },
    },
    {
        accessorKey: 'updatedAt', header: 'Updated At', Cell: ({ cell }) => {
            const date = new Date(cell.getValue());
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        },
    },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'sale_price', header: 'Sale Price' },
];

const DataTable = ({ data }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [actionType, setActionType] = useState(null);
    const [filteredData, setFilteredData] = useState(data);

    const openSidePanel = (type) => {
        setActionType(type);
        setSidebarOpen(true);
    };

    const closeSidePanel = () => {
        setSidebarOpen(false);
        setActionType(null);
    };

    const handleSort = (column) => {
        const sortedData = [...filteredData].sort((a, b) => {
            if (a[column] < b[column]) return -1;
            if (a[column] > b[column]) return 1;
            return 0;
        });
        setFilteredData(sortedData);
    };

    const handleFilter = (field, value) => {
        const newFilteredData = data.filter((item) => String(item[field]).includes(value));
        setFilteredData(newFilteredData);
    };

    return (
        <>
            {filteredData.length === 0 ? (
                <div>No data available</div>
            ) : (
                <MaterialReactTable
                    columns={columns}
                    data={filteredData}
                    enableSorting
                    enableGlobalFilter
                    enablePagination
                    renderTopToolbar={() => (
                        <div className="flex justify-end">
                            <IconButton onClick={() => openSidePanel('search')}>
                                <SearchIcon />
                            </IconButton>
                            <IconButton onClick={() => openSidePanel('sort')}>
                                <SwapVertIcon />
                            </IconButton>
                            <IconButton onClick={() => openSidePanel('filter')}>
                                <FilterListIcon />
                            </IconButton>
                            <IconButton onClick={() => openSidePanel('toggleColumns')}>
                                <VisibilityIcon />
                            </IconButton>
                            <IconButton onClick={() => openSidePanel('group')}>
                                <GroupWorkIcon />
                            </IconButton>
                        </div>
                    )}
                />
            )}
            <SidePanel
                isOpen={isSidebarOpen}
                onClose={closeSidePanel}
                actionType={actionType}
                columns={columns}
                onSort={handleSort}
                onFilter={handleFilter}
            />
        </>
    );
};

// Export the component
export default DataTable;

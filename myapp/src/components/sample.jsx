import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

const columns = [
    {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        size: 50,
    },
    {
        accessorKey: 'name',
        header: 'Name',
        enableColumnOrdering: false,
        size: 100,
    },
    {
        accessorKey: 'category',
        header: 'Category',
        enableColumnOrdering: false,
        size: 100,
    },
    {
        accessorKey: 'subcategory',
        header: 'Subcategory',
        enableColumnOrdering: false,
        size: 100,
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        enableColumnOrdering: false,
        Cell: ({ cell }) => {
            const date = new Date(cell.getValue());
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        },
        size: 100,
    },
    {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        enableColumnOrdering: false,
        Cell: ({ cell }) => {
            const date = new Date(cell.getValue());
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        },
        size: 100,
    },
    {
        accessorKey: 'price',
        header: 'Price',
        enableColumnOrdering: false,
        size: 50,
    },
    {
        accessorKey: 'sale_price',
        header: 'Sale Price',
        enableColumnOrdering: false,
        size: 50,
    },
];

const DataTable = ({ data }) => {
    return (

        <MaterialReactTable

            columns={columns}
            data={data}
            enableColumnOrdering
            enableColumnActions={false}
            enableCellActions={true}
            enableSorting={true}
            enableGrouping={true}
            enableGlobalFilter
            enablePagination
            enableStickyHeader
            enablaStickyFooter
            positionToolbarAlertBanner="top"
            muiTablePaperProps={{
                sx: {
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                },
            }}
            muiTableBodyCellProps={{
                align: 'center',
            }}
            muiTableFooterCellProps={{
                align: 'center',
            }}
            muiTableHeadCellProps={{
                align: 'center',
            }}
            enableGlobalFilterModes
            initialState={{
                showGlobalFilter: true,
            }}
            muiSearchTextFieldProps={{
                placeholder: 'Search',
                variant: 'outlined',
            }}
            muiPaginationProps={{
                boundaryCount: 1,
                shape: 'rounded',
                variant: 'outlined',
                showFirstButton: false,
                showLastButton: false,
                showRowsPerPage: false,

            }}

            positionPagination="bottom"
            paginationDisplayMode="pages"
        // renderToolbarInternalActions={({
        //     table
        // }) => {
        //     return <>
        //         <AcUnitOutlinedIcon table={table} />
        //     </>;
        // }}
        />

    );
};

// Make sure to export the component properly
export default DataTable;

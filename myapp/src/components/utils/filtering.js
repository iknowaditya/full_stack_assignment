export const filterData = (data, filterField, filterValue) => {
    return data.filter(item => item[filterField]?.toString().includes(filterValue));
};

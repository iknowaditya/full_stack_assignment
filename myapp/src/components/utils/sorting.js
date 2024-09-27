export const sortData = (data, field) => {
    return [...data].sort((a, b) => (a[field] > b[field] ? 1 : -1));
};

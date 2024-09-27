export const groupData = (data, groupField) => {
    return data.reduce((acc, item) => {
        const key = item[groupField];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

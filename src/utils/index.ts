let newIndex = 0;
export const add = (arr: number[]) => {
    newIndex++;
    return [...arr, newIndex];
};

export const required = value => {
    if(value) return undefined;
    return 'Пустое поле'
};

export const maxLenghtC = (maxLenght) => (value) => {
    if(value.length > maxLenght) return `Max len is ${maxLenght} symbol`;

    return undefined
}
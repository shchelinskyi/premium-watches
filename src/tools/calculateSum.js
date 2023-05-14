const calculateSum = (itemsArray) => {
    let sum = 0;
    for (let item of itemsArray) {
        sum += Number(item.price.replace(/\s+/g, ''))*item.quantity;
    }
    const newSum = sum.toLocaleString('ru');
    return newSum;
}

export default calculateSum;
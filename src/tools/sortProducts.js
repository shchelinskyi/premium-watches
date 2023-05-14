export const sortProductsByPriceUp = (arr) => {
    return arr.sort((a,b) => {
        return a.price - b.price
    })
}

export const sortProductsByPriceDown = (arr) => {
    return arr.sort((a,b) => {
        return b.price - a.price
    })
}
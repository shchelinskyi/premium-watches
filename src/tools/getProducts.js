const getProducts = async (url) => {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
}

export default getProducts;
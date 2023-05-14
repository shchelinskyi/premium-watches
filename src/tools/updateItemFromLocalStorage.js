const updateItemFromLocalStorage = (name, data) => {
    window.localStorage.setItem(name, JSON.stringify(data));
};

export default updateItemFromLocalStorage;